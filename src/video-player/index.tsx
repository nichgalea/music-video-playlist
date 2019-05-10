import React, { Component } from "react";

import { MusicVideo } from "src/models";

import styles from "./styles.scss";
import { parseConfigFileTextToJson } from "typescript";

interface Props {
  video: MusicVideo | undefined;
  onVideoEnd(): void;
}

export default class VideoPlayer extends Component<Props> {
  private videoContainer!: HTMLDivElement;
  private player!: YT.Player;
  private playerReady = false;

  constructor(props) {
    super(props);

    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  componentDidMount() {
    const playerElement = document.createElement("div");
    playerElement.id = "player";
    this.videoContainer.appendChild(playerElement);

    window["onYouTubeIframeAPIReady"] = () => {
      let videoId = "";

      if (this.props.video) {
        const videoUrl = new URL(this.props.video.url);
        videoId = videoUrl.searchParams.get("v")!;
      }

      this.player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId,
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      });
    };
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.video && this.props.video !== prevProps.video) {
      const videoUrl = new URL(this.props.video.url);
      const videoId = videoUrl.searchParams.get("v")!;

      if (this.playerReady) {
        this.player.cueVideoById(videoId);
        this.player.playVideo();
      }
    }
  }

  render() {
    return (
      <div className={styles.videoPlayer}>
        <div ref={e => (this.videoContainer = e!)} />
      </div>
    );
  }

  onPlayerReady(_event: YT.PlayerEvent) {
    this.playerReady = true;

    if (this.props.video) {
      this.player.playVideo();
    }
  }

  onPlayerStateChange(event: YT.OnStateChangeEvent) {
    if (event.data === YT.PlayerState.ENDED) {
      this.props.onVideoEnd();
    }
  }
}
