import React from 'react'
import { Link } from 'gatsby'


function AboutSection() {
    return (
        <div>
            <div className = 'home-about'>
                <div className = 'container home-about-container'>
                    <div className = 'home-about-section'>
                        <div className = 'home-about-heading'>
                            <h2>
                                About Me
                            </h2>
                        </div>
                        <div className = 'home-about-txt'>
                            <p>
                            Hi, my name is Prabhsharan Singh Gosal. I am a current student at Georgian College, studying Advertising and Marketing. I enjoy working with creative challenges and solving problems. I also love to read and learn about technology. 
                            </p>
                        </div>
                    </div>
                    <div className = 'skillset-section'>
                        <div className = 'skillset-heading'>
                            <div className = 's.skillset-section'>
                                <h4>Technologies I can work <br />with</h4>
                            </div>
                            <div className = 'blue-btn skillset-btn'>
                                <Link to = '/about'>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className = 'skillset-icons'>
                            <div class = 'skillset-icons-section'>
                                <div className = 'skillset-icons-section-txt'>
                                    <p>
                                        Designing
                                    </p>
                                </div>
                                <div className = 'skillset-icons-set'>
                                    <ul>
                                        <li className = 'skill-icon'>
                                            <img src="https://img.icons8.com/color/30/000000/adobe-photoshop.png"/>
                                        </li>
                                        <li className = 'skill-icon'>
                                            <img src="https://img.icons8.com/color/30/000000/adobe-illustrator.png"/>
                                        </li>
                                        <li className = 'skill-icon'>
                                            <img src="https://img.icons8.com/color/30/000000/adobe-xd.png"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className = 'skillset-icons-section'>
                                <div className = 'skillset-icons-section-txt'>
                                    <p>
                                        Developing
                                    </p>
                                </div>
                                <div className = 'skillset-icons-set'>
                                    <ul>
                                        <li className = 'skill-icon'>
                                            <img src="https://img.icons8.com/color/30/000000/html-5.png"/>
                                        </li>
                                        <li className = 'skill-icon'>
                                            <img src="https://img.icons8.com/color/30/000000/css3.png"/>
                                        </li>
                                        <li className = 'skill-icon'>
                                            <img src="https://img.icons8.com/color/30/000000/javascript.png"/>
                                        </li>
                                        <li className = 'skill-icon'>
                                            <img src="https://img.icons8.com/color/30/000000/react-native.png"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
