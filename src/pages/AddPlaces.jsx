import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/AddPlaces.css';

function AddPlaces() {
  const { id } = useParams();
  const [selected, setSelected] = useState([]);
  const [priority, setPriority] = useState({});
  const [status, setStatus] = useState('');

  // Dummy places for prototype
  const places = [
    { id: '1', name: 'Goa Beach' },
    { id: '2', name: 'Fort Aguada' },
    { id: '3', name: 'Baga Night Market' },
  ];

  const handleSelect = (placeId) => {
    setSelected(prev => prev.includes(placeId) ? prev.filter(id => id !== placeId) : [...prev, placeId]);
  };

  const handlePriority = (placeId, value) => {
    setPriority(prev => ({ ...prev, [placeId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Places added to trip!');
  };

  return (
    <div className="container" style={{ minHeight: '100vh', maxWidth: 500 }}>
      <h2>Add Places to Trip</h2>
      <form onSubmit={handleSubmit}>
        {places.map(place => (
          <div key={place.id} style={{ marginBottom: 16, background: '#fff', padding: 12, borderRadius: 6 }}>
            <label>
              <input type="checkbox" checked={selected.includes(place.id)} onChange={() => handleSelect(place.id)} />
              {place.name}
            </label>
            <select value={priority[place.id] || 'normal'} onChange={e => handlePriority(place.id, e.target.value)} style={{ marginLeft: 16 }}>
              <option value="high">High</option>
              <option value="normal">Normal</option>
              <option value="low">Low</option>
            </select>
          </div>
        ))}
        <button type="submit">Add Selected Places</button>
      </form>
      {status && <div style={{ marginTop: 24, color: '#007bff' }}>{status}</div>}
    </div>
  );
}

export default AddPlaces;
