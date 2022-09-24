import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GiAbstract111 as Logo } from 'react-icons/gi';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';


const Register = () => {
    const navigate = useNavigate();

        const toastOptions = { 
            position: "bottom-right",
            autoClose: 8000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark"
        }

        const [values, setValues] = useState({
          username: "",
          email: "",
          password: "",
          confirmedPass: ""
        })

        useEffect(() => {
            if(localStorage.getItem('cis440_project1-User')){
                navigate("/");
            }
        });

        const handleSubmit = async(event) => {
          event.preventDefault();

        if(handleValidation()){
            const { password, email, username } = values;
            const { data } = await axios.post("/register", {
                username,
                email,
                password
                });

          if(data.status === false){
            toast.error(data.msg, toastOptions);
            }

          if(data.status === true){
            localStorage.setItem('chat-Application-user', JSON.stringify(data.user));

            navigate("/");
            }
         }
      }

      const handleValidation = () => {
        const {password, confirmedPass, username, email} = values;
        if(password !== confirmedPass){
            toast.error("Passwords must match.", toastOptions);
            return false;
        }
        else if(password ===""){
            toast.error("Password is required.", toastOptions);
            return false;
        }
        else if(username.length < 3){
            toast.error("Username should be greater than 3 characters long.", toastOptions);
            return false;
        }
        else if(password.length < 8){
            toast.error("Password should be at least 8 characters long.", toastOptions);
            return false;
        }
        else if(email===""){
            toast.error("Email is required.", toastOptions);
            return false;
        }
        return true;
      } // end of handleValidation 

      const handleChange = (event) => {
          setValues({...values,[event.target.name]:event.target.value});
      }
        
  return (
    <>
        <FormContainer>
            
            <form action="" onSubmit={(event) => handleSubmit(event)}>
                <div className="brand">
                    <GiAbstract111/>
                    <h1 className='text-3xl'>Kool Gamez</h1>
                </div>
                <input
                 type="text"
                  placeholder="Username"
                   name="username"
                    onChange={(e)=> handleChange(e)}
                />

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

                <input
                 type="password"
                  placeholder="Confirm Password"
                   name="confirmedPass"
                    onChange={(e)=> handleChange(e)}
                />

                <button type="submit">Create User</button> 
                <span>Already have an account? <Link to="/login">Login</Link></span>
            </form>
        </FormContainer>

        <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
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
            color: #F3DFBF;;
            text-transform: uppercase;
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

export default Register