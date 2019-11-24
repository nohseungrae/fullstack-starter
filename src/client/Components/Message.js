import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Text = styled.span`
  color: ${props => props.color};
`;

const Message = ({ text, color }) => (
  <Container>
    {console.log(color)}
    <Text color={color}>{text}</Text>
  </Container>
);
Error.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Message;
