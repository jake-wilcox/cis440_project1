import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import Login from '../pages/Login';
import Register from '../pages/Register';


const NavButton = ({ title, customFunc, color, dotColor }) => {
    return(

    <button type='button' onClick={customFunc} style={{color}} className=''>

        <span style={{background: dotColor}} className="absolute inline-flex rounded-lg h-2 w-2 right-2 top-2"/>

        {title}

    </button>
    )
}

const popupLogin = () => {
    console.log('inside login popup function')
    return(
        <div>
            <p>this is a popup</p>
        </div>
        
    )
}



const Navbar = () => {
    const { setScreenSize, setIsClicked, isClicked, handleClick, screenSize} = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [setScreenSize]);

    
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
        <NavButton title="Login" customFunc={() => popupLogin()}/>
        <NavButton title="Create Account"/>
    </div>
  )
}

export default Navbar