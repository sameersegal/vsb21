import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import ImageQuote from "../components/image_quote"
import ImageQuote2 from "../components/image_quote_2col"
import ImageQuoteBackground from "../components/image_quote_background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const desktopImage = data.desktopImage
  const mobileImage = data.mobileImage

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Hero
        desktop={desktopImage.childImageSharp.fluid}
        mobile={mobileImage.childImageSharp.fluid}
        title={siteTitle}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const isVideo = !!node.frontmatter.hero_video
        const isImageQuote2 = node.frontmatter.type === "image_3_col"
        const isImageQuote = node.frontmatter.type === "image_2_col"
        const isImageBackground = node.frontmatter.type === "image_background"
        return (
          <article key={node.fields.slug}>
            {isImageQuote2 &&
              <ImageQuote2 
                title={node.frontmatter.title}
                image={node.frontmatter.hero} 
                col1={node.frontmatter.col1} 
                col2={node.frontmatter.col2}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
              ></ImageQuote2>
            }
            {isImageQuote &&
              <ImageQuote 
                title={node.frontmatter.title}
                image={node.frontmatter.hero} 
                html={node.html}                 
                author={node.frontmatter.author}                
              ></ImageQuote>
            }
            {isImageBackground &&
              <ImageQuoteBackground 
                title={node.frontmatter.title}
                image={node.frontmatter.hero} 
                html={node.html}                 
                author={node.frontmatter.author}                
              ></ImageQuoteBackground>
            }
            {!isImageQuote2 && !isImageQuote && !isImageBackground &&
              <header>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>                                
                  {/* {isVideo &&                 
                    <video poster={node.frontmatter.hero.publicURL} autoPlay loop width="600" height="400">
                      <source src={node.frontmatter.hero_video.publicURL} type="video/mp4"/>
                    </video>                              
                  } */}
                  {/* {!isVideo &&
                    <Image src={node.frontmatter.hero.childImageSharp.fluid} />                    
                  }  */}
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
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }              
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
    desktopImage: file(absolutePath: { regex: "/home.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    mobileImage: file(absolutePath: { regex: "/home.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
