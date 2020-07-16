import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components';

import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"


const CArticle = styled.article`
  // width: 1400px;
  margin: 20px 0;
  section {
    text-align: center;
    video {
      padding: 0px;
      // width: 80%;
      @media screen and (min-width: 1600px) {
        width: 80%;
      }
      @media screen and (max-width: 1600px) {
        width: 100%;
      }
      // width: 590px;
      // @media screen and (max-width: 200px) {
      //   width: 200px;
      // }    
      // @media screen and (max-width: 400px) {
      //   width: 400px;
      // }    
      // @media screen and (max-width: 800px) {
      //   width: 590px;
      // }
      // @media screen and (max-width: 1200px) {
      //   width: 1000px;
      // }    
      // @media screen and (max-width: 1600px) {
      //   width: 1400px;
      // }    
      // @media screen and (max-width: 1920px) {
      //   width: 1600px;
      // }    
    }
  }  
`

// 200, 400, 800, 1200, 1600, 1920

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
  links.push({'link':'/birthday-letters', 'title': 'Birthday Letters'})
  links.push({'link':'/55-mysore-pak-recipe', 'title': 'Mysore Pak'})

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
