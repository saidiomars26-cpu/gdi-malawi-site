// src/app/sell/page-wrapper.js
// This is a SERVER COMPONENT – no 'use client'

import SellClient from './sell-client';  // We'll create this next

export const metadata = {
  title: 'Sell Your Car - Global Drive Imports | Free Valuation in Malawi',
  description: 'Get a fast, fair cash offer for your car. Free appraisal, no hidden fees, quick process in Lilongwe and across Malawi.',
};

export default function SellPageWrapper() {
  return <SellClient />;
}