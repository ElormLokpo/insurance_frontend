import React from 'react';
import {FiUserPlus} from 'react-icons/fi';
import {BiExit} from 'react-icons/bi';

const navAd = ()=>{
  return (
    <nav class = 'shadow-lg nav-ag'>
        <div class = 'nav-item'><FiUserPlus /> Add Agent</div>
        <div class = 'nav-item'><BiExit /> Sign Out</div>
        
    </nav>
  )
}

export default navAd;