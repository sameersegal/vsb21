import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const RTAIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges  

  return (
    <Layout location={location} title={siteTitle}>
      <div>
          <a href="#assemblies">Assemblies</a>
      </div>
      <SEO title="All posts" />      
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const isVideo = !!node.frontmatter.hero_video  
        
        const tag = node.fields.slug.split("/")[2]
        return (
          <article key={node.fields.slug}>            
            <header>
              <a name={tag}>{node.frontmatter.title}</a>
            </header>      
            <section dangerouslySetInnerHTML={{ __html: node.html }} />
            <hr
              style={{
                // marginBottom: rhythm(1),
              }}
            />      
          </article>
        )
      })}
    </Layout>
  )
}

export default RTAIndex

export const pageQuery = graphql`
  query RTAList {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {section: {eq: "rta-journal"}}}, sort: {fields: frontmatter___priority, order: ASC}) {
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
