import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component}) {
  const [progress, setProgress] = useState(0)
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  }, [router.query])
  return <>
    <LoadingBar
      color='#16A34A'
      progress={progress}
      waitingTime={400}
      onLoaderFinished={() => setProgress(0)}
    />
    <Navbar  />
    <Component />
    <Footer />
  </>
}
