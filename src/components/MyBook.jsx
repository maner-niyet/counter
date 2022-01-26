import React from 'react';

function MyBook(props) {
  return <li>{props.item.name} by {props.item.author}</li>;
}

export default MyBook;
