import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import Movies from './movies/reducer'

import { all } from 'redux-saga/effects'
import moviesSaga from './movies/saga'

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];

const store = createStore(
  combineReducers({
    Movies,
    router: routerReducer
  }),
  compose(applyMiddleware(...middlewares))
);

function* mainSaga() {
  yield all([
    moviesSaga(),
  ]);
}

sagaMiddleware.run(mainSaga);
export { store, history };
