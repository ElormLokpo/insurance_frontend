import React from 'react';
import "./agentStyle.scss";
import NavAg from './navAg';
import FormCl from './formCl';

const AgMain = (props)=>{
    return(
        <div id = "main-dash">
            <div id = 'main-nav'>
                <NavAg />
            </div>
            <div id = 'main-content'>
                <div>
                    <h3>Add Client</h3>
                    <FormCl />
                </div>
                <div id = 'client-number'>
                    <h5>Clients</h5>
                    <div class = 'shadow-lg client-box'>
                        <span>No. of Active Clients</span>
                        <span class = 'client-no'>0</span>
                       
                    </div>

                    <div class = 'shadow-lg client-box'>
                     
                        
                        <span>No. of Innactive Clients</span>
                        <span class = 'client-no'>0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgMain;