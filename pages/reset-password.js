import React, { useState } from "react";
import { useRouter } from 'next/router';

const ResetPassword = () => {
  const router = useRouter();
  const { token } = router.query;
  // const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      setLoading(false);
      return;
    }

    // const token = searchParams.get("token");
    if (!token) {
      setMessage("Invalid or missing reset token.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/resetPassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Password has been reset successfully.");
      } else {
        setMessage(data.error || "Failed to reset password.");
      }
    } catch (error) {
      console.error(error);
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
          <div className="flex justify-center">
            <img className="h-22 w-auto mix-blend-color-burn" src="/nittya_logo.png" alt="Nittya Nutrition" />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-white">
            Reset Password
          </h2>
          <p className="mt-1 text-white/90">
            Enter your new password below
          </p>
        </div>

        {/* Form Section */}
        <div className="px-8 py-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input type="password" id="newPassword" value={newPassword} onChange={(e) =>
                  setNewPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-[#2d9155] focus:border-[#2d9155] transition duration-200"
                  placeholder="Enter new password" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) =>
                  setConfirmPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-[#2d9155] focus:border-[#2d9155] transition duration-200"
                  placeholder="Confirm your password" />
              </div>
            </div>

            {message && (
              <p className={`text-center mb-4 ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>
                {message}
              </p>
            )}



            <div>
              <button type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-[#2d9155] hover:bg-[#1a6938] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2d9155] transition-colors duration-300" disabled={loading}>
                {loading ? "Resetting..." : "Reset Password"}
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
