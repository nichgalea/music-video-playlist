import React, { Component } from "react";

import { MusicVideo } from "src/models";

import styles from "./styles.scss";
import PlaylistEntry from "./playlist-entry";
import { timingSafeEqual } from "crypto";

interface Props {
  current: number;
  playlist: MusicVideo[];
  onChange(index: number): void;
  onPrevious(): void;
  onNext(): void;
  removeVideo(index: number): void;
}

export default class Playlist extends Component<Props> {
  constructor(props) {
    super(props);

    this.change = this.change.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  render() {
    return (
      <div className={styles.playlist}>
        <h3>Playlist</h3>

        <div className={styles.controls}>
          <button className={styles.button} onClick={this.previous}>
            Previous
          </button>

          <button className={styles.button} onClick={this.next}>
            Next
          </button>
        </div>

        <ul>
          {this.props.playlist.map((v, i) => (
            <PlaylistEntry
              key={i}
              video={v}
              index={i}
              onClick={this.change}
              nowPlaying={i === this.props.current}
              onRemove={this.props.removeVideo}
            />
          ))}
        </ul>
      </div>
    );
  }

  previous() {
    this.props.onPrevious();
  }

  next() {
    this.props.onNext();
  }

  change(index: number) {
    this.props.onChange(index);
  }
}
