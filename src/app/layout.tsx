import type { Metadata } from 'next'
import { Outfit, Montserrat, Great_Vibes } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
})

export const metadata: Metadata = {
  title: 'Óticas Candiani',
  description: 'Enxergue o mundo com mais estilo e qualidade na Óticas Candiani.',
}

import WhatsAppButton from '@/components/WhatsAppButton'
import ExitIntentPopup from '@/components/ExitIntentPopup'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${montserrat.variable} ${greatVibes.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
