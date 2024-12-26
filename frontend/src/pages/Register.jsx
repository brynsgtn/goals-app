import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const createAccount = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const user = {
      name,
      email,
      password,
    };

    try {
      await axios.post('http://localhost:2000/api/users', user);
      console.log('Account successfully created');
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/login');
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        const errorMessage = error.response.data.message;
        if (errorMessage === 'User already exists') {
          window.alert('This email already in use. Please try a different email.');
        } else {
          window.alert('An unexpected error occurred. Please try again later.');
        }
      } else {
        window.alert('Network error. Please check your connection and try again.');
      }
    }
  };

  // Check if all required fields are filled
  const isFormValid = password === confirmPassword;


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
            Create your own account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={createAccount} className="space-y-6">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

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
                  className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={`block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline outline-1 focus:outline-indigo-600 sm:text-sm ${isFormValid ? "outline-gray-300 " : "outline-red-300"}`}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!isFormValid}  // Disable button if form is not valid
                className={`flex w-full justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm ${
                  isFormValid ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-gray-400 cursor-not-allowed'
                } focus:outline focus:outline-2 focus:outline-indigo-600`}
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?{' '}
            <Link to='/login' className="font-semibold text-indigo-600 hover:text-indigo-500">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
