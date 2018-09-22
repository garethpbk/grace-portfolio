import React from 'react';
import { graphql } from 'gatsby';
import { injectGlobal } from 'styled-components';
import 'typeface-raleway';
import 'typeface-lato';

import Layout from '../components/layout';
import Home from '../components/home';

const IndexPage = data => {
  const art = data.data.allContentfulGraceArt.edges;
  const links = [];
  art.map(uno => {
    return links.push(uno.node.name.toLowerCase().replace(/ /g, '-'));
  });

  return (
    <Layout>
      <Home art={art} links={links} />
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

    display: block;

    &:hover {
      color: blueviolet;
      text-decoration: overline;

      h1 {
        color: blueviolet;
      }
    }

    h1 {
      color: #323232;
    }
  }

  img {
    max-width: 100%;
  }
`;

export const ALL_ART = graphql`
  query {
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
