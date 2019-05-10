import { PlaylistState, initialPlaylistState } from "./state";
import { PlaylistActionTypes, PlaylistAction } from "./actions";

export function playlistReducer(state = initialPlaylistState, action: PlaylistAction): PlaylistState {
  switch (action.type) {
    case PlaylistActionTypes.ADD_VIDEO: {
      return [...state, action.payload];
    }

    case PlaylistActionTypes.REMOVE_VIDEO: {
      const newList = [...state];
      newList.splice(action.payload, 1);

      return [...newList];
    }

    default:
      return state;
  }
}
