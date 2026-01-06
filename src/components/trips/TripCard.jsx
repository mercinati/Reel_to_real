import React from 'react';
import { Link } from 'react-router-dom';

function TripCard({ trip }) {
  return (
    <Link
      to={`/trips/${trip.id}`}
      className="block"
    >
      <div className="w-[260px] mx-auto overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">

        {/* Top Visual Section */}
        <div className="h-36 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
          <span className="text-white text-lg font-semibold truncate text-center px-2">
            {trip.city}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-teal-600 break-words">
            {trip.city}
          </h3>

          <p className="text-sm text-slate-600">
            Duration: {trip.totalDays} days
          </p>

          <p className="text-sm text-slate-700 capitalize break-words">
            {trip.style}
          </p>

          <p className="text-sm text-slate-600 line-clamp-2">
            Places: {trip.places ? trip.places.join(', ') : 'N/A'}
          </p>
        </div>

      </div>
    </Link>
  );
}

export default TripCard;
