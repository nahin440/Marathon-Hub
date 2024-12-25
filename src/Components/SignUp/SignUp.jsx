import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider'; // Ensure this is correctly imported
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    const { createUser, googleSignIn, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must contain at least 6 characters, including uppercase and lowercase.',
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser({ ...user, displayName: name, photoURL });
                Swal.fire('Success', 'Account created successfully!', 'success');
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                Swal.fire('Error', error.message, 'error');
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                Swal.fire('Success', 'Logged in with Google!', 'success');
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                Swal.fire('Error', error.message, 'error');
            });
    };

    return (
        <div
            className="min-h-screen bg-[#FBF8EF] flex items-center justify-center px-4"
            data-aos="fade-up"
        >
            <motion.div
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-center text-[#F96E2A] mb-6">
                    Register
                </h2>
                <form onSubmit={handleRegister}>
                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-[#F96E2A]">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="input input-bordered w-full"
                            placeholder='Name'
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-[#F96E2A]">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="input input-bordered w-full"
                            placeholder='Email'
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-sm font-medium text-[#F96E2A]">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            name="photoURL"
                            id="photoURL"
                            className="input input-bordered w-full"
                            placeholder='Photo URL'
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-[#F96E2A]">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="input input-bordered w-full"
                            placeholder='Password'
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn w-full bg-[#F96E2A] text-white border-none hover:bg-orange-600"
                    >
                        Register
                    </button>
                </form>

                {/* Redirect to Login */}
                <p className="text-center mt-4 text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#F96E2A] hover:underline">
                        Login here
                    </Link>
                </p>

                {/* Google Login */}
                <div className="divider my-4">OR</div>
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline w-full flex items-center justify-center border-[#F96E2A] text-[#F96E2A] hover:bg-[#F96E2A] hover:text-white"
                >
                    <FaGoogle className="mr-2" /> Continue with Google
                </button>
            </motion.div>
        </div>
    );
};

export default SignUp;
