import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Kacper Ryske — Software Developer & Computational Designer',
  description: 'Portfolio of Kacper Ryske — Software Developer & Computational Designer specialising in parametric design, automation, and AEC technology.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HY5K8MLD5L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HY5K8MLD5L');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}