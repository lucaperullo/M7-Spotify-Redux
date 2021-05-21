import initialState from "../store";

export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_GENRE":
      return { genre: action.payload };

    default:
      return state;
  }
}
