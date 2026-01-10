import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-sm tracking-wide">
            ✨ AI‑Powered Travel Planning
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Turn <span className="text-indigo-400">Travel Reels</span>
            <br />
            into <span className="text-pink-400">Real Trips</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Reel2Real transforms Instagram travel reels into real‑world itineraries.
            Discover places, understand costs, and travel smarter — powered by AI.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold shadow-lg"
            >
              Get Started
            </button>

            <button
              onClick={() => navigate("/explore")}
              className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              Explore Demos
            </button>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">How Reel2Real Works</h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">🎥</div>
                <div>
                  <h4 className="font-semibold">Paste Reel Link</h4>
                  <p className="text-gray-400 text-sm">Instagram or short travel video</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">🧠</div>
                <div>
                  <h4 className="font-semibold">AI Understands Location</h4>
                  <p className="text-gray-400 text-sm">Places, safety & hidden costs</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">🗺️</div>
                <div>
                  <h4 className="font-semibold">Real Itinerary</h4>
                  <p className="text-gray-400 text-sm">Budget‑friendly & realistic plans</p>
                </div>
              </div>
            </div>
          </div>

          {/* GLOW */}
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 to-pink-500/30 blur-2xl -z-10" />
        </motion.div>
      </div>
    </div>
  );
}
