import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/context/ModalContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'James Park | Frontend Developer Portfolio',
  description:
    'Personal frontend portfolio hub showcasing React, TypeScript, Next.js, and web projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
