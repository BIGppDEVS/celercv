import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'celerCV',
  description: 'Build CVs the right way'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
      <Toaster />
    </html>
  );
}
