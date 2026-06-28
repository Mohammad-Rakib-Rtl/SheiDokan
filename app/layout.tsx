import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['500','600'], display: 'swap' });

export const metadata: Metadata = {
  title: 'SheiDokan — Global Trading, Sourcing & Logistics',
  description: 'Premium international trading partner for China product sourcing, freight, customs clearance, OEM/ODM manufacturing, audits, and door-to-door delivery.',
  openGraph: { title: 'SheiDokan', description: 'Global trading, sourcing and logistics with luxury-grade execution.', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${inter.variable} ${display.variable} font-sans antialiased`}>{children}</body></html>;
}
