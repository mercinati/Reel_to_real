import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { server } from "../config/server";

const serverUrl = server; // backend base URL

function SignIn() {
  const navigate = useNavigate();

  const handleOAuthLogin = (provider) => {
     // Simulate login and redirect
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative"
      >
        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-400 mb-8">
            Sign in to turn travel reels into real journeys
          </p>

          <button
            onClick={() => handleOAuthLogin("google")}
            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition mb-4"
          >
            Continue with Google
          </button>

          <button
            onClick={() => handleOAuthLogin("facebook")}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold mb-6"
          >
            Continue with Facebook
          </button>

          <div className="text-sm text-gray-400 text-center">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-indigo-400 hover:underline"
            >
              Sign up
            </button>
          </div>
        </div>

        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 to-pink-500/30 blur-2xl -z-10" />
      </motion.div>
    </div>
  );
}

export default SignIn;
