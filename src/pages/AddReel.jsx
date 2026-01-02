import React, { useState } from 'react';
import '../css/AddReel.css';

function AddReel() {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [override, setOverride] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Reel saved. We’re analyzing this place.');
    setUrl(''); setPlatform('Instagram'); setCaption(''); setHashtags(''); setOverride('');
  };

  return (
    <div className="addreel-container">
      <div className="addreel-title">Add Reel</div>
      <form className="addreel-form" onSubmit={handleSubmit}>
        <label>Reel URL</label>
        <input type="url" value={url} onChange={e => setUrl(e.target.value)} required />
        <label>Platform</label>
        <select value={platform} onChange={e => setPlatform(e.target.value)}>
          <option>Instagram</option>
          <option>TikTok</option>
        </select>
        <label>Caption (optional)</label>
        <input type="text" value={caption} onChange={e => setCaption(e.target.value)} />
        <label>Hashtags (optional)</label>
        <input type="text" value={hashtags} onChange={e => setHashtags(e.target.value)} />
        <label>Manual place override (optional)</label>
        <input type="text" value={override} onChange={e => setOverride(e.target.value)} />
        <button type="submit">Save Reel</button>
      </form>
      {status && <div className="addreel-status">{status}</div>}
    </div>
  );
}

export default AddReel;
