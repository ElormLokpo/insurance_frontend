import React from 'react';
import "./adminStyle.scss";
import NavAd from './navAd';
import FormAg from './formAg';

const AdMain = (props)=>{
    return(
        <div id = "main-dash">
            <div id = 'main-nav'>
                <NavAd />
            </div>
            <div id = 'main-content'>
                <div>
                    <h3>Add Agent</h3>
                    <FormAg />
                </div>
                <div id = 'client-number'>
                    <h5>Agent</h5>
                    <div class = 'shadow-lg client-box'>
                        <span>No. of Active Agents</span>
                        <span class = 'client-no'>0</span>
                       
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default AdMain;