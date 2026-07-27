export type Language = 'uk' | 'pl' | 'en';

export interface ClubConfig {
  name: string;
  tagline: string;
  subtagline: string;
  slogan: string;
  ageLimit: string;
  addressPlaceholder: string;
  addressMapsUrl: string;
  metroStation: string;
  workingHours: string;
  phone: string;
  email: string;
  ticketServiceUrl: string;
  socials: {
    instagram: string;
    tiktok: string;
    telegram: string;
    facebook: string;
  };
}

export type EventCategory = 'all' | 'parties' | 'live' | 'drag' | 'special';
export type TicketStatus = 'available' | 'few' | 'sold_out';

export interface TimetableSlot {
  time: string;
  activity: string;
  artist?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  category: EventCategory;
  musicGenre: string;
  artists: string[];
  priceFrom: number;
  currency: string;
  ageLimit: string;
  status: TicketStatus;
  posterUrl: string;
  description: string;
  timetable: TimetableSlot[];
  location: string;
  entryRules: string[];
  refundPolicy: string;
  isFeatured?: boolean;
}

export type GalleryCategory = 'all' | 'campaign' | 'parties' | 'shows' | 'atmosphere' | 'interior';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  date: string;
  alt: string;
  eventName?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  eventId: string;
  guestCount: number;
  bookingType: 'table' | 'guestlist' | 'vip';
  comment?: string;
  ageConfirmed: boolean;
  termsAgreed: boolean;
  honeypot?: string;
}

export interface IncidentReportData {
  category: 'harassment' | 'aggression' | 'staff_service' | 'safety' | 'other';
  description: string;
  dateOccurred: string;
  contactEmail?: string;
  isAnonymous: boolean;
  honeypot?: string;
}
