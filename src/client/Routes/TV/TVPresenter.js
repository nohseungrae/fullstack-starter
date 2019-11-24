import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>TV | Nofilx</title>
      </Helmet>
      {topRated && topRated.length > 0 && (
        <Section
          title="상위 랭크"
          children={topRated.map(tv => (
            <Poster
              isMovie={false}
              key={tv.id}
              id={tv.id}
              imgUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
            />
          ))}
        ></Section>
      )}
      {popular && popular.length > 0 && (
        <Section
          title="인기 방영작"
          children={popular.map(tv => (
            <Poster
              isMovie={false}
              key={tv.id}
              id={tv.id}
              imgUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
            />
          ))}
        ></Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section
          title="현재 방영작"
          children={airingToday.map(tv => (
            <Poster
              isMovie={false}
              key={tv.id}
              id={tv.id}
              imgUrl={tv.poster_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
            />
          ))}
        ></Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
