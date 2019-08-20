import React from 'react'
import { connect } from 'react-redux';
import SearchCard from '../../organisms/SearchCard'
import FooterNav from '../../molecules/FooterNav'
import SearchInput from '../../atoms/SearchInput'
import movieActions from '../../../redux/movies/actions'
import { isEmpty } from '../../../util'

import './Search.scss'

const { GetMovieGenres, FetchMovieGenres, searchMoviesByTitle, searchMoviesByGenre, searchMoviesByYear  } = movieActions;
const itemsPerPage = 5;

class Search extends React.Component {

	state = {
		currentPage: 1,
		searchedTerm: '',
		searchText: '',
		searchMatch: '',
	}

	constructor(props) {
		super(props);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.searchRequest = this.searchRequest.bind(this);
		this.navigateToPage = this.navigateToPage.bind(this);
	}

	componentDidMount() {
		if (isEmpty(this.props.genres)) {
			this.props.FetchMovieGenres();
		}
		else {
			this.props.GetMovieGenres();
		}
	}

	verifySearchGender(text){
		return this.props.genres.find(item => item.name.toLowerCase() === text.toLowerCase())
	}

	onSearchChange(event) {
		const { keyCode, target } = event;
		if (!isEmpty(target.value) && target.value !== this.state.searchedTerm && keyCode === 13) {
			this.setState({ searchedTerm: target.value, currentPage: 1, searchMatch: "Title" });
			this.searchRequest(target.value, "Title", 1);
		}
		else if (this.verifySearchGender(target.value)) {
			this.setState({ searchText: target.value, searchMatch: "Genre" });
		}
		else if (target.value >= 1900 && target.value <= 2050) {
			this.setState({ searchText: target.value, searchMatch: "Year" });
		}
	}

	searchRequest(searchText, searchMatch, page) {
		if (searchMatch === "Title") {
			this.props.searchMoviesByTitle(searchText, page);
		}
		else if (searchMatch === "Genre") {
			const genreId = this.verifySearchGender(searchText).id;
			this.props.searchMoviesByGenre(genreId, page);
		}
		else if (searchMatch === "Year") {
			this.props.searchMoviesByYear(searchText, page);
		}
		this.setState({ searchText: "", searchMatch: searchMatch });

	}

	navigateToPage(page) {
		const { movies, totalMovies, previousSearched } = this.props;
		this.setState({ currentPage: page });
		if (((page + 2) * 5) >= movies.length && movies.length < totalMovies) {
			let currentPage = Math.floor(movies.length / 20);
			this.searchRequest(previousSearched, this.state.searchMatch, (currentPage + 1));
		}
	}

	render() {
		const { genres, isPageLoading, movies, totalMovies } = this.props;
		const { currentPage, searchText, searchMatch } = this.state;

		return (
			<div className="page-wraper">
				{isPageLoading ?
					<span>Loading...</span>
					:
					<div className="search-page-container">
						<div className="search-wraper">
							<SearchInput placeholder="Busque um filme por título, ano ou gênero..." onKeyUp={this.onSearchChange} />
							{
								searchText !== "" && (searchMatch === "Genre" || searchMatch === "Year") ?
									<div className="dropdown-search">
										<ul>
											<li onClick={(e) => this.searchRequest(searchText, "Title", 1)}>
												<i className="material-icons">search</i>
												Buscar <strong>{searchText}</strong> por titulos de filmes
											</li>
											{
												searchMatch === "Genre" ?
													<li onClick={(e) => this.searchRequest(searchText, searchMatch, 1)}>
														<i className="material-icons">search</i>
														Buscar <strong>{searchText}</strong> por gêneros de filmes
													</li>
												:
												searchMatch === "Year" ?
													<li onClick={(e) => this.searchRequest(searchText, searchMatch, 1)}>
														<i className="material-icons">search</i>
														Buscar <strong>{searchText}</strong> por ano de lançamento dos filmes
													</li>
												:null
											}
										</ul>
									</div>
									: null
							}
						</div>
						{
							movies.slice(((currentPage - 1) * itemsPerPage), (currentPage * itemsPerPage)).map((item) => {
								return <SearchCard movieData={item} Genres={genres} key={item.id} searchRequest={this.searchRequest}/>
							})
						}
						<div className="page-bottom">
							{
								movies.length > 0 ?
									<FooterNav currentPage={currentPage} totalMovies={totalMovies} itemsPerPage={itemsPerPage} changePage={this.navigateToPage} />
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
	return {
		genres: genres,
		movies: movies,
		isPageLoading: isPageLoading,
		totalMovies: totalMovies,
		previousSearched: previousSearched
	}
}

export default connect(mapStateToProps, { FetchMovieGenres, GetMovieGenres, searchMoviesByTitle ,searchMoviesByGenre, searchMoviesByYear })(Search);