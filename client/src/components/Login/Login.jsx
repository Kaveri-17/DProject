import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function Login() {
    const [activeTab, setActiveTab] = useState("account");
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission for login or register
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (activeTab === "account") {
                // Login
                const response = await axios.post('http://localhost:5000/api/auth/login', {
                    username: formData.username,
                    password: formData.password,
                });
                alert('Logged in successfully');
                console.log(response.data.token); // Handle the token as needed
                localStorage.setItem('token', response.data.token); // Store token
                navigate('/'); // Navigate to home page
            } else {
                // Register
                await axios.post('http://localhost:5000/api/auth/register', {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                });
                alert('Registered successfully');
            }
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            alert('Error during authentication');
        }
    };

    // Handle Google login success
    const handleGoogleLoginSuccess = async (response) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/google-login', {
                token: response.credential,
            });
            alert('Logged in successfully with Google');
            localStorage.setItem('token', res.data.token); // Store token
            navigate('/'); // Navigate to home page
        } catch (error) {
            console.error('There was an error during Google authentication!', error);
            alert('Error during Google authentication');
        }
    };

    // Handle Google login error
    const handleGoogleLoginError = (error) => {
        console.error('Google login error', error);
        alert('Error during Google authentication');
    };

    return (
        <GoogleOAuthProvider clientId="602191930772-4hrh3333pjii4q4k4247r3dglm8tllc0.apps.googleusercontent.com">
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-[400px] bg-white rounded-lg shadow-lg">
                    <div className="grid w-full grid-cols-2 bg-gray-200 rounded-t-lg">
                        <button
                            className={`py-2 ${activeTab === "account" ? "bg-white font-semibold" : "bg-gray-200"}`}
                            onClick={() => setActiveTab("account")}
                        >
                            Login
                        </button>
                        <button
                            className={`py-2 ${activeTab === "password" ? "bg-white font-semibold" : "bg-gray-200"}`}
                            onClick={() => setActiveTab("password")}
                        >
                            Register
                        </button>
                    </div>
                    {activeTab === "account" && (
                        <div className="p-4 rounded-b-lg text-center">
                            <h2 className="text-xl font-semibold">Welcome Again</h2>
                            <p className="text-gray-600">Welcome back, we’ve missed you! Log in to continue your journey with us🚀</p>
                            <form onSubmit={handleSubmit} className="mt-4 space-y-2">
                                <div className="space-y-1">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                    <input
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
                                        required
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
                                        required
                                    />
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Save changes
                                    </button>
                                </div>
                            </form>
                            <div className="mt-4">
                                <GoogleLogin
                                    onSuccess={handleGoogleLoginSuccess}
                                    onError={handleGoogleLoginError}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab === "password" && (
                        <div className="p-4 rounded-b-lg text-center">
                            <h2 className="text-xl font-semibold">Register Now!..</h2>
                            <p className="text-gray-600">Welcome aboard! Register now to embark on your exciting journey with us ✨</p>
                            <form onSubmit={handleSubmit} className="mt-4 space-y-2">
                                <div className="space-y-1">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                    <input
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
                                        required
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
                                        required
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
                                        required
                                    />
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Save changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}
