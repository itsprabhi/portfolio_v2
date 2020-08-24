import React from 'react'
import Layout from '../components/layout'
import '../style/blog.css'
import ContactSection from '../components/ContactSection'


export default function Template({ data }) {
  const post = data.markdownRemark


  const siteLink = post.frontmatter.siteLink ? 
  <div className = 'blue-btn'>
      <a href = {post.frontmatter.siteLink}>
          Website Link
      </a>
  </div> : null

const gitLink = post.frontmatter.gitLink ? 
<div className = 'blue-outline-btn'>
    <a href = {post.frontmatter.gitLink}>
        Github Link
    </a>
</div> : null


  return (
    <div>
      <Layout>
      <div class = 'blog-post'>
      <div className = 'work-intro'>
        <div class = 'post-thumbnail container'>
          <div className = 'blog-heading-txt'>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.description}</p>
            <div className = 'intro-btn-section blog-post-buttons'>
                {siteLink}
                {gitLink}
            </div>
          </div>
        </div>
      </div>
      <div className = 'post-txt'>
        <div className = 'post-content container'>
          <div className = 'content-heading'>
            <h2>
              Creative Process
            </h2>
          </div>
          <div className = 'content-txt'>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
        <div className = 'project-grid container'>
          <div className = 'project-grid-card project-grid-one'>
            <div className = 'project-card-image'>
              <img src = {post.frontmatter.imageOne}></img>
            </div>
          </div>
          <div className = 'project-grid-card project-grid-two'>
            <div className = 'project-card-image'>
              <img src = {post.frontmatter.imageTwo}></img>
            </div>
          </div>
          <div className = 'project-grid-card project-grid-three'>
            <div className = 'project-card-image'>
              <img src = {post.frontmatter.imageThree}></img>
            </div>
          </div>
        </div>
        
      </div>
        <ContactSection />
      </div>
      </Layout> 
    </div>
    
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        description
        imageOne
        imageTwo
        imageThree
        siteLink
        gitLink
      }
    }
  }
`
