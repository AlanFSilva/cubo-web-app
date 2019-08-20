import React from 'react'
import { connect } from 'react-redux';
import MovieCard from '../../organisms/MovieCard'
import movieActions from '../../../redux/movies/actions'
import { isEmpty } from '../../../util'
import { history } from '../../../redux/store';

import './MovieDetails.scss'

const { GetMovieDetails } = movieActions;

class MovieDetails extends React.Component {

	constructor(props) {
		super(props);
		this.backPage = this.backPage.bind(this);
	}

	componentDidMount() {
		const movieId = this.props.match !== undefined ? this.props.match.params.movieId : null;
		if (!isEmpty(movieId)) {
			this.props.GetMovieDetails(movieId);
		}
	}

	backPage() {
		history.goBack();
	}

	getVideoUrl(videos) {
		if (videos[0].site === "YouTube") {
			return <iframe id="videoPlayer" type="text/html" width="1920" height="1080"
				src={"http://www.youtube.com/embed/" + videos[0].key}
				frameborder="0" title="Youtube Video" />
		} else {
			return <iframe id="videoPlayer" width="1920" height="1080" frameborder="0"
				src={"https://player.vimeo.com/video/" + videos[0].key}
				webkitallowfullscreen mozallowfullscreen allowfullscreen title="Vimeo Video" />
		}
	}

	render() {
		const { movieDetail, isLoading } = this.props;

		return (
			<div className="page-wraper">
				{
					isLoading && movieDetail === null ?
						<span>Loading...</span>
						:
						<div className="movie-detail-container">
							{
								<MovieCard movieData={movieDetail} key={movieDetail.id}/>
							}
							<div className="video-wraper">
								{
									movieDetail.videos.results.length > 0 ?
										this.getVideoUrl(movieDetail.videos.results)
										:
										<span>Não há videos relacionados a esse filme</span>
								}
							</div>
						</div>
				}


			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { movieDetail, isLoading } = state.Movies;
	return {
		movieDetail: movieDetail,
		isLoading: isLoading,
	}
}

export default connect(mapStateToProps, { GetMovieDetails })(MovieDetails);