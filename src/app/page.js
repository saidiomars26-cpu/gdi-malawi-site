// src/app/page.js

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="relative bg-blue-900 text-white py-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Global Drive Imports
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-light">
            Your trusted partner for quality imported vehicles and fairly appraised local cars in Malawi.
          </p>
          <p className="text-lg md:text-xl mb-12 italic max-w-3xl mx-auto">
            "A reliable company bringing in cars and selling local ones after proper appraisal — transparent, affordable, and customer-first."
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/buy"
              className="bg-white text-blue-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Browse Cars for Sale
            </a>
            <a
              href="/sell"
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition"
            >
              Sell Your Car – Free Valuation
            </a>
          </div>
        </div>
      </section>

      {/* Mission / Why Choose Us */}
      <section 
        data-aos="fade-up" 
        data-aos-delay="100"
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Why Choose Global Drive Imports?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-5xl mb-6 text-blue-700">🔍</div>
              <h3 className="text-2xl font-bold mb-4">Transparency & Trust</h3>
              <p className="text-gray-700 leading-relaxed">
                Every vehicle undergoes a professional multi-point appraisal and clear grading system. No hidden issues — you know exactly what you're getting.
              </p>
            </div>

            <div 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-5xl mb-6 text-blue-700">💰</div>
              <h3 className="text-2xl font-bold mb-4">Affordability & Accessibility</h3>
              <p className="text-gray-700 leading-relaxed">
                We facilitate credit through trusted banks and work to beat forex challenges, making quality cars more affordable for Malawians.
              </p>
            </div>

            <div 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-5xl mb-6 text-blue-700">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Customer First</h3>
              <p className="text-gray-700 leading-relaxed">
                Free consultations, no hidden costs, personalized recommendations, and continuous feedback — your needs drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Teaser */}
      <section 
        data-aos="fade-right" 
        data-aos-delay="200"
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Featured Vehicles
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover some of our best appraised and ready-to-go cars right now.
          </p>

          <a
            href="/buy"
            className="inline-block bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-800 transition shadow-lg"
          >
            View All Cars →
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        data-aos="zoom-in" 
        data-aos-delay="300"
        className="py-20 px-6 bg-blue-800 text-white text-center"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Find Your Next Car?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Whether you're buying, selling, or just need advice — we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/buy"
              className="bg-white text-blue-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Browse Cars
            </a>
            <a
              href="/sell"
              className="bg-transparent border-2 border-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition"
            >
              Sell Your Car – Free Valuation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}