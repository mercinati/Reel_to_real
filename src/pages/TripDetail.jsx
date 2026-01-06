import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockReels, mockTrips } from '../utils/mockData';
import ReelCard from '../components/reels/ReelCard';
import EmptyState from '../components/common/EmptyState';
import { Calendar, Sparkles } from 'lucide-react';

function TripDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const trip = mockTrips.find((t) => t.id === id) || {};
  const hasReels = mockReels.length > 0;

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-slate-200">

      {/* ================= HERO CARD ================= */}
      <div className="max-w-6xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Trip Info */}
          <div>
            <h1 className="text-3xl font-semibold text-white mb-2">
              {trip.city}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {trip.totalDays} days
              </div>

              <div className="flex items-center gap-2 capitalize">
                <Sparkles size={16} />
                {trip.style}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/reels/add')}
              className="inline-flex items-center px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition"
            >
              Add Reel
            </button>

            <button
              disabled={!hasReels}
              className={`
                inline-flex items-center px-5 py-2 rounded-lg text-sm font-medium
                ${hasReels
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'}
                transition
              `}
            >
              Add Place
            </button>
          </div>
        </div>
      </div>

      {/* ================= SAVED REELS ================= */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          Saved Reels
        </h2>

        {mockReels.length === 0 ? (
          <EmptyState message="Save reels to start building your trip." />
        ) : (
          <div
            className="
              flex gap-4
              overflow-x-auto
              pb-4
              snap-x snap-mandatory
              overscroll-x-contain
            "
          >
            {mockReels.map((reel) => (
              <div key={reel.id} className="snap-start shrink-0">
                <ReelCard reel={reel} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= PLACES / ITINERARY ================= */}
      <div className="max-w-6xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-3">
          Places & Itinerary
        </h2>

        <p className="text-sm text-slate-400">
          No places added yet. Add reels to start building your itinerary.
        </p>
      </div>

    </div>
  );
}

export default TripDetail;
