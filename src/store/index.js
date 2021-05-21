import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import songs from "../reducers/songs";
import currentSong from "../reducers/currentSong";
import user from "../reducers/user";
import currentAlbum from "../reducers/currentAlbum";
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  songs: {
    genre: [],
  },
  currentSong: {
    cover: "weneedtopickthefirstsongstatelink",
    tracks: [],
    song: 0,
  },
  currentAlbum: {},
  user: {
    account: {
      name: "",
      email: "",
      password: "",
    },
    liked: [],
    playlists: [],
    artists: [],
  },
};

const rootReducer = combineReducers({
  songs: songs,
  currentAlbum: currentAlbum,
  currentSong: currentSong,
  user: user,
});
export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
