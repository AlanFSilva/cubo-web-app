const actions = {
	SEARCH_MOVIE_BY_TITLE: 'SEARCH_MOVIE_BY_TITLE',
	SEARCH_MOVIE_BY_YEAR: 'SEARCH_MOVIE_BY_YEAR',
	SEARCH_MOVIE_BY_GENRE: 'SEARCH_MOVIE_BY_GENRE',
	GET_MOVIE_DETAILS: "GET_MOVIE_DETAILS",
	SUCCESS_SEARCHED_MOVIES: 'SUCCESS_SEARCHED_MOVIES',
	SUCCESS_GOT_MOVIE_DETAIL: 'SUCCESS_GOT_MOVIE_DETAIL',
	FETCH_MOVIE_GENRES:"FETCH_MOVIE_GENRES",
	GET_MOVIE_GENRES: "GET_MOVIE_GENRES",
	SUCCESS_GOT_GENRES: 'SUCCESS_GOT_GENRES',

	searchMoviesByTitle: (searchTerm, page) => {
		return (dispatch, getState) => {
			dispatch({
				type: actions.SEARCH_MOVIE_BY_TITLE,
				searchTerm,
				page
			})
		}
	},

	searchMoviesByYear: (searchTerm, page) => {
		return (dispatch, getState) => {
			dispatch({
				type: actions.SEARCH_MOVIE_BY_YEAR,
				searchTerm,
				page
			})
		}
	},

	searchMoviesByGenre: (searchTerm, page) => {
		return (dispatch, getState) => {
			dispatch({
				type: actions.SEARCH_MOVIE_BY_GENRE,
				searchTerm,
				page
			})
		}
	},

	GetMovieDetails: (movieId) => {
		return (dispatch, getState) => {
			dispatch({ type: actions.GET_MOVIE_DETAILS, movieId })
		}
	},

	GetMovieGenres: () => {
		return (dispatch, getState) => {
			dispatch({ type: actions.GET_MOVIE_GENRES })
		}
	},

	FetchMovieGenres: () => {
		return (dispatch, getState) => {
			dispatch({ type: actions.FETCH_MOVIE_GENRES })
		}
	},
}

export default actions;