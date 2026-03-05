// src/components/FloatingWhatsApp.js
'use client';

import { useEffect } from 'react';

export default function FloatingWhatsApp() {
  const phoneNumber = '265999154556'; // your number without + or spaces
  const message = encodeURIComponent(
    "Hello Global Drive Imports! I'd like to enquire about your services/cars."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp icon */}
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-1.12 0-2.22-.303-3.19-.877l-.229-.134-2.373.623.633-2.309-.149-.266c-.603-1.078-.927-2.315-.927-3.58 0-3.726 3.03-6.756 6.756-6.756 1.806 0 3.5.703 4.773 1.976 1.273 1.273 1.976 2.967 1.976 4.773 0 3.726-3.03 6.756-6.756 6.756z" />
      </svg>

      {/* Optional tooltip on hover */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
}