import React from 'react';
import '../index.css';

function OAuthButton({ provider, onClick }) {
  const icons = {
    Google: '🔵',
    Facebook: '🔷',
  };
  return (
    <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
      <span>{icons[provider]}</span>
      <span>Sign in with {provider}</span>
    </button>
  );
}

export default OAuthButton;
