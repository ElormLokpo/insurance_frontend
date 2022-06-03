import React, { useState } from 'react';
import NavCl from './navCl';
import "./clientStyle.scss";
import HealthInsurance from './healthInsurance';
import HomeInsurance from './homeInsurance';
import MotorInsurance from './mortorInsurance';
import TravelInsurance from './travelInsurance';
import LifeInsurance from './lifeInsurance';
import Policies from './policies';


const ClMain = ()=> {
        const[navId, setNavId] = useState(1);

        function nvIdHandler(n){
            setNavId(n);
        }

        let renderContent = <HomeInsurance />
        switch (navId){
            case 1:
                renderContent = (<Policies />);
                break;

            case 2:
                renderContent = (<HomeInsurance />);
                break;
            
            case 4: 
                renderContent = (<HealthInsurance />);
                break;
            case 5:
                renderContent = (<LifeInsurance />);
                break;
            case 6: 
                renderContent = (<MotorInsurance />);
                break;

            default:
                renderContent = (<div>Signed Out</div>)

        }
            return (
                <div id = "main-dash">
                        <div id = 'main-nav-cl'>
                            <NavCl nvId = {nvIdHandler}/>
                        </div>
                        <div id = 'cl-main-content'>
                            <div></div>
                            {renderContent}
                            
                        </div>
                    </div>
              )     
               
    }

export default ClMain;