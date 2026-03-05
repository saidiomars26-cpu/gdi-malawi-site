// src/app/layout.js
// SERVER COMPONENT – no 'use client'

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientLayout from './ClientLayout';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: 'Global Drive Imports – Quality Cars in Malawi',
  description: 'Reliable imported vehicles and fair local appraisals in Blantyre and across Malawi.',
  openGraph: {
    title: 'Global Drive Imports',
    description: 'Quality cars in Malawi – imports and fair appraisals',
    url: 'https://yourdomain.com',
    siteName: 'Global Drive Imports',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="theme-color" content="#1E3A8A"/>
      </head>
      <body className="antialiased">
        <Header/>
        <ClientLayout>{children}</ClientLayout>
        <Footer/>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}