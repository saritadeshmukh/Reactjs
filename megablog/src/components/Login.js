import React,{useState} from 'react'
import {Link, useNavigate}  from 'react-router-dom'
import { login } from '../store/authSlice'
import {Button,Input,Logo} from './index'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import authservice from '../appwrite/auth'

function Login() {
    const navigate =useNavigate();
    const dispatch = useDispatch();
    const{register,handleSubmit}=useForm();
    const [error,setErrorr] = useState("")

    const login = async(data)=>{
      setErrorr("");
      try{
        const session = await authservice.login(data)
        //check if session available the get current user
        if(session){
          const userData = await authservice.getCurrentUser();
          //if got current user then dispatch 
           if(userData){
            dispatch(authservice(login(userData)));
            //login dispatch n navigate to home page
            navigate('/');
           }
        }
      }
      catch(error){
        throw error;
      }
    }
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='mx-auto w-full max-w-lg bg-gray-200 rounded-xl p-10 border-black/10'>
        <div className='mb-2 flex justify-center'>
           <span className='inline-block w-full max-w-[100%]'> 
            <Logo width="100%" />
           </span>
        </div>
      </div>  
      <h2 className='text-center text-2xl font-bold leading-light'>Sign in to your account</h2> 
      <p className='mt-2 text-center text-base text-black/60'>
        <Link to="/signup"
         className='font-medium text-primary transition-all duration-200 hover:underLine'>
          Sign up
        </Link>
      </p>  
      {error&& <p className='text-red-500 text-center'>{error}</p>}
    
     {/* //onSubmit event use handleSubmit method n handle login */}

      <form onSubmit={handleSubmit(login)} className='mt-8'>
        <div className='space-y-5'>
          <Input label="Email: "
                 placeholder="Enter your email"
                 type="email"
              // spread register values and input keys
                 {...register("email",{
                  required:true,
  //its optional fied/validate for pattern match take string form www.regexr.com and test for value or give string msg
                  validate:{
                    matchPatern:(value)=>/[\w`~!#$%^&*\-=+;:{}'|,?/]/.test(value) || "Email adress must be valid address",
                  }}
                  )} />

          <Input label="password: "
                 placeholder="Enter your password"
                 type="password"
                 {...register("password",{ required:true,})}
                  />

          <Button type='submit'>Sign In</Button>
        </div>

      </form>

    </div>
  )
}

export default Login
