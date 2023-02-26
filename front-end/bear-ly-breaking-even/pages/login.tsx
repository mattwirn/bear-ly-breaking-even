import Head from 'next/head'
import {useRouter} from "next/router"
import PageHeader from '@/components/PageHeader'

export default function Login() {
    const router = useRouter()

    function signupLink() {
        router.push('/signup')
    }

  return (
    <div className=''>
      <Head>
        <title>Bear-ly Breaking Even Log In</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport"/>
        <link rel="icon" />
      </Head>

      <PageHeader/>

      <div className='flex items-center justify-center pt-10'>
        <div className='grid flex rounded-lg px-16 mx-auto h-fit justify-center bg-[#f2eadf] pb-2 pt-4 border border-black space'>
          <div className='mx-auto justify-center text-xl font-semibold'>
              Welcome Back!
          </div>
          <div className='flex pt-4 pb-1'>
            <div>Username</div>
          </div>
          <input className="shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
          <div className='flex pt-4 pb-1'>
            <div>Password</div>
          </div>
          <input className="shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********"></input>
          <div className='flex text-gray-600 text-sm pb-4'>
            <div className='underline hover:cursor-pointer'>Forgot Password</div>
          </div>
          <div className='mx-auto pb-2'>
            <button className='bg-[#addfad] drop-shadow-lg rounded-lg px-6 py-3 border border-black'>
              <div className='font-semibold'>
                Login
              </div>
            </button>
          </div>
          <div className='flex text-gray-600 text-sm py-2'>
            <div>Don&apos;t have an account? &nbsp;</div>
            <button onClick={signupLink} className='underline hover:cursor-pointer'> Sign up </button>
          </div>
        </div>
      </div>
    </div>
  )
}