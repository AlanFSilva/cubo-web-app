import { takeEvery, all, put, call } from "redux-saga/effects";
import actions from "./actions";

import repository from "../tmdb"

function* fetchMoviesByTitle(payload) {
  const { page, searchTerm } = payload;
  const response = yield call(repository.getMoviesByTitle, page, searchTerm);
  yield put({
    type: actions.SUCCESS_SEARCHED_MOVIES,
    result: {searchTerm: searchTerm , response: response}
  });
}

function* fetchMoviesByGenre(payload) {
  const { page, searchTerm } = payload;
  const response = yield call(repository.getMoviesByGenre, page, searchTerm);
  yield put({
    type: actions.SUCCESS_SEARCHED_MOVIES,
    response
  });
}

function* fetchMoviesByYear(payload) {
  const { page, searchTerm } = payload;
  const response = yield call(repository.getMoviesByYear, page, searchTerm);
  yield put({
    type: actions.SUCCESS_SEARCHED_MOVIES,
    response
  });
}

function* getMovieDetails(payload) {
  const { movieId } = payload;
  const movieDetail = yield call(repository.getMovieDetails, movieId);
  yield put({
    type: actions.SUCCESS_GOT_MOVIE_DETAIL,
    movieDetail
  });
}

function* getMovieGenres() {
  const result = yield call(repository.getMovieGenres);
  yield put({
    type: actions.SUCCESS_GOT_GENRES,
    result
  });
}

export default function* moviesSaga() {
  yield all([
    takeEvery(actions.SEARCH_MOVIE_BY_TITLE, fetchMoviesByTitle),
    takeEvery(actions.SEARCH_MOVIE_BY_YEAR, fetchMoviesByGenre),
    takeEvery(actions.SEARCH_MOVIE_BY_GENRE, fetchMoviesByYear),
    takeEvery(actions.GET_MOVIE_DETAILS, getMovieDetails),
    takeEvery(actions.FETCH_MOVIE_GENRES, getMovieGenres),
  ]);
}