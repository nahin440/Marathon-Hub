import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase'; // Make sure to set up Firebase and export 'auth'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle login with email and password
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Redirect to the dashboard or home page
    } catch (error) {
      toast.error('Invalid email or password!');
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard'); // Redirect to the dashboard
    } catch (error) {
      toast.error('Google login failed!');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 p-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Login with Google
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
