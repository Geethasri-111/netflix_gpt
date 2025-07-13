import React, { useState } from 'react'
import Header from '../Header/Header'
import './Login.css';

const Login = () => {
    const [signedIn,setSignedIn]= useState(true);
    const toggleSignIn = ()=>{
        setSignedIn(!signedIn);
    }
  return (
    <>
      <Header/>
      <div className='flex flex-col items-center relative bg-movieimage'>           
            <form className='w-3/12 relative bg-black p-4 my-36 mx-auto bg-opacity-90 mb-2 block text-white'>
            <h1 className='font-bold text-2xl py-4'>{signedIn ? 'Sign In' : 'Sign Up'}</h1>
            {!signedIn && (
            <input type="text" name="FullName" placeholder='FullName' 
                className='p-2 my-3 w-full bg-gray-800'/>
           ) }
            <input type="email" name="email" placeholder='Email addess' 
                className='p-2 my-3 w-full bg-gray-800'/>
           
            <input type="password" name="password" placeholder='password'
                className='p-2 my-3 w-full  bg-gray-800'/>
            <button className='p-4 my-3 bg-red-700 w-full text-white'>
                {signedIn ? 'Sign In' : 'Sign Up'}</button>
            <p className='py-6 cursor-pointer' onClick={toggleSignIn}>
            {signedIn ? 'New to Netflix?Sign up now.' : 'Existing Customer,Please Sign In'}
            </p>

        </form>
        </div>
    </>
  )
}

export default Login