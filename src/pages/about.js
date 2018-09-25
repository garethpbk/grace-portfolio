import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Base from '../components/base';

const About = data => {
  const aboutText =
    data.data.allContentfulGraceText.edges[0].node.aboutText.aboutText;

  console.log(aboutText);

  return (
    <Layout>
      <Base art={false} render={() => <div>{aboutText}</div>} />
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
