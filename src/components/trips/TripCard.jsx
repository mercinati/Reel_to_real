import { Link } from 'react-router-dom';

function TripCard({ trip }) {
  return (
    <Link to={`/trips/${trip.id}`} className="block">
      <div
        className="
          w-[230px]
          rounded-xl
          overflow-hidden
          bg-white
          border border-slate-300
          shadow-md
          hover:shadow-lg
          hover:-translate-y-0.5
          transition-all
          duration-200
        "
      >
        {/* Header */}
        <div className="h-32 bg-emerald-600 flex items-center justify-center">
          <h2 className="text-emerald-50 text-lg font-semibold tracking-wide truncate px-3">
            {trip.destinationCity}
          </h2>
        </div>

        {/* Body */}
        <div className="p-4 space-y-1">
          <p className="text-sm text-slate-600">
            Duration: <span className="font-medium">{trip.totalDays} days</span>
          </p>

          <p className="text-sm text-slate-700 capitalize">
            Style: {trip.travelStyle}
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
