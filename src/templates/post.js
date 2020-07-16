import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const Container2 = styled(Container)`
  max-width: 900px;
  width: 100%;
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const post = data.markdownRemark
  
  const links = []
  links.push({'link':'/musings-and-memories', 'title': 'Musings & Memories'})
  links.push({'link':'/birthday-letters', 'title': 'Birthday Letters'})  
  links.push({'link':'/mysore-pak-recipe', 'title': 'Mysore Pak'})


  return (
    <Layout location={location} title={siteTitle} links={links}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      {/* <Container2> */}
        <article>        
          <section dangerouslySetInnerHTML={{ __html: post.html }} />        
        </article>      
      {/* </Container2>       */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`