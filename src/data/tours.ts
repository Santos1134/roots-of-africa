import kpataweeImage from '../Assets/kpatawee.jpg';
import image4 from '../Assets/4.jpeg';
import image6 from '../Assets/6.jpeg';
import image10 from '../Assets/10.jpeg';
import image11 from '../Assets/11.jpeg';
import image12 from '../Assets/12.jpeg';

export interface Tour {
  id: string;
  name: string;
  location: string;
  price: number;
  shortDescription: string;
  image: string;
  duration: string;
  highlights: string[];
  itinerary: {
    time: string;
    title: string;
    description: string;
  }[];
  included: string[];
  notIncluded?: string[];
}

export const tours: Tour[] = [
  {
    id: 'kpatawee',
    name: 'Kpatawee Waterfall Day Trip',
    location: 'Bong County',
    price: 455,
    shortDescription: 'A full day of nature, culture, and community.',
    image: kpataweeImage,
    duration: 'Full Day (7 AM - 4 PM)',
    highlights: [
      'Visit one of Liberia\'s most breathtaking natural wonders',
      'Learn about cultural significance to the local tribe',
      'Explore nearby rice farms',
      'Taste traditional local drinks and snacks'
    ],
    itinerary: [
      {
        time: '7:00 AM',
        title: 'Departure from Hotel (Monrovia)',
        description: 'Your guide will pick you up from your hotel in Monrovia. After a quick briefing, you\'ll begin your scenic 3-hour journey to Bong County. Along the way, enjoy views of Liberia\'s countryside, local villages, and lush green forests.'
      },
      {
        time: '10:00 AM',
        title: 'Arrival at Kpatawee Waterfall',
        description: 'Arrive at the beautiful Kpatawee Waterfall, one of Liberia\'s most breathtaking natural wonders. You\'ll be welcomed by the sound of rushing water and the cool forest breeze.'
      },
      {
        time: '10:15 AM',
        title: 'Guided Tour and Cultural Experience',
        description: 'Your tour guide will share the fascinating story and history behind the Kpatawee Waterfall and its cultural significance to the local tribe in Bong County. Learn about traditional beliefs, local customs, and how the waterfall serves as a symbol of life and heritage for the community.'
      },
      {
        time: '11:00 AM',
        title: 'Exploration and Relaxation',
        description: 'Spend time exploring the waterfall area — take photos, enjoy the refreshing water, or simply relax surrounded by nature. You\'ll also visit nearby rice farms and learn about the local farming techniques.'
      },
      {
        time: '12:00 PM',
        title: 'Taste of Local Life',
        description: 'Try traditional local drinks made by the villagers and, if available, sample some homemade Liberian snacks. This is a great opportunity to interact with locals and experience authentic Liberian hospitality.'
      },
      {
        time: '1:00 PM',
        title: 'Departure for Monrovia',
        description: 'Begin your return journey to Monrovia, taking in the countryside views and reflecting on your memorable experience at Kpatawee.'
      },
      {
        time: '4:00 PM',
        title: 'Arrival Back at Hotel',
        description: 'Arrive back at your hotel in Monrovia. Your guide will ensure you are safely dropped off.'
      }
    ],
    included: [
      'Hotel pickup and drop-off',
      'Professional local guide',
      'Private transportation',
      'Entrance fees',
      'Cultural interpretation'
    ]
  },
  {
    id: 'lake-piso',
    name: 'Lake Piso & Grand Cape Mount',
    location: 'Grand Cape Mount County',
    price: 790,
    shortDescription: 'Coastal beauty and cultural immersion.',
    image: image6,
    duration: 'Full Day',
    highlights: [
      'See the stunning Lake Piso',
      'Visit Fanti Town for local fishing experience',
      'Try local food at Nana\'s Lodge',
      'Explore a traditional local town'
    ],
    itinerary: [
      {
        time: '7:00 AM',
        title: 'Departure from Hotel (Monrovia)',
        description: 'Your guide will pick you up from your hotel and begin the scenic journey to Grand Cape Mount County.'
      },
      {
        time: 'Morning',
        title: 'Lake Piso Visit',
        description: 'Experience the serenity of Lake Piso, where the lake meets the ocean. Take in the beautiful coastal scenery and learn about the area\'s significance.'
      },
      {
        time: 'Midday',
        title: 'Fanti Town Fishing Experience',
        description: 'Visit Fanti Town to see local fishing firsthand. Watch fishermen at work and learn about traditional fishing methods.'
      },
      {
        time: 'Afternoon',
        title: 'Nana\'s Lodge & Local Town',
        description: 'Enjoy authentic local food at Nana\'s Lodge and visit a traditional local town to experience the culture and daily life of the community.'
      }
    ],
    included: [
      'Hotel pickup and drop-off',
      'Professional local guide',
      'Private transportation',
      'Entrance fees'
    ]
  },
  {
    id: 'monrovia',
    name: 'Monrovia City & Culture Tour',
    location: 'Monrovia',
    price: 350,
    shortDescription: 'History, culture, and urban exploration.',
    image: image11,
    duration: 'Full Day',
    highlights: [
      'Visit Ducor Hotel ruins and learn about the civil war',
      'See Capitol Hill and historical monuments',
      'Explore Providence Island',
      'Walk through Waterside Market',
      'Visit West Point community and fishing beach'
    ],
    itinerary: [
      {
        time: 'Morning',
        title: 'Ducor Hill & Ducor Hotel Ruins',
        description: 'Visit the abandoned Ducor Hotel, one of Liberia\'s most iconic war-era landmarks. Discussion on pre-war Monrovia, the civil war period, and post-war recovery. Enjoy panoramic views of the city and coastline.'
      },
      {
        time: 'Morning',
        title: 'Capitol Hill',
        description: 'Brief historical context on Liberia\'s founding. External views of the Capitol Building, Executive Mansion, and Temple of Justice.'
      },
      {
        time: 'Morning',
        title: 'Unification Park',
        description: 'Visit the oceanfront memorial site and execution monument. Short, factual explanation of its significance in Liberia\'s modern history.'
      },
      {
        time: 'Midday',
        title: 'Providence Island',
        description: 'Walk through the historic site where freed slaves first settled. Explanation of why Liberia\'s political and cultural structure mirrors the U.S.'
      },
      {
        time: 'Midday',
        title: 'National Museum & Waterside Market',
        description: 'Overview of Liberia\'s ethnic groups, traditional artifacts, and national history. Guided walk through Monrovia\'s busiest market.'
      },
      {
        time: 'Afternoon',
        title: 'West Point Community',
        description: 'Guided walk through one of Monrovia\'s most densely populated communities. Discussion on urban resilience, post-war realities, and community life.'
      },
      {
        time: 'Afternoon',
        title: 'West Point Fishing Beach',
        description: 'Observe traditional fishing canoes returning from sea. Interaction with fishermen and insight into coastal livelihoods.'
      }
    ],
    included: [
      'Professional local guide for the full day',
      'Private transportation within Monrovia',
      'Historical and cultural interpretation',
      'Community coordination'
    ],
    notIncluded: [
      'Meals and refreshments',
      'Entrance fees (if applicable)'
    ]
  },
  {
    id: 'gbaota',
    name: 'Gbaota Village Immersion',
    location: 'Bong County',
    price: 220,
    shortDescription: 'Authentic village life and traditions.',
    image: image4,
    duration: 'Full Day',
    highlights: [
      'Deep cultural exchange with local community',
      'Traditional welcome dances',
      'Cook with locals',
      'Visit the sacred fish river',
      'Taste fresh palm wine'
    ],
    itinerary: [
      {
        time: 'Morning',
        title: 'Departure and Cultural Stops',
        description: 'Journey from Monrovia to Gbaota Village with cultural stops in Kakata and Gbarnga along the way.'
      },
      {
        time: 'Midday',
        title: 'Village Welcome',
        description: 'Arrive at Gbaota Village and experience an authentic welcome with traditional dances and greetings from the community.'
      },
      {
        time: 'Afternoon',
        title: 'Cultural Immersion',
        description: 'Participate in village activities - cook with locals, visit the sacred fish river, taste palm wine, and learn village life firsthand.'
      }
    ],
    included: [
      'Transportation',
      'Water',
      'Internet on the car',
      'Music',
      'Branded T-shirt'
    ]
  },
  {
    id: 'bomi-lake',
    name: 'Bomi Lake (Blue Lake) Tour',
    location: 'Bomi County',
    price: 500,
    shortDescription: 'Visit the stunning blue lake and local villages.',
    image: image10,
    duration: 'Full Day',
    highlights: [
      'See the stunning blue waters of Bomi Lake',
      'Learn about the lake\'s history and formation',
      'Visit local villages',
      'Experience Bomi County culture'
    ],
    itinerary: [
      {
        time: 'Morning',
        title: 'Departure from Monrovia',
        description: 'Begin your journey to Bomi County, passing through scenic landscapes and local communities.'
      },
      {
        time: 'Midday',
        title: 'Bomi Lake Experience',
        description: 'Arrive at the stunning Blue Lake and spend time exploring the area. Learn about the lake\'s unique formation and significance.'
      },
      {
        time: 'Afternoon',
        title: 'Village Visit',
        description: 'Visit local villages in Bomi County and experience the culture and hospitality of the region.'
      }
    ],
    included: [
      'Hotel pickup and drop-off',
      'Professional local guide',
      'Private transportation'
    ]
  },
  {
    id: 'libassa',
    name: 'Libassa Marine Sanctuary',
    location: 'Margibi County',
    price: 300,
    shortDescription: 'Beach, pool, and marine sanctuary experience.',
    image: image12,
    duration: 'Full Day',
    highlights: [
      'Relax at the beach',
      'Swim in the pool',
      'Explore the marine sanctuary',
      'Enjoy coastal dining'
    ],
    itinerary: [
      {
        time: 'Morning',
        title: 'Departure to Libassa',
        description: 'Journey from Monrovia to Libassa Marine Sanctuary in Margibi County.'
      },
      {
        time: 'Day',
        title: 'Beach and Pool',
        description: 'Spend the day relaxing at the beach, swimming in the pool, and enjoying the beautiful coastal setting.'
      },
      {
        time: 'Afternoon',
        title: 'Marine Sanctuary',
        description: 'Explore the marine sanctuary and learn about local marine life and conservation efforts.'
      }
    ],
    included: [
      'Hotel pickup and drop-off',
      'Professional local guide',
      'Private transportation'
    ]
  }
];
