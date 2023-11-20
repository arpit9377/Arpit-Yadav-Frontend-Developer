import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/page'); // Replace with your desired redirect location
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Log In</h1>

        <form className="space-y-4">
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

          
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded-md shadow-sm font-bold"
            onClick={handleLogin}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
