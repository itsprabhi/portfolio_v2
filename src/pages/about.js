import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Profile from '../images/prabhi.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faBehance } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className = 'home-page'>
        <div className = 'work-intro'>
            <div className = 'site-intro-main work-intro-main  container'>
                <div className = 'work-text intro-text'>
                    <h1>
                        About <br />
                        Me
                    </h1>
                </div>
                <div className = 'quote-section'>
                    <div>
                    <div className = 'quote'>
                        <div className = 'quote-txt'>
                            <p>
                                " Make the most of yourself....for that is all there is of you."
                            </p>
                        </div>
                        <div className = 'quote-author'>
                            <p>
                            Ralph Waldo Emerson
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className = 'about-page'>
                <div className = 'container'>
                    <div className = 'about-page-content'>
                        <div className = 'about-page-img'>
                            <img src = {Profile} alt="my pic" />
                        </div>
                        <div className = 'about-page-txt'>
                            <p>
                            Hi, my name is Prabhsharan Singh Gosal. I was born in Punjab, India. As a kid, I always had an interest in science and technology. For higher studies, I moved to Canada and am currently studying advertising and marketing at Georgian College. I am a self-taught web designer and developer. 
                            </p> 
                            <p>
                            My main skills are HTML, CSS, JavaScript, React, Adobe Photoshop, Illustrator, and Adobe XD. Apart from web dev, I also have experience working in retail as a sales and marketing associate. As for hobbies, I love to read and play sports. 
                            </p>
                            <h5>
                                Let's connect
                            </h5>
                            <div className = 'social-list about-list'>
                            <ul>
                                <li>
                                    <a href = 'https://twitter.com/itsprabhi' target = '_blank'><FontAwesomeIcon icon = {faTwitter} /></a>
                                </li>
                                <li>
                                    <a href = 'https://behance.net/itsprabhi' target = '_blank'><FontAwesomeIcon icon = {faBehance} /></a>
                                </li>
                                <li>
                                    <a href = 'https://www.linkedin.com/in/prabhsharangosal/' target = '_blank'><FontAwesomeIcon icon = {faLinkedin} /></a>
                                </li>
                                <li>
                                    <a href = 'https://github.com/itsprabhi' target = '_blank'><FontAwesomeIcon icon = {faGithub} /></a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
  </Layout>
)

export default AboutPage
