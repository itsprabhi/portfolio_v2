import React from 'react'
import { Link } from 'gatsby'
import resume from '../resume/web_design.pdf'
import ProfileImg from '../images/profile_two.jpeg'

function IntroPage() {
    return (
        <div>
            <div className = 'site-intro'>
                <div className = 'site-intro-main  container'>
                    <div className = 'intro-text'>
                        <h1>
                            Hi, I am <br />
                            Prabhi
                        </h1>
                    </div>
                    <div className = 'intro-description'>
                        <div className = 'messege-box'>
                            <div className = 'messege-box-img'>
                                <img src = {ProfileImg} alt = 'Picture of Prabhi in a blue outfit' />
                            </div>
                            <div className = 'messege-box-txt'>
                                <p>
                                    I am a web designer and developer, passionate about creating responsive and high-quality websites and landing pages.
                                </p>
                            </div>
                        </div>
                        <div className = 'intro-btn-section'>
                            <div className = 'blue-btn'>
                                <Link to = '/work'>
                                    My Work
                                </Link>
                            </div>
                            <div className = 'blue-outline-btn'>
                                <Link to = '/about'>
                                    About Me
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'intro-botttom-section'>
                    <div>
                        <div className = 'intro-bottom-section-txt'>
                            See my <span><a href = {resume} target="_blank">Resume</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroPage
