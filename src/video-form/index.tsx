import React, { Component, FormEvent } from "react";

import styles from "./styles.scss";

interface Props {}

interface State {}

export default class VideoForm extends Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.videoForm}>
        <h2>Add Videos To This Playlist</h2>

        <form onSubmit={this.handleSubmit} noValidate>
          <div className={styles.videoFormInput}>
            <input name="title" placeholder="Title (e.g. All The Small Things)" required />
          </div>

          <div className={styles.videoFormInput}>
            <input name="artist" placeholder="Artist (e.g. Blink 182)" required />
          </div>

          <div className={styles.videoFormInput}>
            <input
              name="videoUrl"
              placeholder="YouTube URL (e.g. https://www.youtube.com/watch?v=9Ht5RZpzPqw)"
              type="url"
              required
            />
          </div>

          <button className={styles.addButton}>ADD VIDEO</button>
        </form>
      </div>
    );
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
}
