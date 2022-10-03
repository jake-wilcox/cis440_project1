var isLoggedIn = () => {
    if(localStorage.length === 1 ){
      console.log('logged in')
      const user = JSON.parse(localStorage.getItem('user_info'))
      console.log(user['username'])
      return(true)
    }
    else{
      console.log('not logged in')
      return(false)
    }
  }

  export default isLoggedIn