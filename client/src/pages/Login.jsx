import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import { Navbar } from '../components';
import { GiAbstract111 as Logo} from 'react-icons/gi';
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const toastOptions = { 
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }

  const [values, setValues] = useState({
    email: "",
    password: "",
  })


  

  const handleSubmit = async (event) => {
    console.log('handeling submit')
    event.preventDefault();

    if(handleValidation()){
      const { password, email } = values;
      console.log(values)
      
      // Error handeling copied from axios docs except for toasts
      const { data } = await axios.post('./login', {  // Check for login route './login'
        email,
        password
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          toast.error("Somethings wrong on our end...\ntry again later", toastOptions)
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          toast.error("Somethings wrong on our end...\ntry again later", toastOptions)
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });

    

      console.log(data)
      if(data['status'] === 0){
        console.log('logged in')
        localStorage.setItem("user_info", JSON.stringify(data))
        navigate("/")
      }else 
      if(data['status'] === 2){
        toast.error("Email not found, try again or create an account", toastOptions)
      }else
      if(data['status'] === 3){
        toast.error("Incorrect password", toastOptions)
      }else{
        toast.error("Somethings wrong on our end...\ntry again later", toastOptions)
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

  }; //end of handleValidation 

  const handleChange = (event) => {
    setValues({...values, [event.target.name]:event.target.value});
  }

  return (
    <>

        <FormContainer className='flex flex-col justify-center items-center gap-4 bg-darkblue w-screen h-screen'>

            <form onSubmit={(event) => handleSubmit(event)} className='flex flex-col gap-8 py-12 px-20 bg-darkpurple border-1 border-gold'>
                <div>
                    <GiAbstract111 />
                    <h1 className='text-3xl mt-3 text-center uppercase text-gold'>Kool Gamez</h1>
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

                <button type="submit" className='px-8 py-4 border-none font-bold cursor-pointer rounded-md font-base uppercase bg-mintgreen text-darkpurple'>Login</button> 
                <span className='text-white uppercase'>Don't have an account? <Link to="/register" className='font-bold'>Register Now</Link></span>
            </form>
        </FormContainer>

        <ToastContainer />
    </>
  )
}

export const FormContainer = styled.div`
    form{
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 24px 28px, rgba(0, 0, 0, 0.22) 0px 15px 30px;
    }
    input{
        background-color: #131124;
        padding: 1rem;
        border-radius: 0.4rem;
        color: #0e0c1f;
        width: 100%;
        font-size: 1rem;
        border: 0.1rem solid #40d6ae;
        outline: none;
    }
    button{
        transition: 0.5s ease-in-out;
        &:hover{
            background-color: #01ae80;
        }
    }
    span{
        a{
            color: #15ffc1;
            text-decoration: none;
        }
    }

`;

const GiAbstract111 = styled(Logo)`
      margin: auto;
      color: #F3DFBF;
      height: 90px;
      width: 90px;
      
`



export default Login