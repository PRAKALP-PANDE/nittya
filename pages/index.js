import Head from 'next/head'
import { Inter } from 'next/font/google'
import HomePage from '@/Components/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nittya.com - Your daily nutrition</title>
        <meta name="description" content="clothwear: Created by Prakalp Pande" />
        <meta property="og:title" content="clothwear.com - Your Styling Partner" />
        <meta property="og:description" content="Your daily source for Styling and wellness" />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        {/* Add more meta tags as needed */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
