import React from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({ fetchHandler, inputValue, setInputValue }) => {
	return (
		<>
			<div>GitHub username</div>
			<input
				type='text'
				placeholder='Unesite korisnika'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			></input>
			<button onClick={fetchHandler}>GO!</button>
		</>
	);
};

SearchForm.propTypes = {
	fetchHandler: PropTypes.func,
	inputValue: PropTypes.string,
	setInputValue: PropTypes.func,
};
