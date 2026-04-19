import './globals.css'
import { Space_Mono, Work_Sans } from 'next/font/google'
import Script from 'next/script'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Kacper Ryske — Software Developer',
  description:
    'Portfolio of Kacper Ryske — software developer specialising in automation, data systems, and intelligent applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${workSans.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CKL34G5380"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CKL34G5380');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
