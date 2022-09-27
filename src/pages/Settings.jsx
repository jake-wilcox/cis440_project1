import React from 'react';
import { Navbar } from '../components';
import { FaUserCircle as Icon } from 'react-icons/fa';
import styled from 'styled-components';
// import styled from 'styled-components';

const Settings = () => {
  
  return (
    <>
      <Navbar />

      <FormContainer className='flex flex-col justify-center items-center gap-4 bg-darkblue w-screen h-screen'>
        <form onSubmit={(event) => {}} className='flex flex-col gap-8 py-12 px-20 bg-darkpurple border-1 border-gold'>
          <div>
            <FaUserCircle />
            <h1 className='text-3xl mt-3 text-center uppercase text-gold'>Username</h1>
          </div>

          <input
                 type="password"
                  placeholder="Current Password"
                   name="password"
                    onChange={(e)=>{}}
                />
          
          <input
                 type="password"
                  placeholder="New Password"
                   name="password"
                    onChange={(e)=>{}}
                />

        </form>

      </FormContainer>
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

const FaUserCircle = styled(Icon)`
      margin: auto;
      color: #F3DFBF;
      height: 90px;
      width: 90px;
      
`

export default Settings