import React, {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import {
    Link,
    BrowserRouter,
    Routes,
    Route,
    Outlet
  } from 'react-router-dom';
import {Main} from '../components/Main';
import {Portfolio} from '../components/Portfolio';

const Menu = styled.nav`
    width: 100%;
    overflow: auto;
    box-shadow: 0 2px 2px -2px rgb(0 0 0 / 20%);
`;
const MenuDiv = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 800px;
    width: 80%;
    position: relative;
    text-align: left;
`;
const MenuLogo = styled.h2`
    &:hover {
        cursor: pointer;
        opacity: .6;
    }
`;
const MenuUl = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 1rem 0 0;
    text-align: center;
    bottom: 0;
    position: absolute;
    right: 0;
`;
const MenuLi = styled.li`
    color: #555;
    display: inline-block;
    padding: 0 2rem 0 0;
    &:hover {
        cursor: pointer;
        opacity: .6;
      }
`;

export const Header = () => {

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <BrowserRouter>
            <Menu>
                <MenuDiv>
                    <MenuLogo href="/">
                        eebbni
                    </MenuLogo>
                    <MenuUl>
                        <MenuLi><Link to="">About</Link></MenuLi>
                        <MenuLi><Link to="/portfolio">Portfolio</Link></MenuLi>
                    </MenuUl>
                </MenuDiv>
            </Menu>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/202112701-scy' element={<Main />} />
                <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
       
    );
}
