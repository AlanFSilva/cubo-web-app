import React from 'react'
import styled from 'styled-components'

const SearchStyle = styled.input`
    font-size: 13px;
    width: 100%;
    background-color: #ebebeb;
    color: #9bb7c8;
    border-radius: 50px;
    padding: 10px 20px;
    margin: 30px 0 10px 0;
    border: none;
    box-sizing: border-box;
    ::placeholder { 
        color: #9bb7c8;
    } 
`

const SearchInput = ({ placeholder, onKeyUp }) => {

    return <SearchStyle type="text" placeholder={placeholder} onKeyUp={(e) => onKeyUp(e)}></SearchStyle>
  }

  export default SearchInput