import React, { useState } from 'react' 
import Mob from '../../../Images/mob.jpg';
import car from '../../../Images/car.jpg';
import home from '../../../Images/home.jpg';
import life from '../../../Images/life.jpg';
import usr from '../../../Images/user.png';
import {
    faFacebook,
    faTwitter,
    faInstagram,

  } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {Link, NavLink} from 'react-router-dom';
  import './section.scss';

const Sections = ()=>{

    const [card, setCard] = useState([
        {title:'Home Insurance', content: 'Whatever happens to your home. From fires to theft we have you covered. We also cover rent', img: home},
        {title:'Motor Insurance', content: 'Accidents happen. We offer Third Party, theft and fire insurance for your vehcile.', img : car},
        {title:'Health Insurance', content: 'If you pass away or have health issues. Health insurance would handle that', img : life},
       
    ]);

  

    let contentCard = ( 
            <h2>
                <span class = '__head'>Our Insurance Policies</span><br />
                <span class = '__body'>Read through all available policies</span>
            </h2>
      
      )
    let contentOne = (
        card.map((carditem)=>{
            return <div class = 'sect-one-item'>
                <div class = 'sect-img' style={{backgroundImage:`url(${carditem.img})`}}></div>
                <div class = 'sect-text'>
                   
                    <p>{carditem.content}<br />
                        <button class = '__card-button'>{carditem.title}</button>
                    </p>
                    
                </div>
            </div>
        })
    )

  

    let contentTwo = (
        <div id = 'sect-two'>
            <div class = 'sect-two-wrapper'>
              <div id = 'sect-inner'>
                
                <div class = 'left'>
                   
                </div>
                <div class = 'right'>
                    <h3>To get started</h3>
                    <ul>
                        <li>1. Click <span> <Link to = "signup">Get Started</Link></span> to sign up.</li>
                        <li>2. Discuss insurance policies with an <Link to = "agentContact">agent </Link> if you have any questions.</li> 
                        <li>4. <span><Link to ='signin'>Login</Link></span> with the credentials.</li>
                        <li>5. Your dashboard would be loaded</li>
                        <li>6. Done! </li>
                    </ul>
                </div>
              </div>
            </div>
            
        </div>
    )

    let contentThree = (
        <div id = 'sect-three'>
             <div class = 'sect-three-wrapper'>
              <div id = 'sect-inner'>
                
                <div class = 'left'>
                    <h3>About Us</h3>
                    <p>We are an Insurance company and we provide convenient, professional 
                        insurance services to over thousands of people and companies alike. 
                        Read all our policies on home, mortor and life insurance.  </p>
                </div>
                <div class = 'right'>
                   
                </div>
              </div>
            </div>
        </div>
    )

    let contentFour = (
        <div id = 'sect-four'>    
            <div>
                <img src = {Mob} height = "500px" width = "500px" />
            </div>   
            
            <div class = '__section-text'>
                <h3>Our mobile application is now available!</h3>
                <h4>payCover</h4>
                <p>
                    Carry your insurance plan wherever you go. 
                    The mobile application allows you buy  all your insurance policies conviniently. 
                    Download our mobile app from any of the stores and have payCover in 
                    the palm of your hands
                </p>
            </div>
        </div>
    )

    let contentFive = (
            <footer id = 'sect-five'>
                <div class="row">
                    <div class="logo-div">
                      
                    </div>
                    <div class="col">
                        <h5>Office</h5>
                        <p>CSCD Road</p>
                        <p>Legon, Accra</p>
                        <p> P.o.Box LG 25 </p>
                        <p class="email-id"> paycover@gmail.com </p>
                        
            
                    </div>
                    <div class="col">
                        <h5>Links</h5>
                       
                           <p><a href="#">Home</a></p>
                           <p><a href="#">Policies</a></p>
                           <p><a href="#sect-two">About Us</a></p>
                           <p><a href="">Mobile</a></p>
                           <p><a href="">Contacts</a></p>
                       
                    </div>
                    <div class="col">
                        <h5>Newsletter   </h5>
                        <p>+233 542172108</p>
                        <div>
                            {/* <Link to = '#' ><FontAwesomeIcon class = 'fa-brands' icon = {faFacebook} /> </Link>
                            <Link to = '#' ><FontAwesomeIcon class = 'fa-brands' icon = {faTwitter} /> </Link>
                            <Link to = '#' ><FontAwesomeIcon class = 'fa-brands' icon = {faInstagram} /> </Link> */}
                            
                        </div>
                    </div>
            
            
                </div>
                <hr />
                <p class="copyright">PayCover © 2022 - All Rights Reserved </p>
            
            </footer>
)
    return(
      <>
        <section id = 'sect-one-card'>
            {contentCard}
        </section>

        
        
        <section id = 'sect-one'>
            {contentOne}
        </section>

       

        <section>
            {contentTwo}
        </section>
      
        <section>
            {contentThree}
        </section>

        <section>
            {contentFour}
        </section>

        <section>
            {contentFive}
        </section>
        
      </>
    )
}

export default Sections;