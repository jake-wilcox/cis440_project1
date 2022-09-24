import React from 'react'
import { NavLink } from 'react-router-dom';

const GameTile = ({title, image, route}) => {
  return (
    <NavLink to={route} className='text-center mx-28 ' class={title} >
        <img src={image} name={title} alt={title} className='w-72 h-72 mb-7 border-1 rounded-xl border-indigo-800 shadow-xl' />
        <label className='text-3xl' for={title}>{title}</label>
    </NavLink>
  )
}

export default GameTile