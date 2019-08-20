import React from 'react'
import styled from 'styled-components'

const ScoreStyle = styled.label`
	font-size: ${props => props.big ? "45px" : "23px"};
	background-color: #116193;
	color: #00e8e4;
	width: ${props => props.big ? "120px" : "70px"};
	height: ${props => props.big ? "120px" : "70px"};
	border-radius: 50%;
	justify-content: center;
	display: flex;
	align-items: center;

	::after {
		border: 4px solid #00e8e4;
		border-radius: 50%;
  }
	span{
		font-family: abel;
    font-weight: lighter;
		border: ${props => props.big ? "7px solid #00e8e4" : "4px solid #00e8e4;"};
		width: 80%;
		height: 80%;
		border-radius: 50%;
		justify-content: center;
		display: flex;
		align-items: center;
	}
`
const Score = ({ movieScore, size }) => {

	return <ScoreStyle big={size === "big"}><span>{(movieScore * 10)}%</span></ScoreStyle>
}

export default Score