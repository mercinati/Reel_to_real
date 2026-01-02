import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/ReelDetail.css';

function ReelDetail() {
  const { id } = useParams();

  // Dummy data for prototype
  const reel = {
    videoUrl: '',
    place: 'Goa Beach',
    activity: 'Beach Party',
    crowd: 'Moderate',
    safety: 'Safe',
    enrichment: 'In Progress',
  };

  return (
    <div className="container" style={{ minHeight: '100vh', maxWidth: 600 }}>
      <h2>Reel Detail</h2>
      <div style={{ marginBottom: 24 }}>
        <div style={{ background: '#eee', height: 200, borderRadius: 8, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Reel video placeholder */}
          <span>Reel Video</span>
        </div>
        <div><strong>Detected Place:</strong> {reel.place}</div>
        <div><strong>Activity:</strong> {reel.activity}</div>
        <div><strong>Crowd:</strong> {reel.crowd}</div>
        <div><strong>Safety:</strong> {reel.safety}</div>
        <div><strong>Enrichment Status:</strong> <span style={{ color: '#007bff' }}>{reel.enrichment}</span></div>
      </div>
    </div>
  );
}

export default ReelDetail;
