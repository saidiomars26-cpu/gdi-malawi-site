// src/app/about/page.js

export const metadata = {
  title: 'About Us - Global Drive Imports',
  description: 'Learn about Global Drive Imports – your reliable partner for quality car imports, fair appraisals and transparent vehicle sales in Malawi.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero / Introduction */}
      <section className="bg-blue-800 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Global Drive Imports
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-light">
            Bringing quality cars to Malawi with transparency, trust, and care.
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            We are a reliable, customer-first company dedicated to importing high-quality vehicles and selling fairly appraised local cars — making ownership accessible and hassle-free for every Malawian.
          </p>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Global Drive Imports, we believe everyone deserves access to safe, reliable, and fairly priced vehicles. We exist to bridge the gap between international quality standards and local realities in Malawi.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By importing carefully selected cars and offering transparent appraisals on local vehicles, we aim to build long-term trust — one customer at a time.
              </p>
              <p className="text-lg font-semibold text-blue-700">
                Our promise: No hidden fees. Full transparency. Your satisfaction first.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Replace with your real photo or stock image */}
              <img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Global Drive Imports team or showroom"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-bold">Lilongwe, Malawi</p>
                <p className="text-sm">Serving the nation since [year]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            What Sets Us Apart
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6 text-blue-700">🔍</div>
              <h3 className="text-2xl font-bold mb-4">Complete Transparency</h3>
              <p className="text-gray-700">
                Every car is appraised using a clear, multi-point grading system. You get full details — no surprises, no hidden issues.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6 text-blue-700">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Customer-Centered Approach</h3>
              <p className="text-gray-700">
                Free consultations, no-obligation valuations, personalized recommendations, and ongoing support after the sale.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-5xl mb-6 text-blue-700">💰</div>
              <h3 className="text-2xl font-bold mb-4">Affordability Solutions</h3>
              <p className="text-gray-700">
                We partner with banks for credit facilitation and actively work to keep prices competitive despite forex challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Commitment */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-6xl mb-4 text-blue-700">🔐</div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">Honest appraisals, fair pricing, no shortcuts.</p>
            </div>
            <div>
              <div className="text-6xl mb-4 text-blue-700">👥</div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-600">Your needs come first — always.</p>
            </div>
            <div>
              <div className="text-6xl mb-4 text-blue-700">🌱</div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">Only quality vehicles, professional service.</p>
            </div>
            <div>
              <div className="text-6xl mb-4 text-blue-700">🇲🇼</div>
              <h3 className="text-xl font-bold mb-2">Local Pride</h3>
              <p className="text-gray-600">Serving Malawi with care and understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Whether you're buying, selling, or just exploring options — we're here to help.
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
              Sell Your Car
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}