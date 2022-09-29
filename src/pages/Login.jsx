import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { GiAbstract111 as Logo} from 'react-icons/gi';

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
    username: "",
  })

  useEffect(() => {
    if (localStorage.getItem("cis440_project1-User")){
      navigate("/");
    }
  });
  //end of login Func
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(handleValidation()){
      const { password, email } = values;
      const { data } = await axios.post('./login', {  // Check for login route './login'
        email, 
        password,
      });

      if(data.status === false){
        toast.error(data.msg, toastOptions);
      }

      if(data.status === true){
        localStorage.setItem("cis440_project1-User", JSON.stringify(data.user));
      

      navigate("/");
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