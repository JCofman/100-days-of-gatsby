import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';

export const query = graphql`
  query location($id: String) {
    contentfulLocation(id: { eq: $id }) {
      id
      location
      locationImage {
        fluid(maxWidth: 2024) {
          sizes
          src
          aspectRatio
          srcSet
          srcSetWebp
          srcWebp
          tracedSVG
        }
      }
    }
  }
`;

const Location = ({ data }) => {
  return (
    <Layout>
      Hi I am {data.contentfulLocation.location}
      <Img fluid={data.contentfulLocation.location.fluid}></Img>
    </Layout>
  );
};

export default Location;
