import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignUp.css';

function SignUp() {
  const navigate = useNavigate();

  // Dummy OAuth logic for prototype
  const handleOAuthRegister = () => {
    // Simulate register and redirect
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-title">Sign Up</div>
        <button className="signup-btn" onClick={handleOAuthRegister}>Sign up with Google</button>
        <button className="signup-btn" onClick={handleOAuthRegister}>Sign up with Facebook</button>
        <div style={{ marginTop: 24 }}>
          <span>Already have an account? </span>
          <button className="signup-link" onClick={() => navigate('/login')}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
