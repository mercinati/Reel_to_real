import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/Itinerary.css';

function Itinerary() {
  const { tripId } = useParams();

  // Dummy itinerary for prototype
  const itinerary = [
    {
      day: 1,
      places: ['Goa Beach', 'Fort Aguada'],
      reason: 'Best weather, less crowd',
      weather: 'Sunny',
      budget: '₹2000',
      safety: 'Safe',
    },
    {
      day: 2,
      places: ['Baga Night Market'],
      reason: 'Night event',
      weather: 'Clear',
      budget: '₹1500',
      safety: 'Safe',
    },
  ];

  return (
    <div className="container" style={{ minHeight: '100vh', maxWidth: 700 }}>
      <h2>Itinerary</h2>
      {itinerary.map(dayPlan => (
        <div key={dayPlan.day} style={{ background: '#fff', padding: 16, borderRadius: 8, marginBottom: 24 }}>
          <h3>Day {dayPlan.day}</h3>
          <div><strong>Places:</strong> {dayPlan.places.join(', ')}</div>
          <div><strong>Reason:</strong> {dayPlan.reason}</div>
          <div><strong>Weather:</strong> <span style={{ color: '#007bff' }}>{dayPlan.weather}</span></div>
          <div><strong>Budget Reality Meter:</strong> {dayPlan.budget}</div>
          <div><strong>Safety Notes:</strong> {dayPlan.safety}</div>
        </div>
      ))}
    </div>
  );
}

export default Itinerary;
