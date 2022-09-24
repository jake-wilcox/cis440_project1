import React from 'react';
import { RiLoginBoxFill } from 'react-icons/ri';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { GiAbstract111 } from 'react-icons/gi';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';



const Navbar = () => {
    // const { setScreenSize, setIsClicked, isClicked, handleClick, screenSize} = useStateContext();

    // useEffect(() => {
    //     const handleResize = () => setScreenSize(window.innerWidth);

    //     window.addEventListener('resize', handleResize);

    //     handleResize();

    //     return () => window.removeEventListener('resize', handleResize);
    // }, [setScreenSize]);

    
  return (
    <Nav>
        <NavLogo to='/'>
            <GiAbstract111 />
            <h1>Kool Gamez</h1>
        </NavLogo>
        

        <div className='flex'>
            <NavLink to='/register' >
                <BsFillPersonPlusFill />
                <span>Register</span>
            </NavLink>

            <NavLink to='/login'>
                <RiLoginBoxFill />
                <span>Login</span>
            </NavLink>

        </div>

        
        {/* <div className='flex'>
            <NavButton title="Login" customFunc={() => handleClick('login')} icon={GrLogin} />

            <NavButton title="Register" customFunc={() => handleClick('register')} icon={BsFillPersonPlusFill} />

        </div> */}

        

    </Nav>
  )
}


const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  border: solid 1px #40d6ae;
  border-radius: 10px;
  margin: 0 10px;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #42E2B8;
  }
`;

export const Nav = styled.nav`
  background: #0e0c1f;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1500px) / 2);
  z-index: 10;
`;



const NavLogo = styled.nav`
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