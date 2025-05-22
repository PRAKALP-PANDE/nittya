import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component }) {
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState()
  const [progress, setProgress] = useState(0)
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
    const myuser = JSON.parse(localStorage.getItem('myuser'))

    if (myuser?.token) {
      fetch(`${process.env.NEXT_PUBLIC_HOST}/api/token-validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: myuser.token }),
      })
        .then(res => res.json())
        .then(response => {
          if (response.success) {
            setUser({ value: myuser.token, email: response.user.email, name: response.user.name });
          } else {
            console.log("Token expired or invalid, logging out...");
            localStorage.removeItem('myuser');
            setUser(null);
          }
        })
        .catch(error => {
          console.error("Error verifying token:", error);
          localStorage.removeItem('myuser');
          setUser(null);
        });
    }

    setKey(Math.random())
  }, [router.query])

  const logout = () => {
    localStorage.removeItem("myuser")
    setUser({ value: null })
    setKey(Math.random())
    router.push('/')
  }
  return <>
    <LoadingBar
      color='#16A34A'
      progress={progress}
      waitingTime={400}
      onLoaderFinished={() => setProgress(0)}
    />
    <Navbar Logout={logout} user={user} key={key}  />
    <Component Logout={logout} user={user} key={key}  />
    <Footer />
  </>
}
