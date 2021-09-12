import React from 'react';
import "./SearchBox.style.css";

const SearchBox = ( { placeHolder, handleChange} ) => {
	return <input 
		type = "text" 
		className = "search"
		placeholder = { placeHolder }
		onChange = { handleChange }
	/>
}

export default SearchBox;