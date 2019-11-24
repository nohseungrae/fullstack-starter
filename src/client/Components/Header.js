import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  height: 50px;
  width: 100%;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const List = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
`;
const Item = styled.li`
  width: 80px;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: 0.2s linear;
`;
const Slink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <Slink to="/">Movies</Slink>
      </Item>
      <Item current={pathname === "/tv"}>
        <Slink to="/tv">TV</Slink>
      </Item>
      <Item current={pathname === "/search"}>
        <Slink to="/search">Search</Slink>
      </Item>
    </List>
  </Header>
));
