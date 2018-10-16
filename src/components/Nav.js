import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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

export default props => (
  <>
    <Nav>
      <Link to="/work">Work</Link>
      <Link to="/about">About</Link>
      <Link to="">Find Me</Link>
    </Nav>
    {props.art ? (
      <Controls>
        <Link to={props.prevLink}>Previous</Link>
        <Link to={props.nextLink}>Next</Link>
      </Controls>
    ) : (
      <Controls />
    )}
  </>
);
