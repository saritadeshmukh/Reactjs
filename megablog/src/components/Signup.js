import React,{useState} from 'react';
import authservice from '../appwrite/auth';
import { Link , useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import {Button,Input,Logo} from './index'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error,setError] = useState("")
    const { register,handleSubmit} = useForm()

    
const createSignup= async(data)=>{
    setError("");
    try{
        const userdata= await authservice.createAccount(data)
        if(userdata){
            const userdata=await authservice.getCurrentUser()
            if(userdata){
                dispatch(login(userdata));
                navigate("/")
            }
        }
    }
    catch(error){
        setError(error.message)
    }
}

    return(
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-50 rounded-lg p-10 border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className=' inline-blockw-full max-w-[100px]'><Logo width="100%"/></span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-light'>Sign in to create account</h2> 

                <p className='mt-2 text-center text-base text-black/60'>Already have an account"?&nbsp
                    <Link to="/signup"
                    className='font-medium text-primary transition-all duration-200 hover:underLine'>
                    Sign up
                    </Link>
                </p>  
                {error&& <p className='text-red-500 text-center'>{error}</p>}


                <form onSubmit={handleSubmit(createSignup)}>

                    <div className='space-y-5'>
                      <Input 
                        label="Full Name: "
                        placeholder ="Enter your full name" 
                        {...register ("name",{required:true,})}/>

                     <Input label="Email: "
                        placeholder="Enter your email"
                        type="email"
                    // spread register values and input keys
                        {...register("email",{
                        required:true,
        //its optional fied/validate for pattern match take string form www.regexr.com and test for value or give string msg
                        validate:{
                        matchPatern:(value)=>/[\w`~!#$%^&*\-=+;:{}'|,?\/]/.test(value) || "Email adress must be valid address",
                        }}
                        )} />

                        <Input label="Password"
                        type="Password"
                        placeholder="Enter your Password"
                        {...register ("Password",{required:true,})} />

                        <Button type="submit" className="w-full">Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup