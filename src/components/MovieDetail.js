import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './MovieDetail.scss';

export default function MovieDetail({ movie, genreList }) {
  const genres = movie.genre_ids
    .map((genreid) => {
      if (genreList.length === 0) {
        return genreid;
      } else {
        let genreObj = genreList.filter((genre) => {
          return genre.id === genreid;
        });
        return genreObj[0].name;
      }
    })
    .join(', ');

  return (
    <Container className="movie-detail">
      <Row>
        <Col className="poster-contrainer nopadding" xs="12" md="4" lg="5">
          <img
            className="poster"
            src={'https://image.tmdb.org/t/p/w342/' + movie.poster_path}
            alt={movie.title + ' poster'}
          />
        </Col>
        <Col className="meta-data-container" xs="12" md="8" lg="7">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <div className="additional-details">
            <span className="genre-list">{genres}</span>
            <Row className="nopadding release-details">
              <Col xs="6">
                Release Date:{' '}
                <span className="meta-data">{movie.release_date}</span>
              </Col>
              <Col xs="6">
                Vote Average:{' '}
                <span className="meta-data">{movie.vote_average} / 10</span>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
