import React, { useState, useEffect } from 'react';
import { RiLoginBoxFill } from 'react-icons/ri';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { GiAbstract111 } from 'react-icons/gi';
import { HiUserCircle } from 'react-icons/hi';
import { NavLink as Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import isLoggedIn from './isLoggedIn';

// import { useStateContext } from '../contexts/ContextProvider';


const LoggedOutContainer = () => {
  return(
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
  )

}


const LoggedInContainer = ({ username, customFunc }) => {
  return(
    <div className='flex gap-3 items-center justify-between'>
      <HiUserCircle className='text-gold'/>

      <h1 className='text-gold text-2xl'>Welcome back, {username}!</h1>

      <button onClick={logoutFunc} className='text-mintgreen text-xl'>Logout</button>
  </div>
  )

}

const logoutFunc = () => {
  localStorage.clear('user_info');

  window.location.reload();
}


const Navbar = () => {


  var checkLogIn = () => {
    if(isLoggedIn()){
      console.log('logged in')
      const user = JSON.parse(localStorage.getItem('user_info'))
      console.log(user['username'])
      return(<LoggedInContainer username={user['username']}/>)
    }
    else{
      console.log('not logged in')
      return(<LoggedOutContainer />)
    }
  }
  
  // const path = location.pathname;
  // const location = useLocation();
    
  // path === '/login' || path === '/register' ? false : true
  // const [ display, setDisplay ] = useState(
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
          
          {checkLogIn()}
          
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