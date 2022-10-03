import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
    username: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked] : true});
    }
    
    return (
        <StateContext.Provider
            value={{
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
            }}>
                {children}
            </StateContext.Provider>
    )
    
}

// snake callback
export function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }


export const isLoggedIn = () => {

  if(localStorage.length === 1 ){
    const user = JSON.parse(localStorage.getItem('user_info'))

    console.log('logged in')
    console.log(user['username'])

    return(true)
  }
  else{
    console.log('not logged in')

    return(false)
  }
}

export const useStateContext = () => useContext(StateContext);

