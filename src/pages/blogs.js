import * as React from 'react'
import Layout from '../components/layout'
import Bloglist from '../components/bloglist';
import { graphql, useStaticQuery } from 'gatsby';

const Blogs = () => {

  const { allMarkdownRemark } = useStaticQuery (
    graphql `
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout pageTitle="Blog Page">
        <Bloglist blogPosts={allMarkdownRemark.edges}/>
    </Layout>
  )
}

export default Blogs
