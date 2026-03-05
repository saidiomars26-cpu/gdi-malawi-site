// src/app/services/page.js

export const metadata = {
  title: 'Our Services - Global Drive Imports',
  description: 'Quality car imports, fair appraisals, free valuations, credit facilitation and more in Malawi.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl mb-10 max-w-4xl mx-auto">
            We make car ownership simple, transparent, and accessible in Malawi — from imports to sales, appraisals to financing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Buy Cars */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6 text-blue-700">🚗</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Buy Quality Cars
            </h3>
            <p className="text-gray-700 mb-6">
              Browse our carefully selected imported and local vehicles — all professionally appraised and graded for complete transparency.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Wide range of makes and models
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Clear grading system
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Competitive pricing
              </li>
            </ul>
            <a href="/buy" className="text-blue-700 font-medium hover:underline">
              Browse Cars →
            </a>
          </div>

          {/* Service 2: Sell Your Car */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6 text-blue-700">💸</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Sell Your Car
            </h3>
            <p className="text-gray-700 mb-6">
              Get a fast, fair cash offer with our free, no-obligation valuation — quick process, no hidden fees.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Free professional appraisal
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Instant cash offers
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Hassle-free paperwork
              </li>
            </ul>
            <a href="/sell" className="text-blue-700 font-medium hover:underline">
              Get Free Valuation →
            </a>
          </div>

          {/* Service 3: Car Imports */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6 text-blue-700">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Vehicle Imports
            </h3>
            <p className="text-gray-700 mb-6">
              We source and import high-quality vehicles tailored to Malawi's roads and your needs.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Trusted international suppliers
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Customs and clearance handled
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Quality-checked before delivery
              </li>
            </ul>
            <a href="/contact" className="text-blue-700 font-medium hover:underline">
              Request Import →
            </a>
          </div>

          {/* Service 4: Credit Facilitation */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6 text-blue-700">🏦</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Credit & Financing
            </h3>
            <p className="text-gray-700 mb-6">
              We partner with banks to help you secure affordable credit for your next car — easier approvals, better rates.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Bank partnerships
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Guidance through process
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Beat forex challenges
              </li>
            </ul>
            <a href="/contact" className="text-blue-700 font-medium hover:underline">
              Get Financing Help →
            </a>
          </div>

          {/* Service 5: Free Consultation & Valuation */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6 text-blue-700">🆓</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Free Consultation & Valuation
            </h3>
            <p className="text-gray-700 mb-6">
              No-obligation advice and expert valuation — zero hidden costs, complete transparency.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Expert car knowledge
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Personalized recommendations
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> No pressure, no fees
              </li>
            </ul>
            <a href="/sell" className="text-blue-700 font-medium hover:underline">
              Book Free Valuation →
            </a>
          </div>

          {/* Service 6: Corporate & Fleet Solutions */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="text-5xl mb-6 text-blue-700">🏢</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Corporate & Fleet Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              Tailored services for businesses and organizations — bulk purchases, fleet appraisals, and custom imports.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Bulk discounts
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Dedicated account support
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Fleet management tools
              </li>
            </ul>
            <a href="/contact" className="text-blue-700 font-medium hover:underline">
              Contact for Corporate →
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for free advice — we're here to make your car journey easy.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Get in Touch →
          </a>
        </div>
      </section>
    </main>
  );
}