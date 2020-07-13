import React, {Fragment} from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import ImageQuote from "../components/image_quote"
import ImagePost from "../components/image_post"
import ImageQuote2 from "../components/image_quote_2col"
import ImageQuoteBackground from "../components/image_quote_background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import HeroBottom from "../components/bottom-hero"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const endNote = data.site.siteMetadata.end_note
  const posts = data.allMarkdownRemark.edges
  const desktopImage = data.desktopImage
  const mobileImage = data.mobileImage
  const bottomImage = data.bottomImage

  const links = []
  // posts.forEach(({node: {frontmatter: {title}, fields: {slug}}}) => {
  //   const s = "/rta-journal/#" + slug.split("/")[2]
  //   links.push({'link':s, title, 'type': 'anchor'})
  // })
  links.push({'link':'/rta-journal', 'title': 'RTA Journal'})
  links.push({'link':'/musings-and-memories', 'title': 'Musings & Memories'})

  return (
    <Layout location={location} title={siteTitle} links={links}>
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
        const isPost = node.frontmatter.type === "post"

        return (
          <article key={node.fields.slug}>
            {isImageQuote2 &&
              <ImageQuote2 
                title={node.frontmatter.title}
                image={node.frontmatter.hero} 
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                caption={node.frontmatter.caption}
                html={node.html}
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
            {isPost &&
              <ImagePost 
                title={node.frontmatter.title}
                image={node.frontmatter.hero} 
                html={node.frontmatter.description}                 
                to={node.fields.slug}                
                read_more={node.frontmatter.read_more}
              ></ImagePost>
            }
            {!isImageQuote2 && !isImageQuote && !isImageBackground && !isPost &&
              <header>
                {/* <Link style={{ boxShadow: `none` }} to={node.fields.slug}>                                 */}
                  {isVideo &&                 
                    <video poster={node.frontmatter.hero.publicURL} autoPlay loop width="600" height="400">
                      <source src={node.frontmatter.hero_video.publicURL} type="video/mp4"/>
                    </video>                              
                  }
                  {!isVideo &&
                    <div                    
                    dangerouslySetInnerHTML={{
                        __html: node.html,
                    }}
                    />  
                  } 
                {/* </Link>                                 */}
              </header> 
            }       
            <hr />                
          </article>
        )
      })}
      <HeroBottom
        desktop={bottomImage.childImageSharp.fluid}
        mobile={bottomImage.childImageSharp.fluid}
        title={endNote}
      />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogList {
    site {
      siteMetadata {
        title
        end_note
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
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }              
            }
            priority
            type
            caption
            author
            read_more
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
    bottomImage: file(absolutePath: { regex: "/bottom.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
