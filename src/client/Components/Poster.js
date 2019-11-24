import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: auto;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.div`
  background-repeat: none;
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  width: 100%;
  height: 200px;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.4;
    & + span {
      z-index: 1;
    }
  }
  background-image: url(${props => props.imgUrl});
`;

const Rating = styled.span`
  display: block;
  padding: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  transition: 0.2s linear;
`;

const Title = styled.h3`
  display: block;
  font-size: 13px;
  margin-bottom: 5px;
`;

const Year = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imgUrl, title, year, rating, isMovie = true }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          imgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w300${imgUrl}`
              : require("../assets/screenShot.jpg")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 10 ? `${title.substring(0, 10)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
