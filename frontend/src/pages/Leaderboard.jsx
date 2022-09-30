import React from 'react'
import { Navbar, Footer } from '../components';
import { IoMdTrophy } from 'react-icons/io';
import { LeaderboardChart } from '../components';

const Leaderboard = () => {

  return (
    <div>
      

      <div className='flex flex-col items-center bg-darkblue h-screen'>

        <Navbar />

        <div className='pb-6 pt-10'>
          <IoMdTrophy className='text-gold w-12 h-12 m-auto my-4'/>

          <h1 className='text-gold text-4xl text-center font-bold'>Leaderboards</h1>
          <h2 className='text-gold '>See below the top three scores for each game!</h2>

        </div>


        <div className='flex my-8 space-x-72'>

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