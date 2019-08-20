import React from 'react'
import { Router, Route } from "react-router";
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { store, history } from './redux/store';

import Search from './components/pages/Search'
import Header from './components/molecules/Header'
import MovieDetails from './components/pages/MovieDetails'


class App extends React.Component {
  state = {
    pageState: 'LOADING'
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Header>Movies</Header>
            <Route exact path="/" component={Search} />
            <Route path="/search(/:type/:searchTerm/:page)" component={Search} />
            <Route path="/movie-detail/:movieId" component={MovieDetails} />
          </div>
        </Router>
      </Provider>
    );
  }
}

App.contextTypes = {
  router: PropTypes.func
};

export default App;
