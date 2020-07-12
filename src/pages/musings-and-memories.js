import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const links = []
  posts.forEach(({node: {frontmatter: {title}, fields: {slug}}}) => {
    const s = "/musings-and-memories/#" + slug.split("/")[2]
    links.push({'link':s, title, 'type': 'anchor'})
  })
  links.push({'link':'/rta-journal', 'title': 'RTA Journal'})

  return (
    <Layout location={location} title={siteTitle} links={links}>
      <SEO title="All posts" />      
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const isVideo = !!node.frontmatter.hero_video
        const tag = node.fields.slug.split("/")[2]
        return (
          <article key={node.fields.slug} id={tag}>            
            <section dangerouslySetInnerHTML={{ __html: node.html }} />
            <hr />      
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query MAMList {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {section: {eq: "musings-and-memories"}}}, sort: {fields: frontmatter___priority, order: ASC}) {
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")            
            priority
          }
          fields {
            slug
          }
          id
          html
        }
      }
    }
  }
`
