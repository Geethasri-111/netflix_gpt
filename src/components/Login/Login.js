import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import './Login.css';
import { validData } from '../../utils/Validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { auth } from '../../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';
const Login = () => {
    const [signedIn,setSignedIn]= useState(true);
    const [errMsg,setErrMsg] = useState(null);
    const dispatch =useDispatch();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef('');

    const navigate = useNavigate();

    const toggleSignIn = ()=>{
        setSignedIn(!signedIn);
    }
    const handleFormSubmit = ()=>{
        //validation
        const ErrorMsg = validData(emailRef.current.value,passwordRef.current.value);
       console.log(ErrorMsg);
        setErrMsg(ErrorMsg);
       if(ErrorMsg) return;
        //create new user(sign in & sign up)
        if(signedIn){
            //signin logic
            signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;                   
                     navigate('/browse');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode+':'+errorMessage);
                });
        }else{
            //sign up logic
            createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: nameRef.current.value,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    const {uid,email,displayName} = auth.currentUser;
                    dispatch(addUser({
                        uid:uid,
                        email:email,
                        name:displayName
                    }
                    ))
                    
                    navigate('/browse');
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  }); 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorCode+':'+errorMessage);
            });

        }
       
    }
  return (
    <>
      <Header/>
      <div onSubmit={(e)=>e.preventDefault()} className='flex flex-col items-center relative bg-movieimage'>           
            <form className='w-3/12 relative bg-black p-4 my-36 mx-auto bg-opacity-90 mb-2 block text-white'>
                        <h1 className='font-bold text-2xl py-4'>{signedIn ? 'Sign In' : 'Sign Up'}</h1>
                        {!signedIn && (
                        <input type="text" name="FullName" placeholder='FullName' 
                        ref={nameRef}    className='p-2 my-3 w-full bg-gray-800'/>
                    ) }
                        <input type="email" name="email" placeholder='Email address' 
                        ref={emailRef}
                            className='p-2 my-3 w-full bg-gray-800 email'/>
                    
                        <input type="password" name="password" placeholder='password'
                        ref={passwordRef}
                            className='p-2 my-3 w-full  bg-gray-800 pass'/>
                        <p className='errorMsg text-red-700 font-bold'>{errMsg}</p>
                        <button className='p-4 my-3 bg-red-700 w-full text-white'
                        onClick={handleFormSubmit}>
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