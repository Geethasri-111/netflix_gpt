import React, { useState ,useEffect} from 'react'
import { signOut ,onAuthStateChanged} from 'firebase/auth';
import { auth } from '../../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser,removeUser } from '../../utils/userSlice';

const Header = () => {
  const [showSignout,setShowSignout] =useState(false);
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userOption =()=> {
      setShowSignout(!showSignout);
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {       
          console.log(user);
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,name:displayName}));
          navigate('/browse');
        } else {
          dispatch(removeUser());
          navigate('/');
        }
      });
    },[])
 
  return (
    <>
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between'>
       
      <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
      alt="logo" className='w-44'/>
      <div className='userIcon flex items-center relative' onClick={userOption}>
        <img src="https://occ-0-6641-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="userIcon"/>
        <span>{user?.name}</span>
       {showSignout &&
        (<div className='signoutLink p-3 bg-black text-white absolute z-10 top-16 right-1'
        onClick={handleSignOut}>Signout</div>)
       }

       
      </div>
    </div>
   
    </>
  )
}

export default Header