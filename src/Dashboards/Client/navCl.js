import React from 'react';
import {FiUserPlus} from 'react-icons/fi';
import {BiCar, BiExit} from 'react-icons/bi';
import {BsHouseDoor} from 'react-icons/bs';
import {FaPlaneDeparture, FaWpforms} from 'react-icons/fa';
import {GiLifeTap} from 'react-icons/gi';
import {MdHealthAndSafety} from 'react-icons/md';



const navCl = (props)=>{

  const navIdVal = (n)=>{
    props.nvId(n);
    
  }

  return (
    <nav class = 'shadow-lg nav-cl'>
        <div class = 'nav-item' onClick = {()=>navIdVal(1)}><FaWpforms /> Add Policies</div>
        <div class = 'nav-item' onClick = {()=>navIdVal(2)}><BsHouseDoor /> Home Insurance</div>
        <div class = 'nav-item' onClick = {()=>navIdVal(4)}><GiLifeTap /> Health Insurance</div>
        <div class = 'nav-item' onClick = {()=>navIdVal(5)}><MdHealthAndSafety /> Life Insurance</div>
        <div class = 'nav-item' onClick = {()=>navIdVal(6)}><BiCar /> Motor Insurance</div>
        <div class = 'nav-item' onClick = {()=>navIdVal(7)}><BiExit /> Sign Out</div> 
       
        
    </nav>
  )
}

export default navCl;