import React from 'react';
import { Link } from 'react-router';

const Landing = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-300 to-indigo-300 opacity-30 rounded-full blur-3xl"></div>
      </div>
      <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-balance text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 drop-shadow-lg">
            Simplify Goal Tracking
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
            Effortless tracking for better results.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to='/register'
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </Link>
            <Link to='/login' className="text-sm/6 font-semibold text-gray-900">
              Login <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
