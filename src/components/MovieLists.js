import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MovieLists({ movies }) {
  const movieLists = movies.map((movie) => {
    return (
      <div className="todolist" key={movie.id}>
        <div>
          <div id="title">{movie.title}</div>
          <div>{movie.overview}</div>
          <img
            src={'https://image.tmdb.org/t/p/w92/' + movie.poster_path}
            alt={movie.title + ' poster'}
          />
        </div>
      </div>
    );
  });
  return (
    <div className="todoContrainer">
      <Carousel responsive={responsive}>{movieLists}</Carousel>
    </div>
  );
}
