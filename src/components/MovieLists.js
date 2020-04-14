import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MovieLists.scss';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
    slidesToSlide: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 990 },
    items: 5,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 990, min: 765 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 765, min: 430 },
    items: 2,
  },
  mobile2: {
    breakpoint: { max: 430, min: 0 },
    items: 1,
  },
};

export default function MovieLists({ movies, handleMovieClick }) {
  const movieLists = movies.map((movie) => {
    return (
      <div key={movie.id}>
        <img
          src={'https://image.tmdb.org/t/p/w154/' + movie.poster_path}
          alt={movie.title + ' poster'}
          onClick={() => handleMovieClick(movie)}
        />
      </div>
    );
  });
  return (
    <Container className="movie-contrainer">
      <Row>
        <Col>
          <Carousel responsive={responsive}>{movieLists}</Carousel>
        </Col>
      </Row>
    </Container>
  );
}
