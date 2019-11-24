import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>Movies | Nofilx</title>
      </Helmet>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section
          title="현재 상영작"
          children={nowPlaying.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imgUrl={movie.poster_path}
              year={movie.release_date.substring(0, 4)}
              rating={movie.vote_average}
            />
          ))}
        ></Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section
          title="상영 예정작"
          children={upcoming.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imgUrl={movie.poster_path}
              year={movie.release_date.substring(0, 4)}
              rating={movie.vote_average}
            />
          ))}
        ></Section>
      )}
      {popular && popular.length > 0 && (
        <Section
          title="인기 상영작"
          children={popular.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imgUrl={movie.poster_path}
              year={movie.release_date.substring(0, 4)}
              rating={movie.vote_average}
            />
          ))}
        ></Section>
      )}
      {error && <Message text={error}></Message>}
    </Container>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
