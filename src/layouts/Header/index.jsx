import React, { useState, useEffect } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import './header.css'

const Header = () => {

    return (
        <>
            <header>
                <h1 id='title'>SpeakerBox</h1>
                <li>
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='artists'>ARTISTS</NavLink>
                </li>
            </header>
            <Outlet />
        </>
    )
}

export default Header
