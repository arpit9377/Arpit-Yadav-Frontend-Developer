import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>

        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md shadow-sm"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md shadow-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md shadow-sm"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms">I agree to the terms of service</label>
          </div>

          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded-md shadow-sm font-bold"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
