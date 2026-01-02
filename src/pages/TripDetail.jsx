import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/TripDetail.css';

function TripDetail() {
  const { id } = useParams();

  // Dummy data for prototype
  const trip = {
    city: 'Goa',
    startDate: '2026-01-10',
    endDate: '2026-01-15',
    style: 'relaxed',
    places: [],
  };

  return (
    <div className="container" style={{ minHeight: '100vh', maxWidth: 600 }}>
      <h2>Trip Detail</h2>
      <div><strong>Destination:</strong> {trip.city}</div>
      <div><strong>Dates:</strong> {trip.startDate} to {trip.endDate}</div>
      <div><strong>Style:</strong> {trip.style}</div>
      <div style={{ margin: '24px 0' }}>
        <h3>Places Added</h3>
        <div style={{ background: '#fff', padding: 16, borderRadius: 8, minHeight: 80 }}>
          {/* PlaceBadge components will go here */}
          <span>No places added yet.</span>
        </div>
        <button style={{ marginTop: 16 }}>Add Places</button>
        <button style={{ marginLeft: 16 }}>Generate Itinerary</button>
      </div>
    </div>
  );
}

export default TripDetail;
