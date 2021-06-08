import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;

  return (
    <Layout pageTitle="Blog Page">
      <div>{frontmatter.title}</div>
      <div>{frontmatter.path}</div>
      <div>{frontmatter.author}</div>
      <div>{frontmatter.date}</div>
      <div>{frontmatter.tags}</div>
      <div>{timeToRead}</div>
      <GatsbyImage image={getImage(frontmatter.thumbnailImage)} alt={frontmatter.title} />
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default BlogTemplate;

export const blogQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      timeToRead
      html
      frontmatter {
        author
        date
        path
        tags
        title
        thumbnailImage {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
      }
    }
  }
`;
