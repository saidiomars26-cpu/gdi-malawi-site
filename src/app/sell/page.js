// src/app/sell/page.js
// NO 'use client' here – this is a Server Component

import SellFormClient from './SellFormClient';  // ← we'll create this next

export const metadata = {
  title: 'Sell Your Car - Global Drive Imports | Free Valuation in Malawi',
  description:
    'Get a fast, fair cash offer for your car. Free appraisal, no hidden fees, quick process in Blantyre and across Malawi.',
};

export default function SellPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hero / Intro Section – exactly as you had it */}
      <section className="bg-blue-800 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sell Your Car Today – Fast & Fair
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free, no-obligation valuation from Global Drive Imports. We buy quality local cars with transparent appraisals and instant cash offers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> Free consultation
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> No hidden costs
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✔</span> Quick cash payment
            </div>
          </div>
        </div>
      </section>

      {/* Form Section – now rendered by the client component */}
      <SellFormClient />

      {/* How It Works – unchanged */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            How It Works – Simple & Transparent
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-700 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Submit Details</h3>
              <p className="text-gray-700">Fill in your car info – takes under 2 minutes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-700 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Appraisal</h3>
              <p className="text-gray-700">We review photos/docs and give a fair market value.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl font-bold text-blue-700 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Get Offer & Cash</h3>
              <p className="text-gray-700">Accept our offer – get paid quickly and securely.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}