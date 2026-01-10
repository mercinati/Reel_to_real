import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockTrips } from '../utils/mockData';

// Mock itinerary data based on API docs
const mockItinerary = [
  {
    dayNumber: 1,
    places: ["Baga beach"],
    confidenceScore: 80,
    confidenceLabel: "Good",
    budgetReality: {
      estimatedCost: 4500,
      category: "Mid-range"
    }
  },
  {
    dayNumber: 2,
    places: ["Candolim Beach", "Fort Aguada"],
    confidenceScore: 75,
    confidenceLabel: "Fair",
    budgetReality: {
      estimatedCost: 5000,
      category: "Mid-range"
    }
  }
];
import ReelCard from '../components/reels/ReelCard';
import EmptyState from '../components/common/EmptyState';
import { Calendar, Sparkles, Plus, MapPin } from 'lucide-react';

function TripDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const trip = mockTrips.find((t) => t.id === id) || {};
  const [reels, setReels] = useState([]);
  const hasReels = reels.length > 0;
  const [itinerary, setItinerary] = useState([]);
  const [places, setPlaces] = useState([]);
  const [showAddPlace, setShowAddPlace] = useState(false);
  const [placeId, setPlaceId] = useState('');
  const [priority, setPriority] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Hardcoded userId
  const userId = "a85f15ab-f32f-4f6e-b6c1-e2f166da09c1";

  useEffect(() => {
    // Fetch reels for this trip
    fetch(`https://reel2real-server.onrender.com/api/reels/trip/${id}`)
      .then(res => res.json())
      .then(data => setReels(Array.isArray(data) ? data : []))
      .catch(() => setReels([]));

    // Fetch itinerary
    fetch(`https://reel2real-server.onrender.com/api/itinerary/trip/${id}`)
      .then(res => res.json())
      .then(data => setItinerary(Array.isArray(data) && data.length > 0 ? data : mockItinerary))
      .catch(() => setItinerary(mockItinerary));

    // Fetch trip places
    fetch(`https://reel2real-server.onrender.com/api/trips/${id}/places`)
      .then(res => res.json())
      .then(data => setPlaces(Array.isArray(data) ? data : []))
      .catch(() => setPlaces([]));
  }, [id, loading]);

  const handleAddPlace = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    fetch(`https://reel2real-server.onrender.com/api/trips/${id}/places`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ placeId, priority: Number(priority) })
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to add place');
        return res.json();
      })
      .then(() => {
        setShowAddPlace(false);
        setPlaceId('');
        setPriority(1);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to add place');
        setLoading(false);
      });
  };

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
                onClick={() => setShowAddPlace(true)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition bg-emerald-500 hover:bg-emerald-600`}
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

        {reels.length === 0 ? (
          <EmptyState message="Save reels to start building your trip." />
        ) : (
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory overscroll-x-contain">
            {reels.map((reel) => (
              <div key={reel.id} className="snap-start shrink-0">
                <ReelCard reel={reel} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= ADD PLACE FORM ================= */}
      {showAddPlace && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <form onSubmit={handleAddPlace} className="bg-zinc-900 p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Add Place to Trip</h3>
            <div className="mb-4">
              <label className="block mb-1">Place ID</label>
              <input
                type="text"
                value={placeId}
                onChange={e => setPlaceId(e.target.value)}
                className="w-full px-3 py-2 rounded bg-zinc-800 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Priority</label>
              <input
                type="number"
                min={1}
                value={priority}
                onChange={e => setPriority(e.target.value)}
                className="w-full px-3 py-2 rounded bg-zinc-800 text-white"
                required
              />
            </div>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <div className="flex gap-4">
              <button type="submit" className="bg-emerald-500 px-4 py-2 rounded font-semibold" disabled={loading}>
                {loading ? 'Adding...' : 'Add Place'}
              </button>
              <button type="button" className="bg-gray-700 px-4 py-2 rounded font-semibold" onClick={() => setShowAddPlace(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ================= ITINERARY ================= */}
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8">
          <h2 className="text-2xl font-bold mb-3">Places & Itinerary</h2>
          {places.length === 0 && itinerary.length === 0 ? (
            <p className="text-gray-400 text-sm">No places or itinerary yet. Add places to start building your itinerary.</p>
          ) : (
            <>
              {places.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Trip Places</h3>
                  <ul className="list-disc pl-6">
                    {places.map((p, idx) => (
                      <li key={idx}>{p.placeName || p.placeId} (Priority: {p.priority})</li>
                    ))}
                  </ul>
                </div>
              )}
              {itinerary.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-2">Itinerary</h3>
                  {itinerary.map((day, idx) => (
                    <div key={idx} className="mb-4 p-4 rounded bg-zinc-800">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">Day {day.dayNumber}</span>
                        <span className="text-xs text-gray-400">{day.confidenceLabel} ({day.confidenceScore}%)</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-300">Places:</span>
                        <ul className="list-disc pl-6">
                          {day.places.map((place, i) => (
                            <li key={i}>{place}</li>
                          ))}
                        </ul>
                      </div>
                      {day.budgetReality && (
                        <div className="mt-2 text-xs text-gray-400">
                          Budget: ₹{day.budgetReality.estimatedCost} ({day.budgetReality.category})
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

    </div>
  );
}

export default TripDetail;
