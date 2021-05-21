export const fetchGenreAction = () => {
  return async (dispatch, getState) => {
    try {
      let genreFetch = await fetch(`https://api.deezer.com/genre/152/artists`);
      let data = await genreFetch.json();
      let payload = data.data;
      console.log(payload);
      dispatch({
        type: "FETCH_GENRE",
        payload: payload,
      });
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: "FETCH_GENRE_ERROR",
      // });
    }
  };
};
