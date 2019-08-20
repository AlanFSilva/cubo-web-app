import actions from "./actions";

const initState = {
  movies: [],
  totalMovies: 0,
  movieDetail: null,
  genres: [],
  isLoading: true,
  isPageLoading: true,
  previousSearched: '',
  previoushMatch: '',
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.SEARCH_MOVIE_BY_TITLE:
      return {
        ...state,
        isLoading: true,
       
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
    case actions.SUCCESS_SEARCHED_MOVIES:
      const { response, searchTerm, searchMatch } = action.result;
      const movies = state.previousSearched === searchTerm && state.previoushMatch === searchMatch ? state.movies.concat(response.results) : response.results;
      return {
        ...state,
        isLoading: false,
        previousSearched: searchTerm,
        previoushMatch: searchMatch,
        movies: movies,
        totalMovies: response.total_results
      };
    case actions.SUCCESS_GOT_MOVIE_DETAIL:
      return {
        ...state,
        isLoading: false,
        movieDetail: action.movieDetail
      };
    case actions.FETCH_MOVIE_GENRES:
      return {
        isPageLoading: true,
        ...state,
      };
    case actions.GET_MOVIE_GENRES:
      return {
        ...state,
        genres: state.genres
      };
    case actions.SUCCESS_GOT_GENRES:
      return {
        ...state,
        isPageLoading: false,
        genres: Object.assign([],action.result.genres)
      };
    default:
      return state;
  }

}