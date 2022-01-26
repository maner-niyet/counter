import React from 'react';

const MyBook = (props) => {
  return <li>{props.item.name} by {props.item.author}</li>;
}

export default MyBook;
