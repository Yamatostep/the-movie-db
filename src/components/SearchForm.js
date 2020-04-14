import React from 'react';
import './SearchForm.scss';

export default function SearchForm({ handleSearchSubmit }) {
	return (
		<form className="SearchForm" onSubmit={handleSearchSubmit}>
			<input
				type="text"
				placeholder="Search.."
				id="inputSearch"
				name="inputSearch"
			/>
			<button type="submit">
				<i className="fa fa-search"></i>
			</button>
		</form>
	);
}
