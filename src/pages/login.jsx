// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';

const LoginPage = () => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const validateForm = (event) => {
        event.preventDefault();
        if (!username || !password) {
            setMessage('All fields must be filled');
        } else {
            // Add your validation for email and password here
            setMessage('Success! You are now signed in.');
        }
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    
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
          <form onSubmit={validateForm}>
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
                required onChange={e => setusername(e.target.value)}
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
                required onChange={e => setPassword(e.target.value)}
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
      <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        top: '40%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        color: 'black',
                        border: 'none',
                        padding: '20px',
                        borderRadius: '5px',
                        width: '300px',
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                }}
                contentLabel="Message Modal"
            >
                <h2>{message}</h2>
                <button  className='flex mx-auto mt-5 bg-[#0991FF] px-3 text-white' onClick={closeModal}>Close</button>
            </Modal>
    </div>
  );
};

export default LoginPage;

