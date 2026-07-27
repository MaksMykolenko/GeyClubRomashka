import { ClubConfig } from '@/types';

export const clubConfig: ClubConfig = {
  name: 'РОМАШКА',
  tagline: 'Гей-клуб',
  subtagline: 'Нічний простір, де кожен може бути собою',
  slogan: 'Музика. Свобода. Любов.',
  ageLimit: '18+',
  addressPlaceholder: 'м. Березань, Київська обл.',
  addressMapsUrl: 'https://maps.app.goo.gl/Z8py9nETgMExszH27',
  metroStation: 'Березань',
  workingHours: 'П’ятниця — Субота: 22:00 – 06:00',
  phone: '+380 (00) 000-00-00',
  email: 'hello@romashka.club',
  ticketServiceUrl: process.env.NEXT_PUBLIC_TICKET_SERVICE_URL || 'https://tickets.romashka.club',
  socials: {
    instagram: 'https://instagram.com/romashka.club.placeholder',
    tiktok: 'https://tiktok.com/@romashka.club.placeholder',
    telegram: 'https://t.me/romashka_club_placeholder',
    facebook: 'https://facebook.com/romashka.club.placeholder',
  },
};
