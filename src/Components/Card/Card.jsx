import React from 'react';
import "./Card.style.css";

const Card = (props) => {

	return <div className="card-container">
				<img 
					alt="Profile" 
					src={`https://avatars.dicebear.com/api/micah/${props.children.id}.svg`}
					width="150px">
					</img>
				<h3>{props.children.name}</h3>
				<p>{props.children.email}</p>
			</div>
}

export default Card;