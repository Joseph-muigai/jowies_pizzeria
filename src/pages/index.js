import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Featured from 'components/Featured'
import Pizzalist from 'components/Pizzalist'





export default function Home() {
  
  return (
    <>  
      <Head>
        <title>JOWIE'S PIZZERIA</title>
        <meta name="description" content="Best pizza Shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Featured/>
      <Pizzalist/>
    
    </>
  )
}
