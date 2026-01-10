// mockData.js

export const mockReels = [
  {
    id: '1',
    url: 'https://instagram.com/reel/abc123',
    platform: 'Instagram',
    caption: 'Fort Aguada',
    hashtags: '#fort #goa',
    place: 'Goa beach',
    status: 'Analyzing',
  },
  {
    id: '2',
    url: 'https://instagram.com/reel/xyz456',
    platform: 'TikTok',
    caption: 'Fort Aguada',
    hashtags: '#fort #goa',
    place: 'Fort Aguada',
    status: 'Analyzing',
  },
  {
    id: '3',
    url: 'https://instagram.com/reel/abc123',
    platform: 'TikTok',
    caption: 'Fort Aguada',
    hashtags: '#fort #goa',
    place: 'Goa beach',
    status: 'Analyzing',
  },
];

export const mockTrips = [
  {
    id: '1',
    city: 'Goa',
    totalDays: 5,
    style: 'relaxed',
  },
  {
    id: '2',
    city: 'Bali',
    totalDays: 3,
    style: 'relaxed',
  },
  {
    id: '3',
    city: 'Tamilnadu',
    totalDays: 4,
    style: 'relaxed',
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
