import React, { useState } from 'react';
import '../css/CreateTrip.css';

function CreateTrip() {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [style, setStyle] = useState('relaxed');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Trip created!');
    setCity(''); setStartDate(''); setEndDate(''); setStyle('relaxed');
  };

  return (
    <div className="container" style={{ minHeight: '100vh', maxWidth: 500 }}>
      <h2>Create Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>Destination City</label>
        <input type="text" value={city} onChange={e => setCity(e.target.value)} required />
        <label>Start Date</label>
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required />
        <label>End Date</label>
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required />
        <label>Travel Style</label>
        <select value={style} onChange={e => setStyle(e.target.value)}>
          <option value="relaxed">Relaxed</option>
          <option value="packed">Packed</option>
        </select>
        <button type="submit">Create Trip</button>
      </form>
      {status && <div style={{ marginTop: 24, color: '#007bff' }}>{status}</div>}
    </div>
  );
}

export default CreateTrip;
