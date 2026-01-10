import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockReels, mockTrips } from '../utils/mockData';
import ReelCard from '../components/reels/ReelCard';
import EmptyState from '../components/common/EmptyState';
import { Calendar, Sparkles, Plus, MapPin } from 'lucide-react';

function TripDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const trip = mockTrips.find((t) => t.id === id) || {};
  const hasReels = mockReels.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black px-6 py-10 text-white">

      {/* ================= HERO ================= */}
      <div className="max-w-6xl mx-auto mb-10 relative">
        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            {/* Trip Info */}
            <div>
              <h1 className="text-4xl font-extrabold mb-3">
                {trip.city}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{trip.totalDays} days</span>
                </div>

                <div className="flex items-center gap-2 capitalize">
                  <Sparkles size={16} />
                  <span>{trip.style}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/reels/add')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold"
              >
                <Plus size={18} /> Add Reel
              </button>

              <button
                disabled={!hasReels}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition
                  ${hasReels
                    ? 'bg-emerald-500 hover:bg-emerald-600'
                    : 'bg-white/10 text-gray-500 cursor-not-allowed'}
                `}
              >
                <MapPin size={18} /> Add Place
              </button>
            </div>
          </div>
        </div>

        {/* Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 to-pink-500/30 blur-2xl -z-10" />
      </div>

      {/* ================= SAVED REELS ================= */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold">Saved Reels</h2>
          <span className="text-sm text-gray-400">Swipe to explore</span>
        </div>

        {mockReels.length === 0 ? (
          <EmptyState message="Save reels to start building your trip." />
        ) : (
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory overscroll-x-contain">
            {mockReels.map((reel) => (
              <div key={reel.id} className="snap-start shrink-0">
                <ReelCard reel={reel} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= ITINERARY ================= */}
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8">
          <h2 className="text-2xl font-bold mb-3">Places & Itinerary</h2>

          <p className="text-gray-400 text-sm">
            No places added yet. Add reels to start building your itinerary.
          </p>
        </div>
      </div>

    </div>
  );
}

export default TripDetail;