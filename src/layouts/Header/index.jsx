import React, { useState, useEffect } from 'react'
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {

    return (
        <>
            <header>
                <h1 id='title'>SpeakerBox</h1>
                <li>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='artists'>Artists</NavLink>
                </li>
            </header>
            <Outlet />
        </>
    )
}

export default Header
