import { createStore, combineReducers } from "redux";

import { playlistReducer, PlaylistState } from "./playlist";

export interface RootState {
  playlist: PlaylistState;
}

export default (previousState?: Partial<RootState>) => {
  return createStore(
    combineReducers({ playlist: playlistReducer }),
    previousState,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
};
