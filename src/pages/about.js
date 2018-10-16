import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Container, Left, Right } from '../components/base';
import Nav from '../components/Nav';

const AboutWrapper = styled.main`
  padding: 0 50px;

  p {
    font-size: 20px;
    line-height: 1.5;
  }
`;

const About = data => {
  const aboutText =
    data.data.allContentfulGraceText.edges[0].node.aboutText.aboutText;

  return (
    <Layout>
      <Container>
        <Left>
          <Link to="/">
            <h1>Grace Mae Huddleston</h1>
          </Link>
          <Nav />
        </Left>
        <Right>
          <AboutWrapper>
            <p>{aboutText}</p>
          </AboutWrapper>
        </Right>
      </Container>
    </Layout>
  );
};

export default About;

export const ABOUT_QUERY = graphql`
  query {
    allContentfulGraceText {
      edges {
        node {
          aboutText {
            aboutText
          }
        }
      }
    }
  }
`;
