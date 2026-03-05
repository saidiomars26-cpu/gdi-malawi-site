// src/app/buy/[slug]/page.js
'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

// For demo: Reuse the same mock data as the listings page
// In real app, this would come from a DB/API by slug
const mockCars = [
  {
    id: 1,
    slug: 'toyota-hilux-double-cab-2021',
    make: 'Toyota',
    model: 'Hilux Double Cab',
    year: 2021,
    priceMWK: 58000000,
    mileage: 62000,
    condition: 'excellent',
    grade: 'A',
    fuel: 'Diesel',
    transmission: 'Automatic',
    location: 'Lilongwe',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Well-maintained 2021 Toyota Hilux Double Cab with full service history. Excellent condition, no accidents, recently serviced with new tires and brakes. Ideal for business or family use.',
    features: [
      '4x4 Drive',
      'Leather Seats',
      'Reverse Camera',
      'Bluetooth Audio',
      'Alloy Wheels',
      'Tow Bar',
      'Roof Rails',
    ],
    sellerNotes: 'One owner since new. Regularly serviced at official dealer. Ready for immediate sale.',
  },
  {
    id: 2,
    slug: 'nissan-navara-pro-4x-2019',
    make: 'Nissan',
    model: 'Navara Pro-4X',
    year: 2019,
    priceMWK: 42000000,
    mileage: 98000,
    condition: 'good',
    grade: 'B',
    fuel: 'Diesel',
    transmission: 'Manual',
    location: 'Blantyre',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Reliable 2019 Nissan Navara Pro-4X in good overall condition. Minor cosmetic wear but mechanically sound. Full off-road package included.',
    features: [
      'Off-road Suspension',
      'Differential Lock',
      'Hill Descent Control',
      'Cruise Control',
      'Touchscreen Infotainment',
      'Bull Bar',
    ],
    sellerNotes: 'Recently serviced, new battery and brakes. Great for farm or adventure use.',
  },
    {
    id: 3,
    slug: 'mazda-bt-50-freestyle-2022',
    make: 'Mazda',
    model: 'BT-50 Freestyle',
    year: 2022,
    priceMWK: 65000000,
    mileage: 32000,
    condition: 'excellent',
    grade: 'A',
    fuel: 'Diesel',
    transmission: 'Automatic',
    location: 'Lilongwe',
    image: 'https://images.unsplash.com/photo-1502489597346-9e8c4d7d3c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    slug: 'isuzu-d-max-2020',
    make: 'Isuzu',
    model: 'D-Max',
    year: 2020,
    priceMWK: 48000000,
    mileage: 75000,
    condition: 'good',
    grade: 'B',
    fuel: 'Diesel',
    transmission: 'Manual',
    location: 'Mzuzu',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    slug: 'ford-ranger-wildtrak-2018',
    make: 'Ford',
    model: 'Ranger Wildtrak',
    year: 2018,
    priceMWK: 39000000,
    mileage: 135000,
    condition: 'fair',
    grade: 'C',
    fuel: 'Diesel',
    transmission: 'Automatic',
    location: 'Lilongwe',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    slug: 'toyota-fortuner-2019',
    make: 'Toyota',
    model: 'Fortuner',
    year: 2019,
    priceMWK: 72000000,
    mileage: 88000,
    condition: 'excellent',
    grade: 'A',
    fuel: 'Diesel',
    transmission: 'Automatic',
    location: 'Blantyre',
    image: 'https://images.unsplash.com/photo-1502489597346-9e8c4d7d3c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    slug: 'vw-amarok-highline-2020',
    make: 'Volkswagen',
    model: 'Amarok Highline',
    year: 2020,
    priceMWK: 55000000,
    mileage: 68000,
    condition: 'good',
    grade: 'B',
    fuel: 'Diesel',
    transmission: 'Automatic',
    location: 'Lilongwe',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    slug: 'mitsubishi-l200-triton-2021',
    make: 'Mitsubishi',
    model: 'L200 Triton',
    year: 2021,
    priceMWK: 49000000,
    mileage: 52000,
    condition: 'excellent',
    grade: 'A',
    fuel: 'Diesel',
    transmission: 'Manual',
    location: 'Mzuzu',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    slug: 'toyota-prado-tx-2017',
    make: 'Toyota',
    model: 'Prado TX',
    year: 2017,
    priceMWK: 68000000,
    mileage: 145000,
    condition: 'good',
    grade: 'B',
    fuel: 'Petrol',
    transmission: 'Automatic',
    location: 'Lilongwe',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    slug: 'nissan-x-trail-2016',
    make: 'Nissan',
    model: 'X-Trail',
    year: 2016,
    priceMWK: 32000000,
    mileage: 110000,
    condition: 'fair',
    grade: 'C',
    fuel: 'Petrol',
    transmission: 'CVT',
    location: 'Blantyre',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  // ... you can add the other 8 cars here with similar structure (description, features, sellerNotes)
  // For brevity, I'm showing only 2. Copy-paste the pattern for the rest using your existing mockCars data.
];

function GradingBadge({ grade }) {
  const colors = {
    A: 'bg-green-600',
    B: 'bg-blue-600',
    C: 'bg-yellow-600',
    D: 'bg-red-600',
  };

  return (
    <span className={`px-4 py-2 rounded-full text-white font-bold text-lg ${colors[grade] || 'bg-gray-500'}`}>
      Grade {grade}
    </span>
  );
}

export default function CarDetailPage() {
  const { slug } = useParams();
  const car = mockCars.find((c) => c.slug === slug);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder – later replace with Server Action or WhatsApp link
    console.log('Enquiry submitted:', { car: car?.slug, ...formData });
    setSubmitted(true);
  };

  if (!car) {
    return (
      <main className="min-h-screen bg-gray-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Car Not Found</h1>
        <p className="text-xl text-gray-700 mb-8">
          Sorry, we couldn't find that vehicle. It may have been sold or the link is incorrect.
        </p>
        <a
          href="/buy"
          className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition"
        >
          Back to All Cars
        </a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <section className="bg-blue-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <a href="/buy" className="text-blue-200 hover:text-white mb-6 inline-flex items-center text-lg">
            ← Back to All Cars
          </a>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                {car.make} {car.model} {car.year}
              </h1>
              <GradingBadge grade={car.grade} />
            </div>
            <div className="text-right">
              <p className="text-5xl md:text-6xl font-black">
                MWK {car.priceMWK.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Key Specs</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Year</span>
                  <span className="font-medium">{car.year}</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Mileage</span>
                  <span className="font-medium">{car.mileage.toLocaleString()} km</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Fuel</span>
                  <span className="font-medium">{car.fuel}</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Transmission</span>
                  <span className="font-medium">{car.transmission}</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{car.location}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600">Status</span>
                  <span className="font-medium">
                    {car.registered ? 'Registered' : 'Unregistered'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Interested in this vehicle? Send us an enquiry
          </h2>

          {submitted ? (
            <div className="bg-green-100 border border-green-300 text-green-800 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
              <p className="text-lg">
                Your enquiry has been sent. We'll contact you soon via phone or WhatsApp.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (WhatsApp preferred) *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+265 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message / Questions *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g. Interested in viewing this car, do you offer financing?..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition shadow-md"
                >
                  Send Enquiry
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  We'll respond within 24 hours. Your details are secure.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}