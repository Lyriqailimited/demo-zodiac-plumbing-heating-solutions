import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Zodiac Plumbing & Heating Solutions', description: '5-star plumbing & heating experts in Manchester â€” never miss a customer call again' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
