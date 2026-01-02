import React from 'react';
import '../../index.css';

function EmptyState({ message }) {
  return (
    <div style={{ textAlign: 'center', padding: 32, color: '#888' }}>
      <span>{message}</span>
    </div>
  );
}

export default EmptyState;
