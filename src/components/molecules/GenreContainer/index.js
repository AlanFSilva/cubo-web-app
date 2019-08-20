import React from 'react'
import './GenreContainer.scss'
import Genre from '../../atoms/Genre'

class GenreContainer extends React.Component {

	constructor(props) {
		super(props);
		this.searchForGenre =  this.searchForGenre.bind(this);
	}

	searchForGenre(genre) {
		this.props.searchRequest(genre, "Genre", 1);
	}

	convertToText(item) {
		if (item.name !== undefined) {
			return item.name;
		}
		else {
			const related = this.props.Genres.find((genre) => genre.id === item);
			return related.name;
		}
	}

	render() {
		const { movieGenres } = this.props;
		return (
			<div className="genre-container">
				{
					movieGenres.map((item) => { const name = this.convertToText(item); return <Genre onClick={(e) => this.searchForGenre(name)}>{name}</Genre>; })
				}
			</div>
		);
	}
}

export default GenreContainer;