import React, { useState } from 'react';

function CreateTrip() {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [style, setStyle] = useState('relaxed');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Trip created!');
    setCity('');
    setStartDate('');
    setEndDate('');
    setStyle('relaxed');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center px-4 pt-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-3">
          <h2 className="text-lg font-semibold text-white">
            Create Trip
          </h2>
          <p className="text-xs text-slate-300">
            Plan your journey from reels to reality
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3">

          {/* City */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Destination City
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              placeholder="Goa"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Style */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Travel Style
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="relaxed">Relaxed</option>
              <option value="packed">Packed</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 text-white py-2 text-sm font-medium
                       hover:bg-indigo-700 transition"
          >
            Create Trip
          </button>
        </form>

        {/* Status */}
        {status && (
          <div className="px-5 pb-4">
            <div className="rounded-md bg-slate-50 border border-slate-200 text-slate-700 px-3 py-2 text-xs">
              {status}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default CreateTrip;
