export const fetchGenreAction = (genre) => {
  return async (dispatch, getState) => {
    try {
      let genreFetch = await fetch(
        `https://api.deezer.com/genre/${genre}/artistsd`
      );
      let data = await genreFetch.json();
      let payload = data.data;
      dispatch({
        type: "FETCH_GENRE",
        payload: payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "FETCH_GENRE_ERROR",
      });
    }
  };
};
