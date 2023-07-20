import React from 'react'
import './Content.css'
import Innner from './Innner'

function Nav(){
    return(
        <>
        <nav>
        <img src='src\assets\globe.png' id='icon'></img>
        <p id='nav-head'>my travel journal.</p>
        </nav>
        <Innner/>
        </>
        
    )
}
export default Nav