import React from 'react' 
import Header from './Main/header';
import Sections from './Main/Sections';
import './landing.scss';


const Landing = ()=>{
    return(
        <div class = "Container">
            <Header />
            <Sections />
        </div>
    )
}

export default Landing;