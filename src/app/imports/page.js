// src/app/imports/page.js

export const metadata = {
  title: 'Vehicle Imports - Global Drive Imports | Japan, Dubai, UK & SA',
  description: 'Consultation on the import of high-quality vehicles from Japan, Dubai, UK, and South Africa — tailored to Malawi’s roads with full customs clearance and quality assurance.',
};

export default function VehicleImportsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-blue-800 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vehicle Imports from Top Markets
          </h1>
          <p className="text-xl mb-10 max-w-4xl mx-auto">
            We offer consultation on import of reliable, high-quality vehicles directly from Japan, Dubai, the United Kingdom, and South Africa — perfectly suited to Malawi’s roads and your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="font-bold mr-2">Japan</span> – Reliable & Fuel-Efficient
            </div>
            <div className="flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="font-bold mr-2">Dubai</span> – Luxury & Low Mileage
            </div>
            <div className="flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="font-bold mr-2">UK</span> – Well-Maintained & Right-Hand Drive
            </div>
            <div className="flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="font-bold mr-2">South Africa</span> – Rugged & Road-Ready
            </div>
          </div>
        </div>
      </section>

      {/* Why These Markets */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why We Source from Japan, Dubai, UK & South Africa
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Japan</h3>
              <p className="text-gray-700">
                World-renowned for reliability, fuel efficiency, low mileage, and excellent maintenance history — ideal for long-term ownership in Malawi.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Dubai</h3>
              <p className="text-gray-700">
                Access to luxury SUVs, low-mileage sedans, and premium models — many vehicles come from careful owners with full service records.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">United Kingdom</h3>
              <p className="text-gray-700">
                Right-hand drive vehicles with strict MOT standards — well-maintained, often with comprehensive service history and no major accidents.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">South Africa</h3>
              <p className="text-gray-700">
                Rugged 4x4s, double cabs, and vehicles built for tough African roads — many models are already proven in similar climates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Import Process */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Proven Import Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow">
              <div className="text-5xl font-bold text-blue-700 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-700">We discuss your needs, budget, and preferred market (Japan, Dubai, UK, or SA).</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <div className="text-5xl font-bold text-blue-700 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Sourcing & Inspection</h3>
              <p className="text-gray-700">We source from trusted suppliers and perform full pre-shipment inspections.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <div className="text-5xl font-bold text-blue-700 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Shipping & Clearance</h3>
              <p className="text-gray-700">We handle shipping, customs, duty, and all paperwork in Malawi.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <div className="text-5xl font-bold text-blue-700 mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Delivery & Support</h3>
              <p className="text-gray-700">Vehicle delivered to you with registration help and after-sales support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Import from Japan, Dubai, UK or SA?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let us source the perfect vehicle for you — full support from enquiry to delivery.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Start Your Import Enquiry
          </a>
        </div>
      </section>
    </main>
  );
}