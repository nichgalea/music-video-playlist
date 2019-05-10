import React, { Component } from "react";
import cx from "classnames";

import { MusicVideo } from "src/models";

import styles from "./styles.scss";

interface Props {
  video: MusicVideo;
  index: number;
  onClick(index: number): void;
  nowPlaying: boolean;
}

export default class PlayistEntry extends Component<Props> {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <li title="Click to play" className={cx(this.props.nowPlaying && styles.nowPlaying)} onClick={this.handleClick}>
        {this.props.nowPlaying ? <div className={styles.nowPlayingText}>Now Playing</div> : null}
        <div className={styles.songTitle}>{this.props.video.title}</div>
        <div className={styles.artist}>{this.props.video.artist}</div>
      </li>
    );
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }
}
