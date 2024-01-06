import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DragNCode',
  description: 'Building scripts with no-code!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className='min-h-screen w-full bg-gradient-to-r from-purple-800 to-purple-950'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
