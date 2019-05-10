import React, { Component, FormEvent, ChangeEvent } from "react";
import cx from "classnames";

import { MusicVideo } from "src/models";

import styles from "./styles.scss";

interface Props {
  addVideo(video: MusicVideo): void;
}

interface State {
  videoTitle: {
    value: string;
    valid: boolean;
  };
  videoArtist: {
    value: string;
    valid: boolean;
  };
  videoUrl: {
    value: string;
    valid: boolean;
  };
}

export default class VideoForm extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      videoTitle: { value: "", valid: true },
      videoArtist: { value: "", valid: true },
      videoUrl: { value: "", valid: true }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className={styles.videoForm}>
        <h2>Add Videos To This Playlist</h2>

        <form onSubmit={this.handleSubmit} noValidate>
          <div className={styles.videoFormInput}>
            <input
              className={cx(!this.state.videoTitle.valid && styles.error)}
              name="videoTitle"
              placeholder="Title (e.g. All The Small Things)"
              required
              value={this.state.videoTitle.value}
              onChange={this.handleChange}
            />
          </div>

          <div className={styles.videoFormInput}>
            <input
              className={cx(!this.state.videoArtist.valid && styles.error)}
              name="videoArtist"
              placeholder="Artist (e.g. Blink 182)"
              required
              value={this.state.videoArtist.value}
              onChange={this.handleChange}
            />
          </div>

          <div className={styles.videoFormInput}>
            <input
              className={cx(!this.state.videoUrl.valid && styles.error)}
              name="videoUrl"
              placeholder="YouTube URL (e.g. https://www.youtube.com/watch?v=9Ht5RZpzPqw)"
              type="url"
              required
              value={this.state.videoUrl.value}
              onChange={this.handleChange}
            />
          </div>

          <button className={styles.addButton}>ADD VIDEO</button>
        </form>
      </div>
    );
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newState = {
      ...this.state,
      [e.currentTarget.name]: {
        ...this.state[e.currentTarget.name],
        value: e.currentTarget.value
      }
    };

    this.setState(newState);
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (e.currentTarget.checkValidity()) {
      this.props.addVideo({
        title: this.state.videoTitle.value,
        artist: this.state.videoArtist.value,
        url: this.state.videoUrl.value
      });

      this.setState({
        videoTitle: { value: "", valid: true },
        videoArtist: { value: "", valid: true },
        videoUrl: { value: "", valid: true }
      });

      return;
    }

    const newState = { ...this.state };

    for (const formElement of e.currentTarget as any) {
      if (formElement instanceof HTMLInputElement) {
        newState[formElement.name].valid = formElement.validity.valid;
      }
    }

    this.setState(newState);
  }
}
