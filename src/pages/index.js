import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import ImageQuote from "../components/image_quote"
import ImageQuote2 from "../components/image_quote_2col"
import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const isVideo = !!node.frontmatter.hero_video
        const isImageQuote2 = node.frontmatter.type === "image_3_col"
        const isImageQuote = node.frontmatter.type === "image_2_col"
        return (
          <article key={node.fields.slug}>
            {isImageQuote2 &&
              <ImageQuote2 
                title={node.frontmatter.title}
                image={node.frontmatter.hero.publicURL} 
                col1={node.frontmatter.col1} 
                col2={node.frontmatter.col2}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
              ></ImageQuote2>
            }
            {isImageQuote &&
              <ImageQuote 
                title={node.frontmatter.title}
                image={node.frontmatter.hero.publicURL} 
                html={node.html}                 
                author={node.frontmatter.author}                
              ></ImageQuote>
            }
            {!isImageQuote2 && !isImageQuote &&
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
            }                       
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
    allMarkdownRemark(filter: {frontmatter: {section: {eq: "home"}}}, sort: {fields: frontmatter___priority, order: ASC}) {
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
            type
            col1
            col2
            author
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
