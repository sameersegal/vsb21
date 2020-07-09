import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const isVideo = !!node.frontmatter.hero_video
        return (
          <article key={node.fields.slug}>            
            <header>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>                                
                {isVideo &&                 
                  <video poster={node.frontmatter.hero.publicURL} autoPlay loop width="600" height="400">
                    <source src={node.frontmatter.hero_video.publicURL} type="video/mp4"/>
                  </video>                              
                }
                {!isVideo &&
                  <img width="600" src={node.frontmatter.hero.publicURL}  alt="" loading="lazy" />  
                } 
              </Link>                                
            </header>            
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogList {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {order: ASC, fields: frontmatter___priority}) {
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            hero_video {
              publicURL
            }
            hero {
              publicURL
            }
            priority
          }
          fields {
            slug
          }
          id
        }
      }
    }
  }
`
