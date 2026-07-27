import { MetadataRoute } from 'next';
import { sampleEvents } from '@/content/events.data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://romashka.club';

  const staticPages = [
    '',
    '/events',
    '/about',
    '/gallery',
    '/visit',
    '/safety',
    '/contacts',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const eventPages = sampleEvents.map((evt) => ({
    url: `${baseUrl}/events/${evt.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...eventPages];
}
