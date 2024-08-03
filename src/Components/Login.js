import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {


    const navigate = useNavigate();

    const [input , setinput] = useState({
        email : "",
        password : "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggedUser.email && input.password === loggedUser.password){

            localStorage.setItem("loggedin",true)
            navigate("/Home");
        }

        else{
            alert("Wrong Email or Password");
        }

    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Login</h2>
            </div>
            <form onSubmit={handleLogin}>
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
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
    };
    
    export default Login;
