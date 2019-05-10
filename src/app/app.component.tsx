import React, { Component } from "react";

import { MusicVideo } from "src/models";
import VideoPlayer from "src/video-player";
import Playlist from "src/playlist";
import VideoForm from "src/video-form";

import styles from "./styles.scss";

interface Props {
  playlist: MusicVideo[];
}

interface State {
  currentIndex: number;
}

export default class App extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
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
          <VideoPlayer video={this.props.playlist[this.state.currentIndex]} onVideoEnd={this.handleVideoEnd} />
          <Playlist current={this.state.currentIndex} onChange={this.change} />
          <VideoForm />
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
    const nextIndex = (this.state.currentIndex + 1) % this.props.playlist.length;
    this.setState({ currentIndex: nextIndex });
  }
}
