import React, { Component } from "react";

import { MusicVideo } from "models";
import VideoPlayer from "video-player";
import Playlist from "playlist";

import styles from "./styles.scss";

interface State {
  currentIndex: number;
  playlist: MusicVideo[];
}

export default class App extends Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      playlist: [
        { title: "Toxicity", artist: "System of a Down", url: "https://www.youtube.com/watch?v=iywaBOMvYLI" },
        { title: "All the small things", artist: "Blink-182", url: "https://www.youtube.com/watch?v=9Ht5RZpzPqw" },
        { title: "Dammit", artist: "Blink-182", url: "https://www.youtube.com/watch?v=sT0g16_LQaQ" }
      ]
    };

    this.handleVideoEnd = this.handleVideoEnd.bind(this);
    this.loadNextVideo = this.loadNextVideo.bind(this);
    this.change = this.change.bind(this);
  }

  render() {
    return (
      <div className={styles.app}>
        <h1>Music Video Player</h1>

        <div className={styles.mainContent}>
          <VideoPlayer video={this.state.playlist[this.state.currentIndex]} onVideoEnd={this.handleVideoEnd} />
          <Playlist playlist={this.state.playlist} current={this.state.currentIndex} onChange={this.change} />
        </div>
      </div>
    );
  }

  handleVideoEnd() {
    this.loadNextVideo();
  }

  change(index: number) {
    this.setState({ currentIndex: index });
  }

  loadNextVideo() {
    const nextIndex = (this.state.currentIndex + 1) % this.state.playlist.length;
    this.setState({ currentIndex: nextIndex });
  }
}
