import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockTrips } from '../utils/mockData';
import TripCard from '../components/trips/TripCard';
import EmptyState from '../components/common/EmptyState';

import {
  LayoutDashboard,
  Film,
  Map,
  User
} from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex flex-col">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide text-white">
            Reel<span className="text-indigo-400">To</span>Real
          </h1>

          {/* <div className="flex gap-3">
            <button
              onClick={() => navigate('/reels/add')}
              className="px-4 py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition"
            >
              Add Reel
            </button>

            <button
              onClick={() => navigate('/trips/create')}
              className="px-4 py-2 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition"
            >
              Create Trip
            </button>
          </div> */}
        </div>
      </nav>

      {/* ================= BODY ================= */}
      <div className="flex flex-1">

        {/* ================= SIDEBAR ================= */}
        <aside className="w-58 bg-slate-900 text-slate-300 px-6 py-8 hidden md:block">
          <h2 className="text-sm font-semibold text-slate-400 uppercase mb-6">
            Menu
          </h2>

          <nav className="space-y-4">
            <div
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-3 cursor-pointer hover:text-white transition"
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </div>

            <div
              onClick={() => navigate('/reels')}
              className="flex items-center gap-3 cursor-pointer hover:text-white transition"
            >
              <Film size={18} />
              <span>Saved Reels</span>
            </div>

            <div
              onClick={() => navigate('/trips')}
              className="flex items-center gap-3 cursor-pointer text-white"
            >
              <Map size={18} />
              <span>Trips</span>
            </div>

            <div
              onClick={() => navigate('/profile')}
              className="flex items-center gap-3 cursor-pointer hover:text-white transition"
            >
              <User size={18} />
              <span>Profile</span>
            </div>

             <button
                onClick={() => navigate('/trips/create')}
                className="
                  w-32
                  inline-flex items-center justify-center
                  px-6 py-2.5 text-sm
                  rounded-lg
                  bg-emerald-500
                  text-white text-sm font-semibold
                  whitespace-nowrap
                  hover:bg-emerald-600
                  transition
                "
              >
                Create Trip
              </button>

          </nav>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 px-6 py-10">

          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Created Trips
          </h2>

          {mockTrips.length === 0 ? (
            <EmptyState message="No trips created yet." />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24">
              {mockTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default Dashboard;
