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
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700"> Your Name</label>
            <input name='name' value={input.name} onChange={(e) => setinput({...input,[e.target.name] : e.target.value})}
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700"> Your Email</label>
            <input name='email' value={input.email} onChange={(e) => setinput({...input,[e.target.name] : e.target.value})}
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input name='password' value={input.password} onChange={(e) => setinput({...input,[e.target.name] : e.target.value})}
              type="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

