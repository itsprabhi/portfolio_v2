import React from "react"
import { Link,graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

//COMPONENTS
import IntroPage from '../components/IntroPage'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'


export const IndexPage = (data) => {
return ( 
    <Layout>
        <SEO title="Home" />
        <div className = 'home-page'>
            <IntroPage />
            <AboutSection />
            <div className = 'home-work'>
                    <div className = 'home-work-section container'>
                        <div className = 'home-work-txt'>
                            <div className = 'home-work-heading'>
                                <h2>My<br />Work</h2>
                            </div>
                            <div className = 'home-work-description'>
                                <p>Here are some samples of my previous work. These include some paid and personal projects I did in the past. Projects range from UI designs to full-stack websites. </p>
                            </div>
                        </div>
                        <div className = 'work-page-grid container'>
                    {data.data.allMarkdownRemark.edges.slice(0,4).map(post => (
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
                <div class = 'home-work-section-btn'>
                    <div className = 'blue-btn'>
                        <Link to = '/work'>
                            See More
                        </Link>
                    </div>
                </div>
            </div>
            <ContactSection />
            </div>
        </Layout>
    );
    
}

export default props => (
    <StaticQuery query = {
        graphql`
  query HomeIndexQuery {
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
     }
     render={data => <IndexPage data={data} {...props} />}
    />
 )



