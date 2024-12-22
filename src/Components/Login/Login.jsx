import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect user to intended page after login
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    // Any additional effect (e.g., animations or focus handling)
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // Basic password validation
    if (password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Password must be at least 6 characters long.',
      });
      return;
    }

    loginUser(email, password)
      .then((result) => {
        Swal.fire('Success', 'Logged in successfully!', 'success');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire('Error', error.message, 'error');
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire('Success', 'Logged in with Google!', 'success');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire('Error', error.message, 'error');
      });
  };

  return (
    <div className="min-h-screen bg-[#FBF8EF] flex items-center justify-center">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-[#F96E2A] mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F96E2A] text-white font-bold py-2 rounded-lg hover:bg-[#E45B1E] transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/register" className="text-[#F96E2A] font-medium hover:underline">
              Register here
            </Link>
          </p>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-[#FBF8EF] text-[#F96E2A] flex justify-center items-center font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign in with Google <FcGoogle></FcGoogle>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
