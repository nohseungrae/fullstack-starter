import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="검색하시오..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Helmet>
          <title>Search | Nofilx</title>
        </Helmet>
        {movieResults && movieResults.length > 0 && (
          <Section
            title="영화 결과"
            children={movieResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imgUrl={movie.poster_path}
                year={movie.release_date}
                rating={movie.vote_average}
              />
            ))}
          ></Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section
            title="TV,드라마 결과"
            children={tvResults.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                imgUrl={tv.poster_path}
                title={tv.name}
                rating={tv.vote_average}
                year={tv.first_air_date}
              />
            ))}
          ></Section>
        )}
        {error && <Message color="#ed2d2d" text={error}></Message>}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
