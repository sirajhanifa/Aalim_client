// import React from 'react'
// import { useState, useEffect } from 'react'
// const Login = () => {

//     const [user, setUser] = useState({
//         username:'',
//         password:''
//     })

//     const handleChange =(e) =>{        
//         const {name, value} = e.target;
//         setUser(prev =>({
//             ...prev,
//             [name]:value
//         }))
//     }

//     const handleSubmit = () =>{
//         console.log(user.username);
//         console.log(user.password);
        
        
//     }
//   return (
//     <div className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
//       <div className="w-96 p-8 bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col items-center justify-center space-y-6">
//         <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Login</h2>
//         <div className="w-full  flex flex-col space-y-4">
//           <label htmlFor="username" className="text-white font-semibold">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name='username'
//             className="border border-white/50 rounded px-4 py-2 bg-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             placeholder="Username"
//             autoComplete="off"
//             value={user.username}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="password" className="text-white font-semibold">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name='password'
//             className="border border-white/50 rounded px-4 py-2 bg-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             placeholder="Password"
//             autoComplete="off"
//             value={user.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button
//         onClick={handleSubmit} className="mt-4 w-full py-2 rounded bg-cyan-500 hover:bg-cyan-600 text-white font-bold shadow transition">
//           Sign In
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Login



import React from "react";
import JmcLogo from '../assets/jmclogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => 
{
    return (
        <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 font-serif px-8 pb-20 lg:flex-row lg:gap-10 lg:justify-center lg:items-center lg:pb-0">
            <div className="flex flex-row justify-center items-center mb-5 lg:flex-col lg:gap-4">
                <img src={JmcLogo} alt="LOGO" className="w-24 h-24 lg:w-52 lg:h-52" />
                <div className="text-center text-white">
                    <p className="text-sm font-bold lg:text-lg">JAMAL MOHAMED COLLEGE</p>
                    <p className="text-sm font-bold lg:text-lg">(AUTONOMOUS)</p>
                    <p className="text-sm font-bold lg:text-lg">TIRUCHIRAPPALLI - 620 020 .</p>
                </div>
            </div>
            <div className="rounded-2xl shadow-lg text-black bg-white py-6 px-6 lg:max-h-fit lg:py-10 lg:px-10">
                <h1 className="text-md font-bold text-center font-serif mb-6 lg:text-lg">
                    LOGIN TO YOUR ACCOUNT
                </h1>
                <p className="text-xs text-gray-800 text-center mb-6 lg:text-md">
                    Enter your Credentials to Access the Platform.
                </p>
                <div className="flex items-center border-b-2 border-black mb-8 p-1">
                    <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-2 text-sm lg:text-md" />
                    <input
                        type="text"
                        className="w-full bg-transparent outline-none placeholder:text-gray-600 placeholder:text-sm text-black lg:text-md"
                        placeholder="USERNAME"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex items-center border-b-2 border-black mb-8 p-1 lg:mb-10">
                    <FontAwesomeIcon icon={faLock} className="text-gray-600 mr-2 text-sm lg:text-md" />
                    <input
                        type="password"
                        className="w-full bg-transparent outline-none placeholder:text-gray-600 placeholder:text-sm text-black lg:text-md"
                        placeholder="PASSWORD"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-white h-8 bg-orange-400 hover:bg-orange-500 text-2xl font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faLock} className="mr-2 text-sm" />
                    <span className="text-sm font-serif">LOGIN</span>
                </button>
            </div>
        </div>
    )
}

export default LoginForm;