import Head from 'next/head'
import { Inter } from 'next/font/google'
import HomePage from '@/Components/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Best Nutritionist in Pune | Weightloss Diet Plans & Natural Nutrition</title>
        <meta name="description" content="Nittya is a top-rated nutritionist in Pune offering diet plans for weight loss, PCOS, diabetes, thyroid, pregnancy, and more. Shop healthy, natural nutrition products too!" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Top Nutritionist in Pune - Nittya" />
        <meta property="og:description" content="Get expert weight loss guidance and healthy nutrition from Nittya – trusted nutritionist in Pune. Diet plans & superfood products available." />
        <meta property="og:image" content="/images/og-nutritionist-pune.jpg" />  {/* Replace with real image */}
        <meta property="og:url" content="https://www.nittya.com" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.nittya.com" />
        {/* Add more meta tags as needed */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
