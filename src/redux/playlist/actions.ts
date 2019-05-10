import { MusicVideo } from "src/models";

export enum PlaylistActionTypes {
  ADD_VIDEO = "playlist/add",
  REMOVE_VIDEO = "playlist/remove"
}

export interface AddVideoAction {
  type: PlaylistActionTypes.ADD_VIDEO;
  payload: MusicVideo;
}

export function addVideo(video: MusicVideo): AddVideoAction {
  return {
    type: PlaylistActionTypes.ADD_VIDEO,
    payload: video
  };
}

export interface RemoveVideoAction {
  type: PlaylistActionTypes.REMOVE_VIDEO;
  payload: number;
}

export function removeVideo(index: number): RemoveVideoAction {
  return {
    type: PlaylistActionTypes.REMOVE_VIDEO,
    payload: index
  };
}

export type PlaylistAction = AddVideoAction | RemoveVideoAction;
