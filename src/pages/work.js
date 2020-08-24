import React from "react"
import { Link } from "gatsby"


import '../style/blog.css'
import Layout from "../components/layout"

import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <SEO title="Work" />
    <div className = 'home-page'>
        <div className = 'work-intro'>
            <div className = 'site-intro-main work-intro-main  container'>
                <div className = 'work-text intro-text'>
                    <h1>
                        My <br />
                        Work
                    </h1>
                </div>
                <div className = 'quote-section'>
                    <div>
                    <div className = 'quote'>
                        <div className = 'quote-txt'>
                            <p>
                                " Whatever your life's work is, do it well. A man should do his job so well that the living, the dead, and the unborn could do it no better "
                            </p>
                        </div>
                        <div className = 'quote-author'>
                            <p>
                                Martin Luther King, Jr.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className = 'work-page-grid container'>
            {data.allMarkdownRemark.edges.map(post => (
                <div className = 'work-grid-card work-grid-card-one' key = {post.node.id}>
                    <Link className = 'project-link' to={post.node.frontmatter.path}>
                        <div className = 'work-card-image'>
                            <img src = {post.node.frontmatter.imageOne}></img>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            imageOne
          }
        }
      }
    }
  }
`

export default BlogPage
