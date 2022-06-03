import React from 'react'
import imc from '../../../Images/leftss.jpg';
import './contactAgent.scss';

function contactAgent() {
  return (
    <div class = 'f-cont-s'>
        <div class = "left-s">
            <img src = {imc} />
            
        </div>
        <div class = 'right-s'>
            <div class = 'form-container-s card shadow-lg'> 
              <h3>
                  <span class = "first">Contact Agent </span><br />
                  <span class = "second">An agent would provide you with credentials and walk you through the entire program.</span><br /><br />
                  <span class = "third">+233 44 2747 <br /> agentsmith@gmail.com</span>
              </h3>
            </div>
        </div>
       
      </div>
  )
}

export default contactAgent;