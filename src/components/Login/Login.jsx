import React from 'react'
import { useState, useEffect } from 'react'
const Login = () => {

    const [user, setUser] = useState({
        username:'',
        password:''
    })

    const handleChange =(e) =>{        
        const {name, value} = e.target;
        setUser(prev =>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = () =>{
        console.log(user.username);
        console.log(user.password);
        
        
    }
  return (
    <div className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
      <div className="w-96 p-8 bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Login</h2>
        <div className="w-full  flex flex-col space-y-4">
          <label htmlFor="username" className="text-white font-semibold">Username:</label>
          <input
            type="text"
            id="username"
            name='username'
            className="border border-white/50 rounded px-4 py-2 bg-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            placeholder="Username"
            autoComplete="off"
            value={user.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="password" className="text-white font-semibold">Password:</label>
          <input
            type="password"
            id="password"
            name='password'
            className="border border-white/50 rounded px-4 py-2 bg-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            placeholder="Password"
            autoComplete="off"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
        onClick={handleSubmit} className="mt-4 w-full py-2 rounded bg-cyan-500 hover:bg-cyan-600 text-white font-bold shadow transition">
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Login