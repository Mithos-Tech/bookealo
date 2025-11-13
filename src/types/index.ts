// Data models for backend integration

export interface Reservation {
  id: string;
  code: string; // BKA-2025-XXXXX
  userId?: string; // null for guest reservations
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
  date: string; // ISO 8601 date
  time: string; // HH:MM format
  partySize: number; // 1-12
  tableType: 'terraza' | 'barra' | 'salon' | 'privado' | 'cualquiera';
  status: 'pending' | 'confirmed' | 'seated' | 'completed' | 'cancelled' | 'no_show';
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'new' | 'read' | 'responded';
  createdAt: Date;
}

export interface Table {
  id: string;
  name: string;
  type: 'terraza' | 'barra' | 'salon' | 'privado';
  capacity: number;
  minCapacity: number;
  features: string[];
  isAvailable: boolean;
  imageUrl: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'ceviche' | 'tiradito' | 'main' | 'appetizer' | 'dessert';
  imageUrl: string;
  tags: string[];
  isAvailable: boolean;
}

export interface AvailabilitySlot {
  date: string;
  time: string;
  availableTables: number;
  tableTypes: string[];
}
