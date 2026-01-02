import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockReels, mockTrips } from '../utils/mockData';
import ReelCard from '../components/reels/ReelCard';
import TripCard from '../components/trips/TripCard';
import EmptyState from '../components/common/EmptyState';
import '../css/Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 0' }}>
      <div style={{ width: '100%', maxWidth: 800, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="dashboard-header" style={{ alignSelf: 'flex-start', fontSize: '2.2rem', fontWeight: 700, marginBottom: 18 }}>Dashboard</div>
        <div className="dashboard-actions" style={{ display: 'flex', gap: 16, marginBottom: 32, alignSelf: 'flex-start' }}>
          <button onClick={() => navigate('/reels/add')}>Add Reel</button>
          <button onClick={() => navigate('/trips/create')}>Create Trip</button>
        </div>
        <div className="dashboard-section" style={{ width: '100%', marginBottom: 40 }}>
          <h3 style={{ color: '#6366f1', marginBottom: 18 }}>Saved Reels</h3>
          {mockReels.length === 0 ? (
            <EmptyState message="No reels saved yet." />
          ) : (
            mockReels.map(reel => <ReelCard key={reel.id} reel={reel} />)
          )}
        </div>
        <div className="dashboard-section" style={{ width: '100%' }}>
          <h3 style={{ color: '#6366f1', marginBottom: 18 }}>Created Trips</h3>
          {mockTrips.length === 0 ? (
            <EmptyState message="No trips created yet." />
          ) : (
            mockTrips.map(trip => <TripCard key={trip.id} trip={trip} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
