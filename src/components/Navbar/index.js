import React from 'react';
import moduleName from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll';
import {Nav,NavbarContainer, NavLogo, ToggleIcon, NavItem, NavLink, NavMenu, NavBtn, NavBtnLink, } from './NavbarElements';
import Exercises from '../../pages/Exercises';
import Home from '../../pages';


const Navbar = ( {toggle} ) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/chinese-website" onClick={toggleHome}>
                        Axian</NavLogo>
                <ToggleIcon onClick={toggle}>
                    <FaBars />
                </ToggleIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to="/chinese-website">Home</NavLink>
                        <NavLink to="/exercises">Exercises</NavLink>
                        <NavLink to="about">About</NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="support">Support Me</NavBtnLink>
                </NavBtn>
                </NavbarContainer>
            </Nav> 
        </>
    )
}

export default Navbar
