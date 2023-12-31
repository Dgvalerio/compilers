import { FC, ReactNode } from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Compilers',
  description: 'Generated by create next app',
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="pt-br">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
