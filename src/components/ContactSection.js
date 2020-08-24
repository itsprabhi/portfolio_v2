import React from 'react'


import resume from '../resume/Prabhsharan_Resume.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faBehance } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


function ContactSection() {
    return (
        <div>
            <div className = 'home-contact' id = "contact">
                <div className = 'home-contact-section container'>
                    <div className = 'home-contact-txt'>
                        <p>
                            Let's work together!
                        </p>
                        <h1>
                            Contact<br />Me
                        </h1>
                        <div className = 'home-work-btn-section'>
                            <div className = 'blue-btn'>
                                <a href = 'mailto:iamprabhie@gmail.com'>
                                    Email Me
                                </a>
                            </div>
                            <div className = 'blue-outline-btn'>
                                <a href = {resume} target="_blank">
                                    My Resume
                                </a>                       </div>
                        </div>
                    </div>
                    <div className = 'social-links-contact'>
                        <div class = 'hire-me-section'>
                                <h5>
                                    Hire Me!
                                </h5>
                                <div className = 'blue-btn'>
                                <a href = 'https://www.fiverr.com/itsprabhi' target = '_blank'>
                                        Hire
                                    </a>
                                </div>
                            </div>
                            <div className = 'social-menu'>
                                <h5>
                                    Let's connect on social
                                </h5>
                                <div className = 'social-list'>
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
        </div>
    )
}

export default ContactSection
