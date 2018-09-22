import React from 'react';
import { graphql, Link } from 'gatsby';
import { injectGlobal } from 'styled-components';
import 'typeface-raleway';
import 'typeface-lato';

import Layout from '../components/layout';
import Home from '../components/home';

const IndexPage = data => {
  const art = data.data.allContentfulGraceArt.edges;

  return (
    <Layout>
      <Home art={art} />
    </Layout>
  );
};

export default IndexPage;

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    color: #323232;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
  }

  a, p {
    font-family: 'Lato', sans-serif;
  }

  a {
    color: grey;
    text-decoration: none;

    &:hover {
      color: blueviolet;
      text-decoration: overline;
    }
  }
`;

export const ALL_ART = graphql`
  query ALL_ART {
    allContentfulGraceArt {
      edges {
        node {
          id
          name
          year
          size
          materials {
            materials
          }
          image {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`;
