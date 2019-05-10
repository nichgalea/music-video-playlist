import { connect } from "react-redux";

import { RootState } from "src/redux/store";
import { MusicVideo } from "src/models";

import App from "./app.component";

interface StateProps {
  playlist: MusicVideo[];
}

export default connect<StateProps, {}, {}, RootState>(state => ({
  playlist: state.playlist
}))(App);
