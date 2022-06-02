import React from 'react'; 
// import {Link} from 'react-router-dom';
import { faHome, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.scss';
import Navbar from './navbar';


const Header = ()=>{
    return(
        <header>
            <div id = 'top-contact'>
                <div>
                    <span><FontAwesomeIcon icon = {faPhone} /> +233 44 455 6666</span>
                    <span><FontAwesomeIcon icon = {faEnvelope} /> the.team@outlook.com</span>
                    <span><FontAwesomeIcon icon = {faHome} /> Accra, Legon</span>
                    </div>
                <div id = 'right'>
                    {/* <Link to = '#' ><FontAwesomeIcon icon = {faFacebook} /> </Link>
                    <Link to = '#' ><FontAwesomeIcon icon = {faTwitter} /> </Link>
                    <Link to = '#' ><FontAwesomeIcon icon = {faInstagram} /> </Link> */}
                </div>
            </div>


           <Navbar />


            <section id = 'head-content' >
                <div class = 'wrapper'>
                    <div class = 'right-half'>
                        <h1>
                            <span class = '__header-text-one'>Introducing</span><br />
                            <span class = '__header-text-two'>Your best personal <br />Insurance Service</span><br /> 
                            <span class = '__header-text-three'>payCover</span>                
                        </h1>
                        <button class = '__header-button'>
                            Get Started
                        </button>
                    </div>

                    <div>
                        
                    </div>
                    
                
                </div>
            </section>
        </header>
        
    )
}

export default Header;