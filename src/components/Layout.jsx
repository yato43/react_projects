import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
const setActive = ({isActive}) => isActive ? 'active-link' : ''

function Layout() {
    return (
        <>
            <header>
                <NavLink to="/" className={setActive}>Home</NavLink>
                <NavLink to="/counter" className={setActive}>Counter</NavLink>
                <NavLink to="temperature" className={setActive}>Temperature</NavLink>
                <NavLink to="search" className={setActive}>Search</NavLink>
            </header>

            <Outlet/>

            <footer>2023</footer>
        </>
    );
}

export {Layout};