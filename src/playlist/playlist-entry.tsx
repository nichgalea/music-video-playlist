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
  private element!: HTMLLIElement;
  private intersectionObserver!: IntersectionObserver;
  private isVisible = false;

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.isVisible = entry.intersectionRatio > 0.4;
    });

    this.intersectionObserver.observe(this.element);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    // if this entry starts playing and isn't visible
    if (this.props.nowPlaying && !prevProps.nowPlaying && !this.isVisible) {
      // scroll it into view
      this.element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  render() {
    return (
      <li
        title="Click to play"
        ref={e => (this.element = e!)}
        className={cx(this.props.nowPlaying && styles.nowPlaying)}
        onClick={this.handleClick}
      >
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
