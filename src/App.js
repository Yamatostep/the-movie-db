import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import MovieDetail from './components/MovieDetail';
import MovieLists from './components/MovieLists';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd2865b1433557a7176ac697d7aba876f';

function App() {
	const [itemsContrainer, setItemsContrainer] = useState({ results: [] });
	const [query, setQuery] = useState('a');
	const [movie, setMovie] = useState(null);
	const [genreList, setGenreList] = useState([]);

	useEffect(() => {
		if (query === '') {
			return;
		}
		axios
			.get(API_URL + '/search/movie', {
				params: { api_key: API_KEY, query: query },
			})
			.then((response) => {
				console.log(response.data);
				setItemsContrainer(response.data);
				setMovie(response.data.results[0]);
			})
			.catch((error) => {
				console.log('error ' + error);
			});
	}, [query]);

	useEffect(() => {
		axios
			.get(API_URL + '/genre/movie/list', {
				params: { api_key: API_KEY, language: 'en-US' },
			})
			.then((response) => {
				setGenreList(response.data.genres);
			})
			.catch((error) => {
				console.log('error ' + error);
			});
	}, [genreList.length]);

	const handleMovieClick = (movie) => {
		setMovie(movie);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		setQuery(e.target.inputSearch.value);
	};

	return (
		<div className="App">
			<SearchForm handleSearchSubmit={handleSearchSubmit} />

			<div
				style={
					movie &&
					movie.backdrop_path && {
						backgroundImage:
							'url(' +
							'https://image.tmdb.org/t/p/w1280/' +
							movie.backdrop_path +
							')',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						transition: 'background 0.3s linear',
					}
				}
			>
				{movie && <MovieDetail movie={movie} genreList={genreList} />}
			</div>
			<MovieLists
				movies={itemsContrainer.results}
				handleMovieClick={handleMovieClick}
			/>

			<Footer />
		</div>
	);
}

export default App;
