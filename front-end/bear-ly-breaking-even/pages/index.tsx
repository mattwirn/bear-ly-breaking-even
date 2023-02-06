import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {useRouter} from "next/router"

export default function Home() {
  const router = useRouter()
    function logLink(){
        router.push('/login')
    }
    function signupLink(){
      router.push('/signup')
    }
  return (
    <div className=''>
      <Head>
        <title>Bear-ly Breaking Even </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex items-center space-y-6'>
        <div className='pageHeader'>
          <button onClick={signupLink} className='underline hover:cursor-pointer mx-1'> Sign up </button>
          <button onClick={logLink} className='underline hover:cursor-pointer mx-1'> Log in </button>
        </div>
      </div>
    </div>
  )
}

