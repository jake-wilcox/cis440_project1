import axios from "axios"


const scoreToDb = async (game, oldScore, addedScore) => {
    console.log('updating score')
    const { data } = await axios.post('./updateScore', {  // Check for login route './login'
      game,
      oldScore,
      addedScore
    })
  }

  export default scoreToDb;