import React from 'react'
import './SearchCard.scss'
import Score from '../../atoms/Score'
import Title from '../../atoms/Title'
import DateLabel from '../../atoms/DateLabel'
import Text from '../../atoms/Text'
import GenreContainer from '../../molecules/GenreContainer'
import { history } from '../../../redux/store';

const ImageRootPath = "http://image.tmdb.org/t/p/w185/";

class SearchCard extends React.Component {

	state = {

	}

	constructor(props) {
		super(props);
		this.navigateToMovieDetail = this.navigateToMovieDetail.bind(this);
	}

	componentWillMount() {

	}

	navigateToMovieDetail(movieId) {
		history.push(`/movie-detail/${movieId}`);
	}

	render() {
		const { vote_average, id, genre_ids, overview, title, release_date, poster_path } = this.props.movieData;
		return (
			<article className="search-card-container">
				<div className="card-side-image">
					{poster_path != null ?
					<img onClick={(e) => this.navigateToMovieDetail(id)} src={ImageRootPath+poster_path} />
					:
					<div className="no-poster"><i class="material-icons">image</i></div>
					}
				</div>
				<div className="card-main">
					<div className="card-header">
						<div className="header-detail">
							<Title onClick={(e) => this.navigateToMovieDetail(id)}>{title}</Title>
							<DateLabel dateTime={release_date} />
						</div>
						<div className="score-wraper">
							<Score movieScore={vote_average} />
						</div>
					</div>
					<div className="card-body">
						<Text>{overview}</Text>
						<GenreContainer movieGenres={genre_ids} Genres={this.props.Genres}/>
					</div>
				</div>
			</article>
		);
	}
}

export default SearchCard