import React from 'react'
import './InfoContainer.scss'
import Subtitle from '../../atoms/Subtitle'
import Label from '../../atoms/Label'
import Text from '../../atoms/Text'

class InfoContainer extends React.Component {

	state = {

	}

	constructor(props) {
		super(props);

	}

	componentWillMount() {

	}

	convertDuration(runtime) {
		let hour = Math.floor(runtime / 60);
		let minutes = runtime - (hour * 60);
		return `${hour}h ${minutes}min`;
	}

	convertToCurrency(value) {
		let currency = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$&.');
		return `$${currency},00`;
	}

	translateStatus(status) {
		return status === "In Production" ? "Em Produção" : status === "Released" ? "Lançado" : status;
	}

	render() {
		const { budget, status, runtime, revenue, original_language } = this.props.movieInfo;
		return (
			<div className="info-container-element">
				<Subtitle>Informações</Subtitle>
				<div className="">
					<ul>
						<li>
							<Label>Situação</Label>
							<Text>{this.translateStatus(status)}</Text>
						</li>
						<li>
							<Label>Idioma</Label>
							<Text>{original_language}</Text>
						</li>
						<li>
							<Label>Duração</Label>
							<Text>{this.convertDuration(runtime)}</Text>
						</li>
						<li>
							<Label>Orçamento</Label>
							<Text>{this.convertToCurrency(budget)}</Text>
						</li>
						<li>
							<Label>Receita</Label>
							<Text>{this.convertToCurrency(revenue)}</Text>
						</li>
						<li>
							<Label>Lucro</Label>
							<Text>{this.convertToCurrency((revenue - budget))}</Text>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default InfoContainer