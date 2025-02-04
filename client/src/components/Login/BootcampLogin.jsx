import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const googleClientId = '493200999588-hr84fg9pf0u6kgsn7juj3bafje80f125.apps.googleusercontent.com';

export default function Login() {
    const [activeTab, setActiveTab] = useState("account");

    const handleGoogleSuccess = (response) => {
        console.log('Google Login Success:', response);
    };

    const handleGoogleFailure = (error) => {
        console.log('Google Login Failed:', error);
    };

    return (
        <GoogleOAuthProvider clientId={googleClientId}>
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
                            Password
                        </button>
                    </div>
                    {activeTab === "account" && (
                        <div className="p-4 rounded-b-lg text-center">
                            <h2 className="text-xl font-semibold">Welcome Again</h2>
                            <p className="text-gray-600">Welcome back, we’ve missed you! Log in to continue your journey with us🚀</p>
                            <div className="mt-4 space-y-2">
                                <div className="space-y-1">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Username</label>
                                    <input id="name" className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input id="phone" type="tel" className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education</label>
                                    <select id="education" className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                                        <option value="">Select your education</option>
                                        <option value="engineering">Engineering</option>
                                        <option value="polytechnic">Polytechnic</option>
                                        <option value="bsc">BSc</option>
                                        <option value="msc">MSc</option>
                                        <option value="mca">MCA</option>
                                        <option value="bca">BCA</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="bootcamp" className="block text-sm font-medium text-gray-700">Bootcamp</label>
                                    <select id="bootcamp" className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                                        <option value="">Select your bootcamp</option>
                                        <option value="full_stack_mern">Full Stack Development (MERN)</option>
                                        <option value="java_full_stack">Java Full Stack</option>
                                        <option value="iot">IoT</option>
                                        <option value="python_full_stack">Python Full Stack</option>
                                        <option value="aiml">AI/ML</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onError={handleGoogleFailure}
                                    useOneTap
                                    className="w-full"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab === "password" && (
                        <div className="p-4 rounded-b-lg text-center">
                            <h2 className="text-xl font-semibold">Register Now!..</h2>
                            <p className="text-gray-600">Welcome aboard! Register now to embark on your exciting journey with us ✨</p>
                            <div className="mt-4 space-y-2">
                                <div className="space-y-1">
                                    <label htmlFor="current" className="block text-sm font-medium text-gray-700">Current password</label>
                                    <input id="current" type="password" className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="new" className="block text-sm font-medium text-gray-700">New password</label>
                                    <input id="new" type="password" className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onError={handleGoogleFailure}
                                    useOneTap
                                    className="w-full"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}
