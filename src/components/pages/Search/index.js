import React from 'react'
import { connect } from 'react-redux';
import SearchCard from '../../organisms/SearchCard'
import FooterNav from '../../molecules/FooterNav'
import SearchInput from '../../atoms/SearchInput'
import movieActions from '../../../redux/movies/actions'
import { isEmpty } from '../../../util'

import './Search.scss'

const { GetMovieGenres, FetchMovieGenres, searchMoviesByTitle } = movieActions;
const itemsPerPage = 5;

class Search extends React.Component {

	state = {
		currentPage: 1,
		searchedTerm: '',
	}

	constructor(props) {
		super(props);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.navigateToPage =this.navigateToPage.bind(this);
	}

	componentDidMount() {
		if (isEmpty(this.props.genres)) {
			this.props.FetchMovieGenres();
		}
		else {
			this.props.GetMovieGenres();
		}
	}

	onSearchChange(event) {
		const { keyCode, target } = event;
		if (!isEmpty(target.value) && target.value != this.state.searchedTerm && keyCode == 13) {
			this.setState({ searchedTerm: target.value })
			this.props.searchMoviesByTitle(target.value, 1);
		}
	}

	navigateToPage(page){
		const { genres, isPageLoading, movies, totalMovies, previousSearched } = this.props;
		this.setState({ currentPage : page});
		if(((page + 2) *5) >=  movies.length && movies.length < totalMovies){
			let currentPage = Math.floor(movies.length / 20);
			this.props.searchMoviesByTitle(previousSearched, (currentPage +1));
		}
	}

	render() {
		const { genres, isPageLoading, movies, totalMovies } = this.props;
		const { currentPage } = this.state;

		return (
			<div className="page-wraper">
				{isPageLoading ?
					<span>Loading...</span>
					:
					<div className="search-container">
						<SearchInput placeholder="Busque um filme por título, ano ou gênero..." onKeyUp={this.onSearchChange} />
						{
							movies.slice(((currentPage - 1) * itemsPerPage), (currentPage * itemsPerPage)).map((item) => {
								return <SearchCard movieData={item} Genres={genres} key={item.id}/>
							})
						}
						<div className="page-bottom">
							{
								movies.length > 0 ?
									<FooterNav currentPage={currentPage} totalMovies={totalMovies} itemsPerPage={itemsPerPage} changePage={this.navigateToPage}/>
									:
									null
							}
						</div>
					</div>
				}

			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { genres, movies, isPageLoading, totalMovies, previousSearched } = state.Movies;
	console.log(movies);
	return {
		genres: genres,
		movies: movies,
		isPageLoading: isPageLoading,
		totalMovies: totalMovies,
		previousSearched: previousSearched
	}
}

export default connect(mapStateToProps, { FetchMovieGenres, GetMovieGenres, searchMoviesByTitle })(Search);