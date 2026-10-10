import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/context/ModalContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'James Park | Junior Frontend Developer | React, Next.js, TypeScript',
  description:
    'Portfolio of James Park, a Junior Frontend Developer specializing in modern React, Next.js, TypeScript, and Tailwind CSS UI engineering.',
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
