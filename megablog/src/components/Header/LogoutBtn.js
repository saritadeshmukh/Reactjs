import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {

  const dispatch =useDispatch();

  const logoutHandler =()=>{
    //calling logout method promise from auth.js

    authservice.logout().then(()=>{dispatch(logout())}
                             );
       }  
  return (
    <button className='bg-red-50 px-6 rounded-2xl' 
            onClick={logoutHandler}>Logout
    </button>
  
  )
  }

export default LogoutBtn;
