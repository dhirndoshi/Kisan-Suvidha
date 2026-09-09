import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'Kisan Suvidha — One Platform. Brighter Tomorrows for Farmers.',description:'Smart procurement, market intelligence, booking, queue tracking and farmer support for SIH 2026.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
