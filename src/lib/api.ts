// API functions for backend integration
// TODO: Replace mock implementations with actual Supabase/Firebase calls

import type { Reservation, ContactMessage, AvailabilitySlot } from "@/types";

/**
 * Create a new reservation
 * TODO: Implement Supabase/Firebase integration
 */
export async function createReservation(
  data: Omit<Reservation, 'id' | 'code' | 'createdAt' | 'updatedAt' | 'status'>
): Promise<Reservation> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const reservation: Reservation = {
    id: crypto.randomUUID(),
    code: `BKA-2025-${Math.random().toString().slice(2, 8)}`,
    ...data,
    status: 'confirmed',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  console.log('📝 Reservation created (mock):', reservation);
  return reservation;
}

/**
 * Check table availability for a specific date, time, and party size
 * TODO: Implement real availability check against database
 */
export async function checkAvailability(
  date: string,
  time: string,
  partySize: number
): Promise<AvailabilitySlot> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  console.log('🔍 Checking availability:', { date, time, partySize });
  
  // Mock: Random availability (80% chance of having tables)
  const hasAvailability = Math.random() > 0.2;
  
  return {
    date,
    time,
    availableTables: hasAvailability ? Math.floor(Math.random() * 10) + 3 : 0,
    tableTypes: hasAvailability ? ['terraza', 'salon', 'privado'] : [],
  };
}

/**
 * Send contact form message
 * TODO: Implement email service integration (Resend, SendGrid)
 */
export async function sendContactMessage(
  data: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>
): Promise<ContactMessage> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const message: ContactMessage = {
    id: crypto.randomUUID(),
    ...data,
    status: 'new',
    createdAt: new Date(),
  };
  
  console.log('📧 Contact message sent (mock):', message);
  return message;
}

/**
 * Get available time slots for a specific date
 * TODO: Fetch from database based on existing reservations
 */
export async function getAvailableTimeSlots(date: string): Promise<string[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('🕐 Fetching time slots for:', date);
  
  // Mock: Return standard restaurant hours
  return [
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
    '10:30 PM',
  ];
}

/**
 * Validate if a date is available for reservations
 * Closed on Mondays, no past dates
 */
export function isDateAvailable(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // No past dates
  if (date < today) return false;
  
  // Closed on Mondays (0 = Sunday, 1 = Monday)
  if (date.getDay() === 1) return false;
  
  return true;
}

/**
 * Validate if a time is within restaurant hours
 * Open: 12:00 PM - 11:00 PM (Tue-Thu, Sun)
 * Open: 12:00 PM - 1:00 AM (Fri-Sat)
 */
export function isTimeValid(time: string, date: Date): boolean {
  const [hourMin, period] = time.split(' ');
  const [hours, minutes] = hourMin.split(':').map(Number);
  
  let hour24 = hours;
  if (period === 'PM' && hours !== 12) hour24 += 12;
  if (period === 'AM' && hours === 12) hour24 = 0;
  
  const dayOfWeek = date.getDay();
  const isFridayOrSaturday = dayOfWeek === 5 || dayOfWeek === 6;
  
  // Standard hours: 12:00 PM (12) to 11:00 PM (23)
  if (hour24 < 12 || hour24 > 23) {
    // Extended hours on Fri/Sat until 1:00 AM
    if (isFridayOrSaturday && hour24 === 0) return true;
    return false;
  }
  
  return true;
}
