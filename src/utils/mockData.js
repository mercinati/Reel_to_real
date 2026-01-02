// mockData.js

export const mockReels = [
  {
    id: '1',
    url: 'https://instagram.com/reel/abc123',
    platform: 'Instagram',
    caption: 'Goa Beach Party',
    hashtags: '#goa #beach',
    place: 'Goa Beach',
    status: 'Enriched',
  },
  {
    id: '2',
    url: 'https://instagram.com/reel/xyz456',
    platform: 'Instagram',
    caption: 'Fort Aguada',
    hashtags: '#fort #goa',
    place: 'Fort Aguada',
    status: 'Analyzing',
  },
];

export const mockTrips = [
  {
    id: '1',
    city: 'Goa',
    startDate: '2026-01-10',
    endDate: '2026-01-15',
    style: 'relaxed',
    places: ['Goa Beach', 'Fort Aguada'],
  },
];

export const mockItinerary = [
  {
    day: 1,
    places: ['Goa Beach', 'Fort Aguada'],
    reason: 'Best weather, less crowd',
    weather: 'Sunny',
    budget: '₹2000',
    safety: 'Safe',
  },
  {
    day: 2,
    places: ['Baga Night Market'],
    reason: 'Night event',
    weather: 'Clear',
    budget: '₹1500',
    safety: 'Safe',
  },
];
