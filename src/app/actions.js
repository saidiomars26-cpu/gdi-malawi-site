// src/app/actions.js
'use server';  // ← This directive at the TOP of the file makes everything below server-only

export async function submitValuation(formData) {
  const name = formData.get('name');
  const phone = formData.get('phone');
  const make = formData.get('make');
  const model = formData.get('model');
  const year = formData.get('year');
  const mileage = formData.get('mileage');
  const condition = formData.get('condition');
  const transmission = formData.get('transmission');
  const fuelType = formData.get('fuelType');
  const color = formData.get('color');
  const location = formData.get('location');
  const details = formData.get('details');

  if (!name || !phone || !make || !model || !year || !mileage || !condition) {
    return { success: false, message: 'Please fill in all required fields.' };
  }

  console.log('New valuation submission:', {
    name, phone, make, model, year, mileage, condition,
    transmission, fuelType, color, location, details,
  });

  // Fake delay for demo (remove later)
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    success: true,
    message: 'Thank you! We received your car details. Our team will review them and contact you within 24 hours with a fair, no-obligation offer.',
  };
}