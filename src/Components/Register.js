import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';



const Register = () => {


    const navigate = useNavigate();


    const [input , setinput] = useState({
        name : "",
        email : "",
        password : "",
    });

    //to store value in local storage

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(input))
        navigate("/login");
    };
    return(
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-5xl font-semibold'>
                Register
            </h1>
            <p className='font-medium text-lg text-gray-500 mt-4 '>
                Welcome! Please Enter Your Details.
            </p>
            <form onSubmit={handleSubmit}>
            <div className='mt-8 '>
                <label className='text-lg font-medium'>
                    Name
                </label>
                <input 
                name='name' value={input.name} onChange={(e) => setinput({...input,[e.target.name] : e.target.value})}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your Email'/>
            </div>
            <div className='mt-8 '>
                <label className='text-lg font-medium'>
                    Email
                </label>
                <input 
                name='email' value={input.email} onChange={(e) => setinput({...input,[e.target.name] : e.target.value})}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your Email'/>
            </div>
            <div className='mt-8 '>
                <label className='text-lg font-medium'>
                    Password
                </label>
                <input
                name='password' value={input.password} onChange={(e) => setinput({...input,[e.target.name] : e.target.value})}
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your Password' type="password"/>
            </div>
            <div className='flex mt-8 justify-between items-center'>
                <div>
                    <input type="checkbox" id='remember'/>
                    <label className='ml-2 font-medium text-base' for="remember">
                        Remember for 30 days
                    </label>
                </div>

                <button className='font medium text-base text-violet-500'>
                    Forgot Password
                </button>

            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                <button className=' active:scale-[.98 ] active:duration-75 hover:scale-[1.01] easy-in-out transition-all py-3 rounded-xl  bg-violet-500 text-white text-lg font-bold'>
                    Register
                </button>

                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'> 
                        Don't have an Account?
                    </p>
                    <button className='text-violet-500 text-medium ml-2'>Sign Up</button>
                </div>

            </div>
         </form>
        </div>
    )
};

export default Register;

