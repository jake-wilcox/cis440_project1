import React, { useState, useEffect } from 'react';
import { RiLoginBoxFill } from 'react-icons/ri';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { GiAbstract111 } from 'react-icons/gi';
import { HiHome } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { NavLink as Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// import { useStateContext } from '../contexts/ContextProvider';



const Navbar = () => {

    // const location = useLocation();
    // const path = location.pathname;
    
    // const [ display, setDisplay ] = useState(
    //   path === '/login' || path === '/register' ? false : true
    // );


    // const { setScreenSize, setIsClicked, isClicked, handleClick, screenSize} = useStateContext();

    // useEffect(() => {
    //     const handleResize = () => setScreenSize(window.innerWidth);

    //     window.addEventListener('resize', handleResize);

    //     handleResize();

    //     return () => window.removeEventListener('resize', handleResize);
    // }, [setScreenSize]);

    
  return (
      <Nav className='bg-darkpurple flex border-b-2 border-gold w-screen'>
        <Link to='/'>
          <NavLogo className='gap-3'>
              <GiAbstract111 />
              <h1>Kool Gamez</h1>
          </NavLogo>
        </Link>


          <LinkContainer>
            {/* <HiHome className='text-gold' /> */}
          
          </LinkContainer>
          

          <BtnContainer className='flex gap-3 items-center'>
              <NavLink to='/register'>
                  <BsFillPersonPlusFill />
                  <span>Register</span>
              </NavLink>

              <NavLink to='/login'>
                  <RiLoginBoxFill />
                  <span>Login</span>
              </NavLink>
          </BtnContainer>

      </Nav>

  )
}


export const BtnContainer = styled.nav`
    display: flex;
    justify-content: space-between;
`

export const LinkContainer = styled.nav`
    
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  border: solid 2px #40d6ae;
  border-radius: 15px;
  margin: 0 10px;
  height: 60px;
  gap: 0.5rem;
  cursor: pointer;

  transition: 0.3s ease-in-out;
        &:hover{
            background-color: #40d6ae;
            color: #0e0c1f;
        }
`;

export const Nav = styled.nav`
  height: 90px;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1500px) / 2);
  z-index: 10;
`;

export const NavLogo = styled.nav`
    color: #F3DFBF;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;
    margin: 0 10px;
    font-size: 40px;
    height: 100%;
    cursor: pointer;
`

export default Navbar