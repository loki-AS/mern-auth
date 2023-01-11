import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    const res = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    })

    const data = await res.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}    
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className='text-2xl uppercase font-semibold'>Login</h1>

      <form 
      onSubmit={handleSubmit}
      className='flex flex-col my-6 bg-slate-200 py-3 px-6 rounded-md'
      >
        <label className='py-3 text-xl'>UserName</label>
        <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="text" placeholder='username' className='mb-3 text-xl border px-4 py-2 rounded-md' />
        <label className='py-3 text-xl'>Password</label>
        <input 
				value={password}
				onChange={(e) => setPassword(e.target.value)}
        type="password" 
        placeholder='password' 
        className='mb-3 text-xl border px-4 py-2 rounded-md' />
        <button type="submit" className='bg-blue-500 hover:bg-blue-600 py-2 rounded-md text-white text-xl'>Login</button>
        <div className='flex py-3 text-gray-700' >
          <h1 className='px-1'>New account</h1>
          <Link to="/register"><span className='px-1 text-blue-500 hover:underline hover:text-blue-600'>Register</span></Link>
          <h1>here</h1>
        </div>
      </form>
</div>
  )
}

export default Login