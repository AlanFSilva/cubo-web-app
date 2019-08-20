import actions from "./actions";

const initState = {
  movies: new Array(),
  movieDetail: null,
  genres: new Array(),
  isLoading: true,
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.SEARCH_MOVIE_BY_TITLE:
      return {
        ...state,
        isLoading: true
      };
    case actions.SEARCH_MOVIE_BY_YEAR:
      return {
        ...state,
        isLoading: false,
      };
    case actions.SEARCH_MOVIE_BY_GENRE:
      return {
        ...state,
        isLoading: true,
      }
    case actions.GET_MOVIE_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case actions.GET_MOVIE_GENRES:
      return {
        ...state,
      };
    case actions.SUCCESS_SEARCHED_MOVIES:
      return {
        ...state,
        isLoading: false,
        movies: action.movies
      };
    case actions.SUCCESS_GOT_MOVIE_DETAIL:
      return {
        ...state,
        isLoading: false,
        movieDetail: action.movieDetail
      };
    case actions.SUCCESS_GOT_GENRES:
      return {
        ...state,
        movieDetail: action.genres
      };
    default:
      return state;
  }

}