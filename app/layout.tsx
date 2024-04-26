import React from 'react';
import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import Providers from './provider/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
