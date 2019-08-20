import React from 'react'
import { Router, Route } from "react-router";
import { Provider } from 'react-redux';

import Search from './components/pages/Search'
import PropTypes from 'prop-types';
import MovieDetails from './components/pages/MovieDetails'
import { store, history } from './redux/store';

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
