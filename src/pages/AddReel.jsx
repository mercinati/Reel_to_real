import React, { useState } from 'react';

function AddReel() {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [override, setOverride] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Reel saved. We’re analyzing this place.");
    setUrl('');
    setPlatform('Instagram');
    setCaption('');
    setHashtags('');
    setOverride('');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center px-4 pt-10">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-3">
          <h1 className="text-lg font-semibold text-white">
            Add Reel
          </h1>
          <p className="text-xs text-slate-300">
            Paste a reel link to analyze the place
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3">

          {/* Reel URL */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Reel URL
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              placeholder="https://www.instagram.com/reel/..."
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Platform */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Platform
            </label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Instagram</option>
              <option>TikTok</option>
            </select>
          </div>

          {/* Caption */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Caption <span className="text-slate-400">(optional)</span>
            </label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Hashtags */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Hashtags <span className="text-slate-400">(optional)</span>
            </label>
            <input
              type="text"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Manual Override */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Manual Place Override <span className="text-slate-400">(optional)</span>
            </label>
            <input
              type="text"
              value={override}
              onChange={(e) => setOverride(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 text-white py-2 text-sm font-medium
                       hover:bg-indigo-700 transition"
          >
            Save Reel
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

export default AddReel;
