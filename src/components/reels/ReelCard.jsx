import React from 'react';
import '../../css/ReelCard.css';

function ReelCard({ reel }) {
  return ( 
    <div className="reelcard-container"> 
      <div className="reelcard-title">{reel.place} <span className="reelcard-platform">({reel.platform})</span></div> 
      <div className="reelcard-caption">{reel.caption}</div> 
      <div className="reelcard-status">{reel.status}</div> 
    </div> 
  ); 
}

export default ReelCard;
