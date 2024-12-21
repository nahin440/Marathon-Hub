import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-base-content">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-error">404</h1>
                <h2 className="text-3xl font-bold mt-4">
                    Oops! Page not found.
                </h2>
                <p className="mt-2 text-lg text-base-content">
                    The page you're looking for doesn't exist or has been moved.
                </p>
            </div>
            <div className="mt-6">
                <button
                    onClick={handleBackToHome}
                    className="btn btn-primary btn-wide"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
