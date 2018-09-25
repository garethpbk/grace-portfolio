import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex-basis: 20%;

  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  flex-basis: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 50px 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  a {
    margin: 5px 0;

    &:first-of-type {
      margin: 5px 0 25px 0;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px 0 0 0;
`;

const Base = props => {
  const { index, links, art } = props;

  if (art) {
    let prevLink = links[index - 1];
    let nextLink = links[index + 1];

    if (!prevLink) prevLink = links[links.length - 1];
    if (!nextLink) nextLink = links[0];

    return (
      <Container>
        <Left>
          <Link to="/">
            <h1>Grace Mae Huddleston</h1>
          </Link>
          <Nav>
            <Link to="">Work</Link>
            <Link to="/about">About</Link>
            <Link to="">Find Me</Link>
          </Nav>
          <Controls>
            <Link to={prevLink}>Previous</Link>
            <Link to={nextLink}>Next</Link>
          </Controls>
        </Left>
        <Right>{props.render()}</Right>
      </Container>
    );
  }

  return (
    <Container>
      <Left>
        <Link to="/">
          <h1>Grace Mae Huddleston</h1>
        </Link>
        <Nav>
          <Link to="">Work</Link>
          <Link to="/about">About</Link>
          <Link to="">Find Me</Link>
        </Nav>
        <Controls />
      </Left>
      <Right>{props.render()}</Right>
    </Container>
  );
};

export default Base;
