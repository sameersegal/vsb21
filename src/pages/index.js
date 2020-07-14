import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components';

import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"


const CArticle = styled.article`
  // width: 1400px;
`
const CSection = styled.section`
  // width: 100%;
`

const RTAIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges 
  
  const links = []
  // posts.forEach(({node: {frontmatter: {title}, fields: {slug}}}) => {
  //   const s = "/#" + slug.split("/")[2]
  //   links.push({'link':s, title, 'type': 'anchor'})
  // })
  links.push({'link':'/musings-and-memories', 'title': 'Musings & Memories'})
  links.push({'link':'/rta-journal', 'title': 'Birthday Letters'})
  links.push({'link':'/valley-mysore-pak-recipe', 'title': 'Valley Mysore Pak'})

  return (
    <Layout location={location} title={siteTitle} links={links}>
      <SEO title="Home" />  
      {/* <Container> */}
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const isVideo = !!node.frontmatter.hero_video  
        
        const tag = node.fields.slug.split("/")[2]
        return (
          <CArticle key={node.fields.slug} id={tag}>                        
            <CSection dangerouslySetInnerHTML={{ __html: node.html }} />   
          </CArticle>
        )
      })}
      {/* </Container>     */}
    </Layout>
  )
}

export default RTAIndex

export const pageQuery = graphql`
  query CList {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {section: {eq: "home"}}}, sort: {fields: frontmatter___priority, order: ASC}) {
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
