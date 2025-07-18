import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import Image from 'next/image'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import diamonds from '@/images/diamonds.svg'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: {
    template: '%s - prepared by SeriesLab.',
    default: 'droplet.io - Growth Proposal.',
  },
  description:
    'Let\'s gooooo!',
}

export default function RootLayout({
  className,
  children,
}: {
  className?: string,
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <Providers>
          {/* <Image
            alt="Background"
            src={diamonds}
            className={clsx("z-[-1] max-w-none absolute w-[210vw] -bottom-[49.6em] -left-[70.8vw] max-991:-bottom-[42.6em] max-991:-left-[65.6vw] max-767:w-[340vw] max-767:-bottom-[737.7px] max-767:-left-[89.9vw] max-479:w-[119em] max-479:-bottom-[52.7rem] max-479:-left-[36rem]")}
            width={2100}
            height={1000}
            priority
          /> */}
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
