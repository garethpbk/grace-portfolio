import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Art from './art';

const Container = styled.div`
  display: flex;

  padding: 50px;
`;

const Left = styled.div`
  flex-basis: 20%;
`;

const Right = styled.div`
  flex-basis: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    margin: 5px 0;

    &:first-of-type {
      margin: 5px 0 25px 0;
    }
  }
`;

export default props => {
  console.log(props);
  return (
    <Container>
      <Left>
        <h1>Grace Mae Huddleston</h1>
        <Nav>
          <Link to="">Work</Link>
          <Link to="">CV</Link>
          <Link to="">About</Link>
          <Link to="">Contact</Link>
        </Nav>
      </Left>
      <Right>
        <Art data={props.art[0].node} />
      </Right>
    </Container>
  );
};
