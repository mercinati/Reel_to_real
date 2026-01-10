import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { server } from "../config/server";

const serverUrl = server; // backend base URL

function SignUp() {
  const navigate = useNavigate();

  const handleOAuthRegister = (provider) => {
    window.location.href = `${serverUrl}/api/user/auth/${provider}`;
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
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-400 mb-8">
            Start planning smarter trips with Reel2Real
          </p>

          <button
            onClick={() => handleOAuthRegister("google")}
            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition mb-4"
          >
            Sign up with Google
          </button>

          <button
            onClick={() => handleOAuthRegister("facebook")}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold mb-6"
          >
            Sign up with Facebook
          </button>

          <div className="text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-indigo-400 hover:underline"
            >
              Sign in
            </button>
          </div>
        </div>

        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 to-pink-500/30 blur-2xl -z-10" />
      </motion.div>
    </div>
  );
}

export default SignUp;
