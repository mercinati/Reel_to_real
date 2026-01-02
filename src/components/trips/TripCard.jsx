import React from 'react';
import '../../css/TripCard.css';

function TripCard({ trip }) {
  return (
    <div className="tripcard-container">
      <div className="tripcard-title">{trip.city}</div>
      <div className="tripcard-dates">{trip.startDate} to {trip.endDate}</div>
      <div className="tripcard-style">{trip.style}</div>
      <div className="tripcard-places">Places: {trip.places.join(', ')}</div>
    </div>
  );
}

export default TripCard;
