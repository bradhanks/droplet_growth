import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
// import diamonds from '@/images/diamonds.svg'
// import Image from 'next/image'
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
  children,
}: {
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
            className={clsx("fixed max-w-none top-[16.6em] left-[7.8vw] opactity-10")}
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
