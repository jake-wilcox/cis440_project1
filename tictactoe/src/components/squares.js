import React from 'react';
import './styles.css';

export const Squares = ({value, onClick}) => {
    const style = value === "X" ? "box x" : "box o";

    return (
        <button className = {style} onClick = {onClick}>{value}</button>
    );
   
};

export default Squares; 
