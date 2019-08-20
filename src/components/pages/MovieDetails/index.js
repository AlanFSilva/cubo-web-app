import React from 'react'
import './MovieDetails.scss'
import MovieCard from '../../organisms/MovieCard'

const data = {
	"adult": false,
	"backdrop_path": "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
	"belongs_to_collection": {
		"id": 131296,
		"name": "Thor",
		"poster_path": "http://image.tmdb.org/t/p/w342//yw7gr7DhHHVTLlO8Se8uH17TDMA.jpg",
		"backdrop_path": "http://image.tmdb.org/t/p/w342//3KL8UNKFWgIKXzLHjwY0uwgjzYl.jpg"
	},
	"budget": 180000000,
	"genres": [
		{
			"id": 28,
			"name": "Ação"
		},
		{
			"id": 12,
			"name": "Aventura"
		},
		{
			"id": 35,
			"name": "Comédia"
		},
		{
			"id": 14,
			"name": "Fantasia"
		}
	],
	"homepage": "https://marvel.com/movies/movie/222/thor_ragnarok",
	"id": 284053,
	"imdb_id": "tt3501632",
	"original_language": "en",
	"original_title": "Thor: Ragnarok",
	"overview": "Thor está aprisionado do outro lado do universo, sem seu martelo, e se vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a destruição de seu lar e o fim da civilização asgardiana que está nas mãos de uma nova e poderosa ameaça, a terrível Hela. Mas primeiro ele precisa sobreviver a uma batalha de gladiadores que o coloca contra seu ex-aliado e vingador, o Incrível Hulk.",
	"popularity": 42.817,
	"poster_path": "http://image.tmdb.org/t/p/w342//bLpIFiuWF1bKnBqi7LqnJcLHtN.jpg",
	"production_companies": [
		{
			"id": 420,
			"logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
			"name": "Marvel Studios",
			"origin_country": "US"
		},
		{
			"id": 2,
			"logo_path": "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
			"name": "Walt Disney Pictures",
			"origin_country": "US"
		}
	],
	"production_countries": [
		{
			"iso_3166_1": "US",
			"name": "United States of America"
		}
	],
	"release_date": "2017-10-25",
	"revenue": 853977126,
	"runtime": 131,
	"spoken_languages": [
		{
			"iso_639_1": "en",
			"name": "English"
		}
	],
	"status": "Released",
	"tagline": "Sem martelo. Sem problemas.",
	"title": "Thor: Ragnarok",
	"video": false,
	"vote_average": 7.5,
	"vote_count": 11964,
	"videos": {
		"results": [
			{
				"id": "5b3176799251413c9b006a8d",
				"iso_639_1": "pt",
				"iso_3166_1": "BR",
				"key": "NRJpAbnsKmQ",
				"name": "Thor: Ragnarok - Trailer 2 Dublado",
				"site": "YouTube",
				"size": 360,
				"type": "Trailer"
			}
		]
	}
};

class MovieDetails extends React.Component {

	state = {

	}

	constructor(props) {
		super(props);

	}

	componentWillMount() {

	}

	getVideoUrl(videos) {
		if (videos[0].site === "YouTube") {
			return <iframe id="videoPlayer" type="text/html" width="1920" height="1080"
				src={"http://www.youtube.com/embed/" + videos[0].key}
				frameborder="0" />
		} else {
			return <iframe id="videoPlayer" width="1920" height="1080" frameborder="0"
				src={"https://player.vimeo.com/video/" + videos[0].key}
				webkitallowfullscreen mozallowfullscreen allowfullscreen />
		}
	}

	render() {
		return (
			<div className="page-wraper">
				<div className="movie-detail-container">
					{
						<MovieCard movieData={data} />
					}
					<div className="video-wraper">
						{
							data.videos.results.length > 0 ?
								this.getVideoUrl(data.videos.results)
								:
								<span>Não há videos relacionados a esse filme</span>
						}
					</div>
				</div>

			</div>
		);
	}
}

export default MovieDetails