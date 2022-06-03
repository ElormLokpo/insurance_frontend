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
               
            </div>
        </div>
    )
}

export default AgMain;