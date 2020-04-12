import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MovieLists from './components/MovieLists';

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'd2865b1433557a7176ac697d7aba876f';

function App() {
	const [itemsContrainer, setItemsContrainer] = useState({ results: [] });
	const [query, setQuery] = useState('a');

	useEffect(() => {
		if (query === '') {
			return;
		}
		axios
			.get(API_URL, { params: { api_key: API_KEY, query: query } })
			.then((response) => {
				console.log(response.data);
				setItemsContrainer(response.data);
			})
			.catch((error) => {
				console.log('error ' + error);
			});
	}, [query]);

	return (
		<div className="App">
			<input value={query} onChange={(e) => setQuery(e.target.value)} />
			<MovieLists movies={itemsContrainer.results} />
		</div>
	);
}

export default App;
