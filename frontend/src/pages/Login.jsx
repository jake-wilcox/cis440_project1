import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { GiAbstract111 as Logo} from 'react-icons/gi';

import axios from "axios";


const loggedInContext = React.createContext(false)

const Login = () => {
  const navigate = useNavigate;

  const toastOptions = { 
    positions: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }

  const [values, setValues] = useState({
    email: "",
    username: "",
  })

  useEffect(() => {
    if (localStorage.getItem("cis440_project1-User")){
      navigate("/");
    }
  });
  //end of login Func
  

  const handleSubmit = async (event) => {
    console.log('handeling submit')
    event.preventDefault();

    if(handleValidation()){
      const { password, email } = values;
      console.log(values)
      
      const { data } = await axios.post('./login', {  // Check for login route './login'
        email,
        password
      });

      if(data.status === false){
        toast.error(data.msg, toastOptions);
      }

      if(data.status === true){
        localStorage.setItem("cis440_project1-User")
      
      }
      
      console.log(data['logged_in']);
      if(data['logged_in'] === true){
        console.log('Logged in');
        
      }
      else{
        console.log('login Failed')
      }
     

      

    };

  }; 
  // end of handleSubmit 

  const handleValidation = () => {
    const {password, email} = values;
    if(email === ""){
      toast.error("Please enter your email.", toastOptions);
      return false;
    }
    else if(password===""){
      toast.error("Please enter your password.", toastOptions);
      return false;
    }
    return true;

  } //end of handleValidation 

  const handleChange = (event) => {
    setValues({...values, [event.target.name]:event.target.value});
  }

  return (
    <>
        <FormContainer>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <GiAbstract111 />
                    <h1>Kool Gamez</h1>
                </div>
                <input
                 type="email"
                  placeholder="Email"
                   name="email"
                    onChange={(e)=>handleChange(e)}
                />

                <input
                 type="password"
                  placeholder="Password"
                   name="password"
                    onChange={(e)=> handleChange(e)}
                />

                <button type="submit">Login</button> 
                <span>Don't have an account? <Link to="/register">Register Now</Link></span>
            </form>
        </FormContainer>

        <ToastContainer />
    </>
  )
}

export const FormContainer = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #151145;

.brand{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
}
    h1{
        color: #F3DFBF;
        text-transform: uppercase;
        font-size: 25px;
        text-align: center;
        margin-top: 10px;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #0e0c1f;
        border-radius: 2rem;
        padding: 3rem 5rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 24px 28px, rgba(0, 0, 0, 0.22) 0px 15px 30px;
    }
    input{
        background-color: #131124;
        padding: 1rem;
        border-radius: 0.4rem;
        color: white;
        width: 100%;
        font-size: 1rem;
        border: 0.1rem solid #40d6ae;
        outline: none;
    }
    button{
        background-color: #40d6ae;
        color: white;
        padding: 1rem 2rem;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        transition: 0.5s ease-in-out;
        &:hover{
            background-color: #01ae80;
        }
    }
    span{
        color: white;
        text-transform: uppercase;
        a{
            color: #15ffc1;
            text-decoration: none;
            font-weight: bold;
        }
    }

`;

const GiAbstract111 = styled(Logo)`
      margin: auto;
      color: #F3DFBF;
      height: 90px;
      width: 90px;
      
`

// const LoginLogo = styled.nav`
  
// `


export default Login