import React from 'react';

export default function MovieLists({ movies }) {
	const movieLists = movies.map((movie) => {
		return (
			<div className="todolist" key={movie.id}>
				<div>
					<div id="title">{movie.title}</div>
					<div>{movie.overview}</div>
					<img
						src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
						alt={movie.title + ' poster'}
					/>
				</div>
			</div>
		);
	});
	return <div className="todoContrainer">{movieLists}</div>;
}
