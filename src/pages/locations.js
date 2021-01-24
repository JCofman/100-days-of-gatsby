import * as React from 'react';
import Layout from './../components/Layout';
import { graphql, Link } from 'gatsby';

export const query = graphql`
  {
    allContentfulLocation {
      edges {
        node {
          id
          location
          map {
            lat
            lon
          }
          slug
        }
      }
    }
  }
`;

const LocationPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <title>About Page</title>
        Locations
        <ul>
          {data.allContentfulLocation.edges.map(({ node: location }) => {
            return (
              <Link to={location.slug}>
                <li key={location.id}>{location.location}</li>
              </Link>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
};

export default LocationPage;
