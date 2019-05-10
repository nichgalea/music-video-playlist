import React, { Component } from "react";

import { MusicVideo } from "src/models";

import styles from "./styles.scss";
import PlaylistEntry from "./playlist-entry";

interface Props {
  current: number;
  playlist: MusicVideo[];
  onChange(index: number): void;
}

export default class Playlist extends Component<Props> {
  constructor(props) {
    super(props);

    this.change = this.change.bind(this);
  }

  render() {
    return (
      <div className={styles.playlist}>
        <h3>Playlist</h3>

        <ul>
          {this.props.playlist.map((v, i) => (
            <PlaylistEntry key={i} video={v} index={i} onClick={this.change} nowPlaying={i === this.props.current} />
          ))}
        </ul>
      </div>
    );
  }

  change(index: number) {
    this.props.onChange(index);
  }
}
