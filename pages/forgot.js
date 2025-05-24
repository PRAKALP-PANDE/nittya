import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Forgot = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('myuser')) {
            router.push('/')
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/forgotPassword`, { email });
            if (res.data.success) {
                setMessage("Password reset link has been sent to your email.");
            } else {
                setMessage(res.data.error);
            }
        } catch (error) {
            setMessage("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] to-[#e6f7ed] flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Header Section */}
                <div className="bg-[#2d9155] p-6 text-center">
                    <h2 className="mt-4 text-2xl font-bold text-white">
                        Forgot Password
                    </h2>
                </div>

                {/* Form Section */}
                <div className="px-8 py-8 sm:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email"
                                    type="email"
                                    autoComplete="email" required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-[#2d9155] focus:border-[#2d9155] transition duration-200"
                                    placeholder="your@email.com" />
                            </div>
                            {message && (
                                <p className={`text-center mb-4 ${message.includes("success") ? "text-green-500" : "text-red-500"
                                    }`}>
                                    {message}
                                </p>
                            )}

                        </div>

                        <div>
                            <button type="submit" className={`w-full flex justify-center items-center py-3 px-4 border
                        border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-[#2d9155]
                        hover:bg-[#1a6938] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2d9155]
                        transition-colors duration-300${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                                disabled={loading}>
                                {loading ? "Sending..." : "Send Reset Link"}
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Back to
                        <Link href={'/login'} className="font-semibold leading-6 text-gray-600 hover:text-gray-800"> Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Forgot;