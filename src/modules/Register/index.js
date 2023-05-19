import React, { useState } from 'react'
import { useUser } from '../../context/AuthContext'
const Register = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { createUser } = useUser()

  const validatePhone = (phoneNumber) => {
    const phoneNumberPattern = /^01[0-9]{9}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const createAccount = () => {
    if (name === '' || phone === '' || password === '') {
      alert('Please fill the form')
    } else {
      if (validatePhone(phone)) {
        setError('')
        createUser({ name: name, phone: phone, password: password })
        alert('successfull')

        setName('')
        setPhone('')
        setPassword('')
      } else {
        //setError("invalid phone number pattern")
        alert('invalid one number')
      }
    }
  }


  return (
    <div className='flex flex-row'>
      <div className='min-h-screen w-3/5 flex flex-col items-center bg-gray-100 justify-center'>
        <h2 className='text-2xl font-bold text-indigo-600 mb-3'>Create Account</h2>
        <div className='flex flex-col items-center'>
          <div className='bg-gray-white w-64 mb-3 rounded flex items-center'>
            <input
              className='px-5 py-2 bg-gray-white outline-none text-sm w-64'
              type='text' name='name'
              value={name}
              placeholder='Name'
              onChange={e => setName(e.target.value)} />
          </div>
          <div className='bg-gray-white w-64 mb-3 rounded flex items-center'>
            <input
              className='px-5 py-2 bg-gray-white outline-none text-sm w-64'
              type='text'
              name='number'
              placeholder='Phone'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className='bg-gray-white w-64 mb-3 rounded flex items-center'>
            <input
              className='px-5 py-2 bg-gray-white outline-none text-sm w-64'
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            className='bg-indigo-500 py-2 px-5 w-64 text-white mt-3'
            onClick={() => createAccount()}
          >Register
          </button>
        </div>

      </div>
      <div className='min-h-screen w-2/5 bg-indigo-500 flex flex-col items-center justify-center'>
        <h2 className='text-2xl text-white font-bold mb-2'>Welcome Back</h2>
        <p className='mb-2'>Please fill the form and continue to login</p>
        <button
          className='bg-white py-2 px-5'
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Register