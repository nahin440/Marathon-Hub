import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGoogle } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        photoURL: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        AOS.init();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validatePassword = (password) => {
        const errors = {};
        if (!/[A-Z]/.test(password)) {
            errors.uppercase = 'Password must include at least one uppercase letter.';
        }
        if (!/[a-z]/.test(password)) {
            errors.lowercase = 'Password must include at least one lowercase letter.';
        }
        if (password.length < 6) {
            errors.length = 'Password must be at least 6 characters long.';
        }
        return errors;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const passwordErrors = validatePassword(formData.password);

        if (Object.keys(passwordErrors).length > 0) {
            setErrors(passwordErrors);
            toast.error('Please fix the errors in the form.');
        } else {
            setErrors({});
            toast.success('Registration successful!');
            // Add Firebase authentication logic here later
        }
    };

    const handleGoogleLogin = () => {
        toast.success('Google login clicked!');
        // Add Firebase Google login logic here later
    };

    return (
        <div
            className="min-h-screen bg-[#fffefa] flex items-center justify-center px-4"
            data-aos="fade-up"
        >
            <Toaster position="top-center" reverseOrder={false} />
            <motion.div
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-center text-[#F96E2A] mb-6">
                    Register
                </h2>
                <form onSubmit={handleFormSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-[#F96E2A]">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
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
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
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
                            value={formData.photoURL}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
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
                            value={formData.password}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            required
                        />
                        <div className="text-sm text-red-500 mt-2">
                            {errors.uppercase && <p>{errors.uppercase}</p>}
                            {errors.lowercase && <p>{errors.lowercase}</p>}
                            {errors.length && <p>{errors.length}</p>}
                        </div>
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

export default Register;
