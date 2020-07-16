import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RTAIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges 
  
  const links = []
  posts.forEach(({node: {frontmatter: {title}, fields: {slug}}}) => {
    const s = "/rta-journal/#" + slug.split("/")[2]
    links.push({'link':s, title, 'type': 'anchor'})
  })  
  links[links.length-1]['divider'] = true
  links.push({'link':'/musings-and-memories', 'title': 'Musings & Memories'})
  links.push({'link':'/mysore-pak-recipe', 'title': 'Mysore Pak'})

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
            <hr/>      
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
