import React from 'react'
import { Link } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const createAccount = async () => {
    const user = {
      name,
      email,
      password
    };

    try {
      await axios.post(`http://localhost:2000/api/users`, user);
      console.log(`Account successfully created`)
    } catch (error) {
      window.alert(`User already exist`);
    }

  }
  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-300 via-blue-300 to-purple-300 opacity-30 rounded-full blur-3xl"></div>
      </div>

      {/* Form Container */}
      <div className="relative flex flex-col justify-center px-6 lg:px-8 bg-white shadow-lg rounded-xl p-8 sm:w-full sm:max-w-md z-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                onClick={createAccount}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-indigo-600"
              >
                Create Account
              </button>
              <p className="mt-10 text-center text-sm/6 text-gray-500">
                Doesn't have an account?{' '}
                <Link to='/register' className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login