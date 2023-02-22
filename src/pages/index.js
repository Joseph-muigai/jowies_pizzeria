import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Featured from 'components/Featured'
import Pizzalist from 'components/Pizzalist'
import axios from 'axios'





export default function Home({pizzaList}) {
  
  return (
    <>  
      <Head>
        <title>JOWIE'S PIZZERIA</title>
        <meta name="description" content="Best pizza Shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <Featured/> */}
      <Pizzalist pizzaList={pizzaList}/>
    
    </>
  )
}

export const getServerSideProps = async ()=>{
  const res = await axios.get("http://localhost:3000/api/products")
  return{
    props:{  
      pizzaList: res.data
    }
  }
}