import React from 'react'
import styled from 'styled-components'

const DateStyle = styled.label`
font-family: lato;
  font-size: 1rem;
  line-height: 1.5em;
  color:#aaaaaa;
`

function convertDate(date) {
  if (date) {
    const strDate = new Date(date.replace(/-/g, '/'));
    let day = strDate.getDate();
    let month = strDate.getMonth() + 1;
    return `${day >= 10 ? day : '0' + day}/${month >= 10 ? month : '0' + month}/${strDate.getFullYear()}`;
  }
  else {
    return "undefined"
  }
}

const DateLabel = ({ dateTime }) => {

  return <DateStyle>{convertDate(dateTime)}</DateStyle>
}

export default DateLabel