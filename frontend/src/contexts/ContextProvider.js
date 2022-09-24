import React, { createContext, useContext, useState } from 'react';

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


export const useStateContext = () => useContext(StateContext);