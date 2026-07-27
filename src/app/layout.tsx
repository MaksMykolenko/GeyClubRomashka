import React from 'react';
import { I18nProvider } from '@/i18n/i18n-context';
import { ModalProvider } from '@/components/common/ModalContext';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { AgeGateModal } from '@/components/common/AgeGateModal';
import { CookieBanner } from '@/components/common/CookieBanner';
import '@/styles/globals.css';

export const metadata = {
  title: 'Гей-клуб «Ромашка» | Музика. Свобода. Любов.',
  description:
    'Сучасний інклюзивний гей-клуб і нічний простір для музики, танців, тематичних вечірок та живих виступів. Тут можна бути собою.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark text-club-text antialiased selection:bg-neon-pink selection:text-white flex flex-col min-h-screen">
        <I18nProvider>
          <ModalProvider>
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
            <AgeGateModal />
            <CookieBanner />
          </ModalProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
