import React from 'react'
import './MovieCard.scss'
import Score from '../../atoms/Score'
import Title from '../../atoms/Title'
import Subtitle from '../../atoms/Subtitle'
import DateLabel from '../../atoms/DateLabel'
import Text from '../../atoms/Text'
import GenreContainer from '../../molecules/GenreContainer'
import InfoContainer from '../../molecules/InfoContainer'


class MovieCard extends React.Component {

	state = {

	}

	constructor(props) {
		super(props);

	}

	componentWillMount() {

	}

	render() {
		const { vote_average, id, genres, overview, title, release_date, poster_path } = this.props.movieData;
		return (
			<article className="movie-detail-card">
				<div className="card-header">
					<Title onClick={(e) => this.navigateToMovieDetail(id)}>{title}</Title>
					<DateLabel dateTime={release_date} />
				</div>
				<div className="card-body">
					<div className="info-main">
						<Subtitle>Sinopse</Subtitle>
						<Text>{overview}</Text>
						<InfoContainer movieInfo={this.props.movieData} />
						<div className="info-footer">
							<GenreContainer movieGenres={genres} />
							<div className="score-wraper">
								<Score movieScore={vote_average} size={"big"} />
							</div>
						</div>
					</div>
					<div className="card-side-image">
						<img onClick={(e) => this.navigateToMovieDetail(id)} src={poster_path} />
					</div>
				</div>
			</article>
		);
	}
}

export default MovieCard