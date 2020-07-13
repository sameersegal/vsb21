const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postComponent = path.resolve(`./src/templates/post.js`)  
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: {frontmatter: {section: {eq: "home"}}}
          sort: { fields: [frontmatter___priority], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                type
                page_create
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const slug = post.node.fields.slug
    const {type, title} = post.node.frontmatter
    const pageCreate = post.node.frontmatter.page_create || true

    if (type === "post" && !pageCreate) {
      createPage({
        path: slug,
        component: postComponent,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    }    
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })    

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
