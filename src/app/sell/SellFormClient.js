// src/app/sell/SellFormClient.js
'use client';

import { useState } from 'react';

export default function SellFormClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    transmission: '',
    fuelType: '',
    color: '',
    location: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Car Valuation Request*

Name: ${formData.name}
Phone/WhatsApp: ${formData.phone}
Make: ${formData.make}
Model: ${formData.model}
Year: ${formData.year}
Mileage: ${formData.mileage} km
Condition: ${formData.condition}
Transmission: ${formData.transmission || 'Not specified'}
Fuel Type: ${formData.fuelType || 'Not specified'}
Color: ${formData.color || 'Not specified'}
Location: ${formData.location || 'Not specified'}

Additional Details:
${formData.details || 'None provided'}
    `.trim();

    const phoneNumber = '265999154556';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Tell Us About Your Car – Free Valuation in Minutes
        </h2>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
            <p className="text-lg text-gray-700 mb-6">
              Your details have been sent to WhatsApp. If it didn't open automatically, click below.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Submit Another Vehicle
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-500 invalid:border-red-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-500 invalid:border-red-500"
                  placeholder="+265 999 15 45 56"
                />
              </div>
            </div>

            {/* Car Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="make" className="block text-sm font-medium text-gray-900 mb-1">
                  Make *
                </label>
                <input
                  type="text"
                  name="make"
                  id="make"
                  value={formData.make}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 invalid:border-red-500"
                  placeholder="Toyota"
                />
              </div>

              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-900 mb-1">
                  Model *
                </label>
                <input
                  type="text"
                  name="model"
                  id="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 invalid:border-red-500"
                  placeholder="Hilux"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-900 mb-1">
                  Year *
                </label>
                <input
                  type="number"
                  name="year"
                  id="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  min="1980"
                  max={new Date().getFullYear() + 1}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 invalid:border-red-500"
                  placeholder="2020"
                />
              </div>

              <div>
                <label htmlFor="mileage" className="block text-sm font-medium text-gray-900 mb-1">
                  Mileage (km) *
                </label>
                <input
                  type="number"
                  name="mileage"
                  id="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 invalid:border-red-500"
                  placeholder="85000"
                />
              </div>

              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-900 mb-1">
                  General Condition *
                </label>
                <select
                  name="condition"
                  id="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 invalid:border-red-500"
                >
                  <option value="">Select...</option>
                  <option value="excellent">Excellent – like new</option>
                  <option value="good">Good – minor wear</option>
                  <option value="fair">Fair – some repairs needed</option>
                  <option value="poor">Poor – major issues</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="transmission" className="block text-sm font-medium text-gray-900 mb-1">
                  Transmission
                </label>
                <select
                  name="transmission"
                  id="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                >
                  <option value="">Select...</option>
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="fuelType" className="block text-sm font-medium text-gray-900 mb-1">
                  Fuel Type
                </label>
                <select
                  name="fuelType"
                  id="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                >
                  <option value="">Select...</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="electric">Electric</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="color" className="block text-sm font-medium text-gray-900 mb-1">
                  Exterior Color
                </label>
                <input
                  type="text"
                  name="color"
                  id="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="Silver, Black, etc."
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-1">
                  Location in Malawi
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="Blantyre, Lilongwe, Mzuzu, etc."
                />
              </div>
            </div>

            {/* File upload */}
            <div>
              <label htmlFor="photos" className="block text-sm font-medium text-gray-900 mb-1">
                Upload Photos of the Car (optional – helps us give a more accurate offer)
              </label>
              <input
                type="file"
                name="photos"
                id="photos"
                multiple
                accept="image/*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 text-gray-900"
              />
              <p className="mt-1 text-xs text-gray-600">
                JPG, PNG – max 5MB per photo recommended
              </p>
            </div>

            {/* Additional Details */}
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-900 mb-1">
                Additional Details (optional – e.g. service history, accidents, extras)
              </label>
              <textarea
                name="details"
                id="details"
                rows={4}
                value={formData.details}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                placeholder="e.g. Full service history, new tires, accident-free..."
              />
            </div>

            {/* Submit */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition shadow-md w-full sm:w-auto"
              >
                Send to WhatsApp
              </button>
              <p className="mt-4 text-sm text-gray-600">
                Your details will open in WhatsApp. We'll respond quickly.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}