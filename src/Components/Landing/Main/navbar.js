import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.scss' ;

function navbar() {
  return (
    <nav>
        <div class = 'wrapper'>
            <div id = "logo">
                pay<span class = 'sec-half'>Cover</span>
            </div>
        
        <div class = "first-list">
                <ul>
                    <li><a href = "#" class = '__nav-link'>Home</a></li>
                    <li><a href = "#sect-one" class = '__nav-link'>Policies</a></li>
                    <li><a href = "#sect-three" class = '__nav-link'>About Us </a></li>
                    <li><a href = "#sect-four" class = '__nav-link'>Mobile</a></li>
                </ul>
        </div>

        <div class = 'first-list'>
            <ul>
                <li><NavLink to = 'login' class = '__nav-link'>Login</NavLink></li>
                <li><a href = "#" class = '__navlink-button'>Contact Agent</a></li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default navbar;