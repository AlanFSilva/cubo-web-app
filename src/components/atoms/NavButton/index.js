import React from 'react'
import styled from 'styled-components'

const DefaultStyle = styled.button`
font-size: 15px;
background-color: transparent;
border-radius: 50%;
color: #116193;
margin-right: 20px 10px; 
border: none;	
width: 35px;
height: 35px;
cursor: pointer;

	:focus {
		outline: 0;
	}

	:click {
		outline: 1;
	}
`

const SelectedStyle = styled.button`
	&{
		font-size: 20px;
		background-color: #116193;
		color: #00e8e4;
		width: 35px;
		height: 35px;
		border: none;
		border-radius: 50%;
		justify-content: center;
		display: flex;
		align-items: center;
		border: 3px solid #00e8e4;
		font-family: abel;
		font-weight: lighter;
		cursor: pointer;
	}

	&:after{
		width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid #116193;
		content: "";
		margin: 0;
		position: absolute;
		z-index: -1;
	}

	:focus {
		outline: 0;
	}
`
const NavButton = ({ selected, page , onClick}) => {

	return selected ? <SelectedStyle onClick={(e) => onClick(page)}>{page}</SelectedStyle> : <DefaultStyle onClick={(e) => onClick(page)}>{page}</DefaultStyle>;
}

export default NavButton