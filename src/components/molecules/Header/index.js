import React from 'react'
import Title from '../../atoms/Title'
import { history } from '../../../redux/store';
import styled from 'styled-components'

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 60px;
  color: #00e8e4;
  background-color: #116193;

  h1{
    padding-top:0;
  }

  button{
    border: none;
    background: transparent;
    position: absolute;
    margin: 0 20px;
    left: 0;
    cursor: pointer;
    color: #00e8e4;
  }
`

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.backPage = this.backPage.bind(this);
  }


  backPage() {
		history.goBack();
	}

	render() {
    const { children } = this.props;
    const shoBack = (window.location.href.indexOf("movie-detail") > -1);

		return (
      <HeaderDiv>
        {shoBack? 
        <button onClick={(e) => this.backPage(e)}> <i class="material-icons">arrow_back_ios</i></button>
        : null}
			  <Title>{children}</Title>
      </HeaderDiv>
		);
	}
}

export default Header