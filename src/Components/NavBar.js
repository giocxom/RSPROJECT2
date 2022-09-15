import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function NavBar(){
    const [toggleMenu,setToggleMenu]=useState(false);
    const [screenWidth,setscreenWidth]=useState(window.innerWidth);
    

    const toggleNav = ()=>{
        setToggleMenu(!toggleMenu);
    }
    useEffect(()=>{
         const changeWidth=()=>{
            setscreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
},[])
    return(
        
        <div>
            <nav className="NAVBAR">
                {(toggleMenu || screenWidth > 1000) && (
                <ul className="listBAR">
                <li className="itemsBAR">HOme</li>
                <li className="itemsBAR">HOme</li>
                <li className="itemsBAR">HOme</li>
                <li className="itemsBAR">HOme</li>
              </ul>
              )}
              <button onClick={toggleNav} className="BTN">BTN</button>
            </nav></div>
            
    )
}