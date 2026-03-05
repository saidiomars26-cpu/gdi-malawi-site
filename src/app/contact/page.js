// src/app/contact/page.js

export const metadata = {
  title: 'Contact Us - Global Drive Imports',
  description: 'Get in touch with Global Drive Imports for car enquiries, valuations, imports or any assistance in Malawi.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl mb-10 max-w-4xl mx-auto">
            We're here to help — whether you're buying, selling, importing, or just need advice on your next car.
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            Reach out today. Our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900"> {/* ← Dark heading */}
                Our Location
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Global Drive Imports  
                Blantrye, Malawi  
                (Exact address available upon request)
              </p>
              <p className="text-lg text-gray-700">
                Working Hours: Monday – Saturday, 8:00 AM – 5:00 PM
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900"> {/* ← Dark heading */}
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-3xl mr-4 text-blue-700">📞</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900"> {/* ← Dark subheading */}
                      Phone / WhatsApp
                    </h3>
                    <p className="text-lg text-gray-700">+265 991 04 34 73 or +265 999 15 45 56</p>
                    <p className="text-sm text-gray-600">Call or WhatsApp for fastest response</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-3xl mr-4 text-blue-700">✉️</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900"> {/* ← Dark subheading */}
                      Email
                    </h3>
                    <p className="text-lg text-gray-700">info@globaldriveimports.mw</p>
                    <p className="text-sm text-gray-600">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-3xl mr-4 text-blue-700">🌐</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900"> {/* ← Dark subheading */}
                      Social Media
                    </h3>
                    <p className="text-lg text-gray-700">
                      Follow us for latest stock updates and offers:
                    </p>
                    <div className="flex gap-4 mt-3">
                      <a href="#" className="text-lg text-blue-700 hover:underline">Facebook</a>
                      <a href="#" className="text-lg text-green-700 hover:underline">WhatsApp</a>
                      {/* Add real links when ready */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900"> {/* ← Dark heading */}
              Send us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 placeholder:text-gray-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 placeholder:text-gray-500"
                  placeholder="+265 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 placeholder:text-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 placeholder:text-gray-500"
                  placeholder="Tell us how we can help you – buying, selling, import enquiry, valuation, etc."
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition shadow-md w-full sm:w-auto"
                >
                  Send Message
                </button>
                <p className="mt-4 text-sm text-gray-600">
                  We'll get back to you within 24 hours. Your details are secure.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-blue-800 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Prefer to Talk Directly?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Call or WhatsApp us anytime — we're ready to assist.
          </p>
          <a
            href="tel:+265999999999"  // ← replace with real number
            className="inline-block bg-white text-blue-900 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Call Now: +265 886 16 47 47
          </a>
        </div>
      </section>
    </main>
  );
}