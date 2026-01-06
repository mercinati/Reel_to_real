import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import AddReel from './pages/AddReel';
import ReelDetail from './pages/ReelDetail';
import CreateTrip from './pages/CreateTrip';
import TripDetail from './pages/TripDetail';
import AddPlaces from './pages/AddPlaces';
import Itinerary from './pages/Itinerary';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trips/create" element={<CreateTrip />} />
        <Route path="/trips/:id" element={<TripDetail />} />
        <Route path="/reels/add" element={<AddReel />} />
        <Route path="/reels/:id" element={<ReelDetail />} />
        <Route path="/trips/:id/add-places" element={<AddPlaces />} />
        <Route path="/itinerary/:tripId" element={<Itinerary />} />
      </Routes>
    </Router>
  );
}

export default App;
