import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components';

import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"

// const Container2 = styled(Container)`
//   max-width: 1400px;
//   width: 100%;
// `

const MAMIndex = ({ data, location }) => {
  console.log(data)
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const links = []
  posts.forEach(({node: {frontmatter: {title}, fields: {slug}}}, i) => {
    if(i > 0) {
      const s = "/musings-and-memories/#" + slug.split("/")[2]    
      links.push({'link':s, title, 'type': 'anchor'})
    }    
  })
  links.pop()
  links[links.length-1]['divider'] = true
  links.push({'link':'/birthday-letters', 'title': 'Birthday Letters'})  
  links.push({'link':'/55-mysore-pak-recipe', 'title': 'Mysore Pak'})

  return (
    <Layout location={location} title={siteTitle} links={links}>
      <SEO title="Musings and Memories" />      
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const isVideo = !!node.frontmatter.hero_video
          const tag = node.fields.slug.split("/")[2]
          return (
            <article key={node.fields.slug} id={tag}>            
              <section dangerouslySetInnerHTML={{ __html: node.html }} />  
            </article>
          )
        })}      
    </Layout>
  )
}

export default MAMIndex

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
