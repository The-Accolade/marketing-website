// src/pages/LoginPage.jsx
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Image Section */}
      <div className="w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/free-photo/woman-scanning-fingerprint-with-futuristic-interface-smart-technology_53876-102333.jpg?size=626&ext=jpg&ga=GA1.1.1883113003.1684269472&semt=sph")' }}>
        <img
          className="h-full w-full object-cover"
          src="https://img.freepik.com/free-photo/woman-scanning-fingerprint-with-futuristic-interface-smart-technology_53876-102333.jpg?size=626&ext=jpg&ga=GA1.1.1883113003.1684269472&semt=sph"
          alt="Login Background"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 p-10 flex items-center justify-center">
        <div className="max-w-md">
          <h2 className="text-3xl font-semi-bold mb-4">Welcome back</h2>
          <p className='text-base text-gray-500 font-normal mb-4 w-3/4'>Log in and connect your product with prospective users</p>

          {/* login form */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-base capitalize font-normal mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="w-full md:w-96 p-2 border rounded-md mx-auto my-2 md:my-0"
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                style={{ borderColor: '#0991FF' }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-base capitalize font-normal mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full md:w-96 p-2 border rounded-md mx-auto my-2 md:my-0"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                style={{ borderColor: '#0991FF' }}
              />
            </div>

            <button
              className="w-full md:w-96 text-white p-2 rounded-md md:mt-4"
              type="submit"
              style={{ backgroundColor: '#0991FF' }}
            >
              Login
            </button>
          </form>
          <div className="additional-links mt-2 py-10">
        <a href="/forgot-password" style={{ color: '#0991FF' }}>Forgot Password?</a>
        <p className='mt-2'>Don't have an account? <a href="/signup" style={{ color: '#0991FF' }}>Sign up</a></p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

