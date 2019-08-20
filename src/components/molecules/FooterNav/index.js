import React from 'react'
import NavButton from '../../atoms/NavButton'
import styled from 'styled-components'

const NavDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 180px;
	margin: auto;
	margin-bottom: 50px;
`

class FooterNav extends React.Component {

	state = {

	}

	constructor(props) {
		super(props);
		this.getPageNumber = this.getPageNumber.bind(this);
		this.changePage = this.changePage.bind(this);
	}

	componentWillMount() {

	}

	getPageNumber(currentPage){
		const { totalMovies, itemsPerPage } =this.props;
		if(totalMovies > 5){
			const totalPages = Math.floor(totalMovies / itemsPerPage);
			let first = Math.max(1, (currentPage - 2));
			let last = Math.min(totalPages, (currentPage + 2));
			last = last < 5 && totalPages > 5? 5 : last;
			first = last - first < 4 &&  totalPages > 5 ? last - 4 : first;
			return Array.from({ length: (last - first) + 1}, (_, i) => first + (i * 1));
		}
		else{
			return [1];
		}

	}

	changePage(page){
		this.props.changePage(page);
	}

	render() {
		const { currentPage } = this.props;
		return (
			<NavDiv>
				{
					this.getPageNumber(currentPage).map((item) => {return <NavButton onClick={this.changePage} selected={currentPage === item} page={item}/>})
				}
			</NavDiv>
		);
	}
}

export default FooterNav