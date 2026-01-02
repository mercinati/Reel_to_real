import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignIn.css';

function SignIn() {
  const navigate = useNavigate();

  // Dummy OAuth logic for prototype
  const handleOAuthLogin = () => {
    // Simulate login and redirect
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-title">Sign In</div>
        <button className="signin-btn" onClick={handleOAuthLogin}>Sign in with Google</button>
        <button className="signin-btn" onClick={handleOAuthLogin}>Sign in with Facebook</button>
        <div style={{ marginTop: 24 }}>
          <span>Don't have an account? </span>
          <button className="signin-link" onClick={() => navigate('/register')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
