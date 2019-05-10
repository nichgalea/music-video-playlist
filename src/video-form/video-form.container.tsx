import { connect } from "react-redux";

import { MusicVideo } from "src/models";
import { RootState } from "src/redux/store";
import { addVideo } from "src/redux/playlist";

import VideoForm from "./video-form.component";

interface DispatchProps {
  addVideo(video: MusicVideo): void;
}

export default connect<{}, DispatchProps, {}, RootState>(
  undefined,
  { addVideo }
)(VideoForm);
