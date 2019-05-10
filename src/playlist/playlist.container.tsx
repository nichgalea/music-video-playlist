import { connect } from "react-redux";

import { MusicVideo } from "src/models";
import { RootState } from "src/redux/store";

import Playlist from "./playlist.component";

interface StateProps {
  playlist: MusicVideo[];
}

interface OwnProps {
  onChange(index: number): void;
  current: number;
}

export default connect<StateProps, {}, OwnProps, RootState>(state => ({
  playlist: state.playlist
}))(Playlist);
