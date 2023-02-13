import Head from 'next/head'
import {useRouter} from "next/router"
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bear-ly Breaking Even</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageHeader/>

      <div className='flex grid justify-center'>
        <div className='mx-auto'>
          <Logo w={300}/>
        </div>
        <h1 className='mx-auto font-bold text-6xl text-[#addfad]'>HomePage</h1>
        <h1 className='font-bold text-4xl text-[#addfad]'>(insert app description and logo)</h1>
      </div>
      
    </div>
  )
}

