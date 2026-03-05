// src/components/layout/Footer.js
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Logo */}
          <div>
            <img
              src="/images/logo.png"
              alt="Global Drive Imports"
              className="h-16 md:h-24 w-auto mb-6 object-contain"
            />
            <h3 className="text-white text-2xl font-bold mb-4">
              Global Drive Imports
            </h3>
            <p className="text-sm leading-relaxed">
              Your reliable partner for quality imported vehicles and fairly appraised local cars in Malawi. Transparent, affordable, customer-first.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/buy" className="hover:text-white transition">Buy Cars</a></li>
              <li><a href="/sell" className="hover:text-white transition">Sell Your Car</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/imports" className="hover:text-white transition">Imports</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-3">📍</span>
                Blantyre, Malawi
              </li>
              <li className="flex items-start">
                <span className="mr-3">📞</span>
                +265 999 15 45 56 (WhatsApp available)
              </li>
              <li className="flex items-start">
                <span className="mr-3">✉️</span>
                info@globaldriveimports.mw
              </li>
              <li className="flex items-start">
                <span className="mr-3">🕒</span>
                Mon – Fri: 8:00 AM – 5:00 PM
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-6">
              {/* Replace # with your real links */}
              <a href="#" className="text-gray-400 hover:text-white transition text-2xl">
                Facebook
              </a>
              <a href="https://wa.me/265999154556" className="text-gray-400 hover:text-white transition text-2xl">
                WhatsApp
              </a>
              {/* Add Instagram or others */}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {currentYear} Global Drive Imports. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Blantyre, Malawi | Built with trust and transparency.
          </p>
        </div>
      </div>
    </footer>
    );
  }