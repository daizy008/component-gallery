import React from 'react';
import { graphql } from 'gatsby';

import Component from '../components/component';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ComponentsIndexPage = ({ data }) => (
  <Layout>
    <SEO title="Components" />
    <h1 className="">
      All components <span className="italic">(a-z)</span>
    </h1>
    <ul className="list-reset flex flex-wrap mt-4 -mx-4">
      {data.allAirtable.edges.map(
        (
          {
            node: {
              data: { slug, name, description, otherNames, examplesCount }
            }
          },
          i
        ) => (
          <li key={i} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <Component
              slug={slug}
              name={name}
              description={
                description !== null && description.childMarkdownRemark.html
              }
              otherNames={otherNames}
              examplesCount={examplesCount}
            />
          </li>
        )
      )}
    </ul>
  </Layout>
);

export default ComponentsIndexPage;

// query airtable for the Name and Slug of each record,
// filtering for only records in the Components table.
export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Components" } }
      sort: { fields: [data___Name], order: ASC }
    ) {
      edges {
        node {
          data {
            name: Name
            description: Description {
              childMarkdownRemark {
                html
              }
            }
            slug: Slug
            otherNames: Other_names
            examplesCount: Examples_count
          }
        }
      }
    }
  }
`;
