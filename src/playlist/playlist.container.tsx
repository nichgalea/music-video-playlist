import { connect } from "react-redux";

import { MusicVideo } from "src/models";
import { RootState } from "src/redux/store";
import { removeVideo } from "src/redux/playlist";

import Playlist from "./playlist.component";

interface StateProps {
  playlist: MusicVideo[];
}

interface DispatchProps {
  removeVideo(index: number): void;
}

interface OwnProps {
  current: number;
  onChange(index: number): void;
  onPrevious(): void;
  onNext(): void;
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  state => ({
    playlist: state.playlist
  }),
  { removeVideo }
)(Playlist);
