// onCreateNode for practice working with markdown files
// generate slug for md files
// node js path.basename to get basename and also remove the file extension
const path = require("path")
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    console.log(slug, "slug")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// creatPage

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPath = path.resolve("src/templates/blog-post.js")
  // the graphql here returns a promise
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            description {
              childMarkdownRemark {
                excerpt
              }
            }
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogPath,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

// the component here doesn't refer to actual react component but the path to the component
