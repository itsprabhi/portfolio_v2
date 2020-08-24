import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from 'react'
import '../style/header.css'
import '../style/work.css'
import { gsap } from 'gsap/'



export class Header extends Component {
    state = {
        onOff:true
    }
    
    
    changeSwitch = () => {
       
        if(this.state.onOff){
           this.setState({
               onOff:false
           })
        }else{
            this.setState({
                onOff:true
            })
        }
    }

    componentDidMount(){
        

        const tl = gsap.timeline({defaults:{duration:0.8}})
        // let rule = CSSRulePlugin.getRule(".intro-text:after");
        // .to(rule,{cssRule:{scaleY:0}},"-=0.8")
        tl.from('.intro-text', {ease: 'Expo.easeOut', x: 0, y: -200, opacity:0})
        .from('.intro-text h1', { x: 0, y: -100,opacity:0},"-=0.5")
        .from('.intro-description', {opacity:0},"-=0.5")
        .from('.intro-botttom-section', {x:100,y:0}, "-=1.5")
        .from('.intro-bottom-section-txt', {x:100,y:0},"-=1.5");
        
        const tl2 = gsap.timeline({defaults:{duration:1.8}})

        tl2.from('.skill-icon',{stagger:0.1,y:-200,ease:'Expo.easeOut'})
    }

    render() {
        let switchList = this.state.onOff ? 'toggle-nav-close' : 'toggle-nav'
        let toggle = this.state.onOff ? 'toggle-bar' : 'toggle-on'
        return (
            <div>
                <div className = 'navbar'>

                    <div className = 'container'>
                        <nav>

                            <div className = 'nav-brand'>
                                <h3>
                                    Prabhi
                                </h3>
                            </div>

                            <div className = 'nav-items'>
                                <ul id = 'toggle-list' className = {switchList}>
                                    <li className = 'nav-item'>
                                        <Link to = '/' className = 'nav-link'>
                                            Home
                                        </Link>
                                    </li>

                                    <li className = 'nav-item'>
                                        <Link to = '/work' className = 'nav-link'>
                                            Work
                                        </Link>
                                    </li>

                                    <li className = 'nav-item'>
                                        <Link to = '/about' className = 'nav-link'>
                                            About
                                        </Link>
                                    </li>

                                    <li className = 'nav-item'>
                                        <Link to = '#contact' className = 'nav-link'>
                                            Contact
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className = {toggle} id = 'toggle' onClick = {this.changeSwitch}></div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Prabhi`,
}

export default Header
