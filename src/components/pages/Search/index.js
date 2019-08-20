import React from 'react'
import './Search.scss'
import SearchCard from '../../organisms/SearchCard'

const data = [
	{
		popularity: 42.817,
		vote_count: 11958,
		video: false,
		poster_path: "http://image.tmdb.org/t/p/w342//bLpIFiuWF1bKnBqi7LqnJcLHtN.jpg",
		id: 284053,
		adult: false,
		backdrop_path: "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
		original_language: "en",
		original_title: "Thor: Ragnarok",
		genre_ids: [28, 12, 35, 14],
		title: "Thor: Ragnarok",
		vote_average: 7.5,
		overview: "Thor está aprisionado do outro lado do universo, sem seu martelo, e se vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a destruição de seu lar e o fim da civilização asgardiana que está nas mãos de uma nova e poderosa ameaça, a terrível Hela. Mas primeiro ele precisa sobreviver a uma batalha de gladiadores que o coloca contra seu ex-aliado e vingador, o Incrível Hulk.",
		release_date: "2017-10-26"
	},
	{
		popularity: 32.177,
		id: 297762,
		video: false,
		vote_count: 12978,
		vote_average: 7.3,
		title: "Mulher-Maravilha",
		release_date: "2017-06-01",
		original_language: "en",
		original_title: "Wonder Woman",
		genre_ids: [28, 12, 14],
		backdrop_path: "/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg",
		overview: "Treinada desde cedo para ser uma guerreira imbatível, Diana Prince (Gal Gadot) nunca saiu da paradisíaca ilha em que é reconhecida como Princesa das Amazonas. Quando o piloto Steve Trevor (Chris Pine) se acidenta e cai numa praia do local, ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e decide deixar seu lar certa de que pode parar o conflito. Lutando para acabar com todas as lutas, Diana percebe o alcance de seus poderes e sua verdadeira missão na Terra.",
		poster_path: "http://image.tmdb.org/t/p/w342//ujQthWB6c0ojlARk28NSTmqidbF.jpg"
	}
]

class Search extends React.Component {

	state = {

	}

	constructor(props) {
		super(props);

	}

	componentWillMount() {

	}

	render() {
		console.log(this);
		//const { PageState, linkedToolId, toolsFields } = this.state;
		return (
			<div className="page-wraper">
				<div className="search-container">
					{
						data.map((item) => {
							return <SearchCard movieData={item} />
						})
					}
				</div>
			</div>
		);
	}
}

export default Search