import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

  async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate('/login')
		}
	}

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className='text-2xl uppercase font-semibold'>Sign Up</h1>

      <form onSubmit={registerUser} className='flex flex-col my-6 bg-slate-200 py-3 px-10 rounded-md'>
        <label className='py-3 text-xl'>UserName</label>
        <input 
				value={name}
				onChange={(e) => setName(e.target.value)}        
        type="text" 
        placeholder='username' 
        className='mb-3 text-xl border px-4 py-2 rounded-md' />
        
        <label className='py-3 text-xl'>Email</label>
        <input 
				value={email}
				onChange={(e) => setEmail(e.target.value)}        
        type="text" 
        placeholder='email' 
        className='mb-3 text-xl border px-4 py-2 rounded-md' />
        
        <label className='py-3 text-xl'>Password</label>
        <input 
				value={password}
				onChange={(e) => setPassword(e.target.value)}        
        type="password" 
        placeholder='password' 
        className='mb-3 text-xl border px-4 py-2 rounded-md' />
        
        <button type="submit" className='bg-blue-500 hover:bg-blue-600 py-2 rounded-md text-white text-xl'>Sign Up</button>
        <div className='flex py-3 text-gray-700' >
          <h1 className='px-1'>Already had an account</h1>
          <Link to="/login"><span className='px-1 text-blue-500 hover:underline hover:text-blue-600'>Login</span></Link>
        </div>
      </form>
</div>
  )
}

export default SignUp