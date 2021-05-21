export default function (state = {}, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case "ADD_SONGS_LIKED":
      return { ...state, liked: state.liked.concat(action.payload) };
    case "REMOVE_SONGS_LIKED":
      const index = state.liked.findIndex((song) => song.id === action.payload);
      return {
        ...state,
        liked: [
          ...state.liked.slice(0, index),
          ...state.liked.slice(index + 1),
        ],
      };
    case "ADD_NEW_SONG_TO_PLAYLIST":
      return { ...state, playlist: state.playlist.concat(action.payload) };
    case "REMOVE_SONGS_FROM_PLAYLIST":
      const _index = state.liked.findIndex(
        (song) => song.id === action.payload
      );
      return {
        ...state,
        playlist: [
          ...state.playlist.slice(0, _index),
          ...state.playlist.slice(_index + 1),
        ],
      };
    default:
      return state;
  }
}
