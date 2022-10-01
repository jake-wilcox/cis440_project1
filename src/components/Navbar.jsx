import React, { useState, useEffect } from 'react';
import { RiLoginBoxFill } from 'react-icons/ri';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { GiAbstract111 } from 'react-icons/gi';
import { HiHome } from 'react-icons/hi';
import { HiUserCircle } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi'; 
import { NavLink as Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// import { useStateContext } from '../contexts/ContextProvider';


const LoggedOutContainer = () => {

  <div className='flex gap-3 items-center justify-between'>
      <NavLink to='/register' className='border-2 border-mintgreen rounded-xl mx-2.5 flex text-gold h-16 items-center no-underline px-4 gap-2'>
          <BsFillPersonPlusFill />
          <span>Register</span>
      </NavLink>

      <NavLink to='/login' className='border-2 border-mintgreen rounded-xl mx-2.5 flex text-gold h-16 items-center no-underline px-4 gap-2'>
          <RiLoginBoxFill />
          <span>Login</span>
      </NavLink>
    </div>

}


const LoggedInContainer = ({ username, customFunc }) => {
  <div className='flex gap-3 items-center justify-between'>

    <HiUserCircle className='text-gold'/>

    <h1 className='text-gold text-2xl'>Welcome back, {username}!</h1>

    <h1 onClick={customFunc} className='text-mintgreen text-xl'>Logout</h1>

  </div>
}


const Navbar = () => {

  const logoutFunc = () => {

    localStorage.clear('user_info');

    window.location.reload();
  }

  var isLoggedIn = () => {

    if(localStorage.getItem('user_info') === 1 ){
      isLoggedIn = true;
    }
    else{
      isLoggedIn = false;
    }

  }
  

    // const location = useLocation();
    // const path = location.pathname;
    
    // const [ display, setDisplay ] = useState(
    //   path === '/login' || path === '/register' ? false : true
    // );

    
  return (
      <Nav className='bg-darkpurple flex flex-row border-b-2 border-gold w-screen'>
        <Link to='/'>
          <NavLogo className='gap-3'>
              <GiAbstract111 />
              <h1>Kool Gamez</h1>
          </NavLogo>
        </Link>


          <div className='flex gap-12 items-center'>

            <Link to='leaderboard' className='text-gold text-xl flex text-center'>
              <span>Leaderboards</span>
            </Link>

            <Link to='/' className='text-gold text-xl flex text-center'>
              <span>Home</span>
            </Link>
          
          </div>

        <div>
          {
            isLoggedIn === true ?
              <LoggedInContainer user={localStorage.getItem('username')} customFunc={logoutFunc}/> :
              <LoggedOutContainer /> 
          }
        </div>
          

      </Nav>

  )
}



export const NavLink = styled(Link)`
  color: #fff;
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