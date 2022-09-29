import React from 'react'
import { Navbar, Footer } from '../components';
import { IoMdTrophy } from 'react-icons/io';
import { LeaderboardChart } from '../components';

const Leaderboard = () => {

  return (
    <div>
      <Navbar />

      <div className='flex flex-col items-center bg-darkblue pb-64'>
        <div className='pb-6 pt-10'>
          <IoMdTrophy className='text-gold w-12 h-12 m-auto my-4'/>

          <h1 className='text-gold text-4xl text-center font-bold'>Leaderboards</h1>

        </div>


        <div className='flex my-8 space-x-60'>

          <LeaderboardChart gameTitle='Hangman' />

          <LeaderboardChart gameTitle='Snake' />

          <LeaderboardChart gameTitle='Tic Tac Toe' />
    
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Leaderboard