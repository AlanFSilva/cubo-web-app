import { takeEvery, fork, all, put, call, take } from "redux-saga/effects";
import actions from "./actions";

import repository from "../tmdb"

/*const mapDbResponseToViewModel = (result) => {
  return Object.keys(result).reduce(
    (feedsAcc, key) => { 
      const feedIds = Object.keys(result[key])
      const feedsWithIds = Object.values(result[key]).map((feed, i) => ({id: feedIds[i], ...feed, orderId: key}))
      return [...feedsAcc, ...feedsWithIds ]
    }, []
  );
} */

function* fetchMoviesByTitle(payload) {
  const { page, searchTerm } = payload;
  const result = yield call(repository.getAll, page, searchTerm);
  yield put({
    type: actions.SUCCESS_SEARCHED_MOVIES,
    result
  });
}

function* fetchMoviesByGenre(payload) {
  const { page, searchTerm } = payload;
  const result = yield call(repository.getAll, page, searchTerm);
  yield put({
    type: actions.SUCCESS_SEARCHED_MOVIES,
    result
  });
}

function* fetchMoviesByYear(payload) {
  const { page, searchTerm } = payload;
  const result = yield call(repository.getAll, page, searchTerm);
  yield put({
    type: actions.SUCCESS_SEARCHED_MOVIES,
    result
  });
}

function* getMovieDetails(payload) {
  const { movieId } = payload;
  const result = yield call(repository.getAll, movieId);
  yield put({
    type: actions.SUCCESS_GOT_MOVIE_DETAIL,
    result
  });
}

function* getMoviegGenres() {
  const result = yield call(repository.getAll);
  yield put({
    type: actions.SUCCESS_SEARCHED_MOVIES,
    result
  });
}

export default function* moviesSaga() {
  yield all([
    takeEvery(actions.SEARCH_MOVIE_BY_TITLE, fetchMoviesByTitle),
    takeEvery(actions.SEARCH_MOVIE_BY_YEAR, fetchMoviesByGenre),
    takeEvery(actions.SEARCH_MOVIE_BY_GENRE, fetchMoviesByYear),
    takeEvery(actions.GET_MOVIE_DETAILS, getMovieDetails),
    takeEvery(actions.GET_MOVIE_GENRES, getMoviegGenres),
  ]);
}