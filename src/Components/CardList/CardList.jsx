import React from 'react';
import "./CardList.style.css";

const CardList = (props) => {

	return <div className="card-list">{props.children}</div>
}

export default CardList;