// src/app/buy/page.js
'use client';

import { useState } from 'react';

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
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    imported: true,
    lowMileage: true,
    registered: true,
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
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    imported: false,
    lowMileage: false,
    registered: false,
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
    featured: true,
    imported: true,
    lowMileage: true,
    registered: true,
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
    featured: false,
    imported: false,
    lowMileage: false,
    registered: true,
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
    featured: false,
    imported: true,
    lowMileage: false,
    registered: false,
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
    featured: true,
    imported: true,
    lowMileage: false,
    registered: true,
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
    featured: false,
    imported: true,
    lowMileage: true,
    registered: true,
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
    featured: false,
    imported: false,
    lowMileage: true,
    registered: false,
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
    featured: false,
    imported: true,
    lowMileage: false,
    registered: true,
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
    featured: false,
    imported: false,
    lowMileage: false,
    registered: false,
  },
];

function GradingBadge({ grade }) {
  const colors = {
    A: 'bg-green-600',
    B: 'bg-blue-600',
    C: 'bg-yellow-600',
    D: 'bg-red-600',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-white font-semibold text-sm shadow ${colors[grade] || 'bg-gray-500'}`}>
      Grade {grade}
    </span>
  );
}

function SpecBadge({ icon, label }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-medium border border-gray-300">
      {icon} {label}
    </span>
  );
}

function TagBadge({ label, color = 'bg-gray-700 text-white' }) {
  return (
    <span className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm ${color} whitespace-nowrap border border-gray-400`}>
      {label}
    </span>
  );
}

export default function BuyPage() {
  const [makeFilter, setMakeFilter] = useState('All Makes');
  const [priceFilter, setPriceFilter] = useState('All Prices');
  const [yearFilter, setYearFilter] = useState('All Years');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('newest');

  let processedCars = mockCars.filter((car) => {
    let matches = true;

    if (makeFilter !== 'All Makes' && car.make !== makeFilter) matches = false;
    if (priceFilter !== 'All Prices') {
      if (priceFilter === 'Under 30M' && car.priceMWK >= 30000000) matches = false;
      if (priceFilter === '30M - 50M' && (car.priceMWK < 30000000 || car.priceMWK > 50000000)) matches = false;
      if (priceFilter === 'Over 50M' && car.priceMWK <= 50000000) matches = false;
    }
    if (yearFilter !== 'All Years') {
      if (yearFilter === '2020+' && car.year < 2020) matches = false;
      if (yearFilter === '2015-2019' && (car.year < 2015 || car.year > 2019)) matches = false;
      if (yearFilter === 'Before 2015' && car.year >= 2015) matches = false;
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      if (
        !car.make.toLowerCase().includes(query) &&
        !car.model.toLowerCase().includes(query) &&
        !car.year.toString().includes(query)
      ) {
        matches = false;
      }
    }

    return matches;
  });

  processedCars = [...processedCars].sort((a, b) => {
    if (sortOption === 'price-low') return a.priceMWK - b.priceMWK;
    if (sortOption === 'price-high') return b.priceMWK - a.priceMWK;
    if (sortOption === 'newest') return b.year - a.year;
    if (sortOption === 'oldest') return a.year - b.year;
    if (sortOption === 'registered-first') return b.registered - a.registered;
    if (sortOption === 'unregistered-first') return a.registered - b.registered;
    return 0;
  });

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hero */}
      <section className="bg-blue-800 text-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Browse Quality Cars for Sale</h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Professionally appraised vehicles with transparent grading and fair pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <SpecBadge icon="✅" label="Transparent Grading" />
            <SpecBadge icon="💰" label="Best Prices" />
            <SpecBadge icon="🏦" label="Finance Available" />
          </div>
        </div>
      </section>

      {/* Compact, visible Filters Row */}
      <section className="sticky top-0 z-10 bg-white border-b shadow-sm py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
            {/* Search */}
            <div className="w-full max-w-[220px]">
              <input
                type="text"
                placeholder="Search make, model, year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-lg text-sm text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>

            {/* Make */}
            <div className="w-full max-w-[160px]">
              <select
                value={makeFilter}
                onChange={(e) => setMakeFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
              >
                <option value="All Makes">Make</option>
                <option value="Toyota">Toyota</option>
                <option value="Nissan">Nissan</option>
                <option value="Mazda">Mazda</option>
                <option value="Isuzu">Isuzu</option>
                <option value="Ford">Ford</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Mitsubishi">Mitsubishi</option>
              </select>
            </div>

            {/* Price */}
            <div className="w-full max-w-[160px]">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
              >
                <option value="All Prices">Price</option>
                <option value="Under 30M">Under 30M</option>
                <option value="30M - 50M">30M - 50M</option>
                <option value="Over 50M">Over 50M</option>
              </select>
            </div>

            {/* Year */}
            <div className="w-full max-w-[140px]">
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
              >
                <option value="All Years">Year</option>
                <option value="2020+">2020+</option>
                <option value="2015-2019">2015-2019</option>
                <option value="Before 2015">Before 2015</option>
              </select>
            </div>

            {/* Sort */}
            <div className="w-full max-w-[180px]">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
              >
                <option value="newest">Sort: Newest</option>
                <option value="oldest">Sort: Oldest</option>
                <option value="price-low">Sort: Price ↑</option>
                <option value="price-high">Sort: Price ↓</option>
                <option value="registered-first">Sort: Registered</option>
                <option value="unregistered-first">Sort: Unregistered</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Car tiles */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Available Vehicles ({processedCars.length})
          </h2>

          {processedCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {processedCars.map((car) => (
                <a
                  key={car.id}
                  href={`/buy/${car.slug}`}
                  className="group bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col h-[460px] hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative w-full pt-[56.25%] overflow-hidden flex-shrink-0 bg-gray-200">
                    <img
                      src={car.image}
                      alt={`${car.make} ${car.model}`}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x225/cccccc/ffffff?text=No+Image';
                      }}
                    />
                    {car.featured && (
                      <TagBadge label="Featured" color="bg-yellow-500 text-white absolute top-3 left-3 shadow-sm" />
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2 min-h-[3rem]">
                      {car.make} {car.model}
                    </h3>

                    <p className="text-xl font-bold text-blue-700 mb-3">
                      MWK {car.priceMWK.toLocaleString()}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <SpecBadge icon="📅" label={car.year} />
                      <SpecBadge icon="🛣️" label={`${car.mileage.toLocaleString()} km`} />
                      <SpecBadge icon="⛽" label={car.fuel} />
                      <SpecBadge icon="⚙️" label={car.transmission} />
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4 min-h-[60px] items-start">
                      {car.imported && <TagBadge label="Imported" color="bg-purple-600 text-white" />}
                      {car.lowMileage && <TagBadge label="Low Mileage" color="bg-green-600 text-white" />}
                      {car.mileage > 120000 && <TagBadge label="High Mileage" color="bg-orange-600 text-white" />}
                      {car.registered ? (
                        <TagBadge label="Registered" color="bg-green-600 text-white" />
                      ) : (
                        <TagBadge label="Unregistered" color="bg-red-600 text-white" />
                      )}
                      <TagBadge label={car.location} color="bg-gray-600 text-white" />
                    </div>

                    <div className="mt-auto">
                      <span className="text-blue-700 font-medium group-hover:underline text-sm">
                        View Details →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">No vehicles match your search or filters.</p>
              <p className="text-gray-500">Try adjusting the search or filters above.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}