import React from 'react';





const LeaderboardChart = ({ gameTitle, userData }) => {

  const gameScoreStr = gameTitle.toLowerCase().replace(/\s/g, '')+'Score'
  console.log(gameScoreStr)

  console.log('mapping')
  const listItems = userData.map((user) => 
    <li>Username: {user['username']} Score:{user[gameScoreStr]} </li>
  );


  return (
    
    <>
  
        <div className='flex'>

            <span className='bg-darkpurple text-3xl text-gold border-2 border-gold rounded-2xl px-20 py-5'> {gameTitle} </span>

            
        </div>
        <div>
            <ul>{listItems}</ul> 
        </div>
    </>
  )
}

export default LeaderboardChart