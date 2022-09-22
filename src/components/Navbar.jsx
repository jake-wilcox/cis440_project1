import React, { useEffect } from 'react'

import { useStateContext } from '../contexts/ContextProvider';


const NavButton = ({ title, customFunc, color, dotColor }) => {
    <button type='button' onClick={customFunc} style={{color}} className=''>

        <span style={{background: dotColor}} className="absolute inline-flex rounded-lg h-2 w-2 right-2 top-2"/>

        {title}

    </button>
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
        <NavButton title="Login" />
    </div>
  )
}

export default Navbar