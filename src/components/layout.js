/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
        <div className = 'footer-items'>
                <div className = 'footer-info-section'>
                    <h3>
                        Prabhi
                    </h3>
                    <p>
                        A portfolio site made with passion to display my talent with people around the world.
                    </p>
                    <div className = 'footer-menu'>
                        <ul className = 'footer-menu-list'>
                            <li className = ' nav-item nav-item-footer'>
                                <Link to = '#' className = 'nav-link'>
                                    Home
                                </Link>
                            </li>
                            <li className = ' nav-item nav-item-footer'>
                                <Link to = '/work' className = ' nav-link'>
                                    Work
                                </Link>
                            </li>
                            
                            <li className = ' nav-item nav-item-footer'>
                                <Link to = '/about' className = 'nav-link'>
                                    About
                                </Link>
                            </li>
                            <li className = ' nav-item nav-item-footer'>
                                <Link to = '#contact' className = 'nav-link'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = 'social-icons btn-div footer-social-links' >
                    <ul>
                  
                    </ul>
                </div>
            </div>
            <div className = 'copyright-restriction'>
                <p>All rights reserved @2020. Prabhi</p>
            </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
