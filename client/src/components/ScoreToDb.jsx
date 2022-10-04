import axios from "axios"


const scoreToDb = async (game, oldScore, addedScore, user) => {
    console.log('inside scoreToDb')
    const { data } = await axios.post('./updateScore', {  // Check for login route './login'
      game,
      oldScore,
      addedScore,
      user
    })
  }

  export default scoreToDb;