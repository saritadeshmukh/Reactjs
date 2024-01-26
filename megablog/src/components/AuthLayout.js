import React, {useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export default function Protected({children,authentication=true}) {
    const Navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    //ask to store is user login or not
    const authStatus = useSelector(state=>state.auth.status)

    ////useEffct use to ckeck if any changes on site,checl authStatus,if user navigate,authentication
    useEffect(()=>{
        if(authentication && authStatus!== authentication){
            Navigate("/login");
        } else if(!authentication && authStatus !== authentication){
            Navigate("/")
        }
        setLoader(false);
    },[authStatus,Navigate,authentication])

  return loader ? <h1>Loading...</h1>: {children}
}


