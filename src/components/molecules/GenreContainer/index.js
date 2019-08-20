import React from 'react'
import './GenreContainer.scss'
import Genre from '../../atoms/Genre'

class GenreContainer extends React.Component {

	constructor(props) {
		super(props);

	}

	searchForGenre(genreId) {
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
					movieGenres.map((item) => { return <Genre>{this.convertToText(item)}</Genre> })
				}
			</div>
		);
	}
}

export default GenreContainer;