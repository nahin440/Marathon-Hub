import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos'; // Animate on Scroll
import 'aos/dist/aos.css';

import { toast } from 'react-toastify'; // For toasts
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { createUser, setUser } = useContext(AuthContext);
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // Password validation
        if (!/[A-Z]/.test(password)) {
            setErrors('Password must have at least one uppercase letter.');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setErrors('Password must have at least one lowercase letter.');
            return;
        }
        if (password.length < 6) {
            setErrors('Password must be at least 6 characters long.');
            return;
        }
        setErrors(''); // Clear errors if validation passes

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser({ ...user, displayName: name, photoURL }); // Set user with additional details
                toast.success('Registration successful! 🎉', {
                    position: 'top-center',
                    autoClose: 2000, // Auto close after 2 seconds
                });
                navigate('/'); // Redirect to home
            })
            .catch((error) => {
                toast.error(`Error: ${error.code}`, {
                    position: 'top-center',
                    autoClose: 2000, // Auto close after 2 seconds
                });
            });
    };

    const handleGoogleSignup = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success('Google Sign-Up successful! 🎉', {
                    position: 'top-center',
                    autoClose: 2000, // Auto close after 2 seconds
                });
                navigate('/');
            })
            .catch((error) => {
                toast.error(`Error: ${error.code}`, {
                    position: 'top-center',
                    autoClose: 2000, // Auto close after 2 seconds
                });
            });
    };

    return (
        <div className="border min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#f0f4f7] to-[#ffe1b3]">
            <Helmet>
                <title>Register - MarathonHub</title>
            </Helmet>
            <div
                className="bg-white w-11/12 md:w-[500px] mx-auto rounded-xl border-2 border-[#ff9800] shadow-2xl my-16 py-14 px-6"
                data-aos="zoom-in"
            >
                <h2 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff9800] via-[#ffa726] to-[#fb8c00]">
                    Register
                </h2>
                <form className="w-full max-w-md" onSubmit={handleRegister} data-aos="zoom-in">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full bg-white px-4 py-2 border rounded focus:outline-none"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full bg-white px-4 py-2 border rounded focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Photo URL</label>
                        <input
                            type="url"
                            name="photoURL"
                            className="w-full bg-white px-4 py-2 border rounded focus:outline-none"
                            placeholder="Enter your photo URL"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full bg-white px-4 py-2 border rounded focus:outline-none"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {errors && <p className="text-red-500 text-sm mb-4">{errors}</p>}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 rounded text-white bg-[#ff9800] hover:opacity-90"
                    >
                        Register
                    </button>
                </form>
                <div className="my-4" data-aos="zoom-in">
                    <button
                        onClick={handleGoogleSignup}
                        className="w-full py-2 px-4 flex items-center justify-center rounded text-white bg-[#ff9800] hover:opacity-90 gap-2"
                    >
                        Register with Google
                        <div className="p-1 rounded-full bg-white border-2 border-white">
                            <FcGoogle size={20} />
                        </div>
                    </button>
                </div>
                <p className="mt-4 text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#ff9800] hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
