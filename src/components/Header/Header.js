import React, { useEffect, useState} from 'react'
import { signOut ,onAuthStateChanged} from 'firebase/auth';
import { auth } from '../../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser,removeUser } from '../../utils/userSlice';
import { SUPPORTED_LANG, logo_url, user_avatar } from '../../utils/constants';
import { toggleGptSearchView } from '../../utils/searchSlice';
import {changeLanguage} from '../../utils/configSlice';


const Header = () => {
  const [showSignout,setShowSignout] =useState(false);
  const user = useSelector(store => store.user);
  const showsearch =useSelector(store => store.search.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userOption =()=> {
      setShowSignout(!showSignout);
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error');
    });
  }
  //header loads multiple times & calls eventlisteners tomany times so unsubscribe 
  //need to return a function from component to unmount
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {       
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,name:displayName}));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    // called to unsubscribe when component unmounts
    return ()=>unsubscribe();
  },[])

  const handleSearch =() =>{
      dispatch(toggleGptSearchView());
  }

  const handleLangChange =(e) => {
      const valueTarget = e.target.value;
      dispatch(changeLanguage(valueTarget))
  }
 
  return (
    <>
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between z-10'>
       
      <img src={logo_url}
      alt="logo" className='w-32'/>
      <div className='flex'>
      {user && (
        <>
        {showsearch && (
          <select onChange={handleLangChange}>
          {SUPPORTED_LANG.map(lang =>  <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
         
        </select>
        )}
        <button className='px-3 py-1 mx-2 bg-orange-800 text-white'
        onClick={handleSearch}>{showsearch ? 'GPT Search': 'Home Page'}</button>
        </>
      )}
      <div className='userIcon flex items-center relative' onClick={userOption}>
        <img src={user_avatar} alt="userIcon"/>       
       {showSignout &&
        (
          <div className=' absolute z-10 top-16 right-1 bg-black text-white p-3 '>
          
          <p>{user?.name}</p>
        <div className='signoutLink'
        onClick={handleSignOut}>Signout</div></div>)
       }

       
      </div>
      </div>
      
    </div>
   
    </>
  )
}

export default Header