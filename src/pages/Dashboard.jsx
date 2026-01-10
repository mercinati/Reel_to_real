import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockTrips } from '../utils/mockData';
import TripCard from '../components/trips/TripCard';
import EmptyState from '../components/common/EmptyState';
import { server } from '../config/server';
import axios from 'axios';

import {
  LayoutDashboard,
  Film,
  Map,
  User,
  Plus
} from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
    console.log('Server URL:', server);
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await axios.get(`${server}/api/trips/user/a85f15ab-f32f-4f6e-b6c1-e2f166da09c1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;
      setTrips(data);
      // console.log('Fetched trips:', data);
      if (!response.ok) {
        throw new Error('Failed to fetch trips');
      }
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white flex flex-col">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-extrabold tracking-wide">
            Reel<span className="text-indigo-400">To</span>Real
          </h1>

          <button
            onClick={() => navigate('/trips/create')}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-semibold"
          >
            <Plus size={18} /> Create Trip
          </button>
        </div>
      </nav>

      {/* ================= BODY ================= */}
      <div className="flex flex-1">

        {/* ================= SIDEBAR ================= */}
        <aside className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 px-6 py-8 hidden md:flex flex-col">
          <h2 className="text-xs font-semibold text-gray-400 uppercase mb-6">
            Navigation
          </h2>

          <nav className="space-y-3 flex-1">
            <div
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer bg-white/10"
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </div>

            <div
              onClick={() => navigate('/reels')}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition"
            >
              <Film size={18} />
              <span>Saved Reels</span>
            </div>

            <div
              onClick={() => navigate('/trips')}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition"
            >
              <Map size={18} />
              <span>Trips</span>
            </div>

            <div
              onClick={() => navigate('/profile')}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition"
            >
              <User size={18} />
              <span>Profile</span>
            </div>
          </nav>

          <button
            onClick={() => navigate('/trips/create')}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-semibold"
          >
            <Plus size={18} /> Create Trip
          </button>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1 px-6 py-10 bg-white">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Your Trips</h2>
              <p className="text-slate-500 text-sm mt-1">
                Trips generated from your saved travel reels
              </p>
            </div>
          </div>

          {trips.length === 0 ? (
            <EmptyState message="No trips created yet." />
          ) : (
            <div className="mt-6 flex flex-wrap gap-6">
              {trips.map((trip) => (
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