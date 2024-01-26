import React, {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth.js';
import {Header, Footer} from './components';
import {login,logout} from './store/authSlice';
import { Outlet } from 'react-router-dom'
import './App.css';

function App() {
  //to ask data from database,create loading state

  const [loading,setLoading] = useState(true);

  const[dispatch] = useDispatch();
  
  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  })

  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-red-200'>
      <div className='w-full block'>
      <Header />
      <main>
        TODOS: <Outlet />
      </main>
      <Footer />
      </div>
   </div>
    ):null ;
}

export default App;