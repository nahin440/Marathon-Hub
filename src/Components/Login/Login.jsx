import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Dummy users for email/password matching
  const registeredUsers = [
    { email: 'user@example.com', password: 'password123' }
  ];

  // Handle login with email and password
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if email and password match a registered user
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigate('/dashboard'); // Redirect to the dashboard or home page
    } else {
      toast.error('Invalid email or password!');
    }
  };

  return (
    <div
      className="min-h-screen bg-[#fffefa] flex items-center justify-center px-4"
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#F96E2A] mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#F96E2A]">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-[#F96E2A]">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-[#F96E2A] text-white border-none hover:bg-orange-600"
          >
            Login
          </button>
        </form>

        {/* Redirect to Register */}
        <p className="text-center mt-4 text-sm">
          Don't have an account?{' '}
          <a href="/register" className="text-[#F96E2A] hover:underline">
            Register here
          </a>
        </p>

        {/* Google Login */}
        <div className="divider my-4">OR</div>
        <button
          onClick={() => toast.success('Google login clicked!')}
          className="btn btn-outline w-full flex items-center justify-center border-[#F96E2A] text-[#F96E2A] hover:bg-[#F96E2A] hover:text-white"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
