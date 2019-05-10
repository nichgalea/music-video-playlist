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
  shuffled: boolean;
}

export default class App extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      shuffled: false
    };

    this.handleVideoEnd = this.handleVideoEnd.bind(this);
    this.loadPreviousVideo = this.loadPreviousVideo.bind(this);
    this.loadNextVideo = this.loadNextVideo.bind(this);
    this.change = this.change.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
  }

  render() {
    return (
      <div className={styles.app}>
        <h1>Music Video Player</h1>

        <div className={styles.mainContent}>
          <VideoPlayer video={this.props.playlist[this.state.currentIndex]} onVideoEnd={this.handleVideoEnd} />

          <Playlist
            current={this.state.currentIndex}
            onChange={this.change}
            onPrevious={this.loadPreviousVideo}
            onNext={this.loadNextVideo}
          />

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

  loadPreviousVideo() {
    const nextIndex = (this.state.currentIndex === 0 ? this.props.playlist.length : this.state.currentIndex) - 1;
    this.setState({ currentIndex: nextIndex });
  }

  loadNextVideo() {
    const nextIndex = (this.state.currentIndex + 1) % this.props.playlist.length;
    this.setState({ currentIndex: nextIndex });
  }

  handleShuffle() {
    this.setState({ shuffled: !this.state.shuffled });
  }
}
