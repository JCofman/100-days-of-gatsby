import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';

export const query = graphql`
  query location($id: String) {
    contentfulLocation(id: { eq: $id }) {
      id
      location
    }
  }
`;

const Location = ({ data }) => {
  return <Layout>Hi I am {data.contentfulLocation.location}</Layout>;
};

export default Location;
