import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Featured from 'components/Featured'
import Pizzalist from 'components/Pizzalist'
import axios from 'axios'
import { useState } from 'react'
import Add from 'components/Add'
import AddButton from 'components/AddButton'





export default function Home({pizzaList, admin}) {
  const [close, setclose] = useState(true)
  return (
    <>  
      <Head>
        <title>JOWIE'S PIZZERIA</title>
        <meta name="description" content="Best pizza Shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <Featured/> */}
      {admin && <AddButton setclose = {setclose}/>}
      <Pizzalist pizzaList={pizzaList}/>
      {!close && <Add setclose = {setclose}/>}
    
    </>
  )
}

export const getServerSideProps = async (ctx)=>{
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
    if (myCookie.token === process.env.TOKEN) {
        admin = true;      
    }
  const res = await axios.get("http://localhost:3000/api/products")
  return{
    props:{  
      pizzaList: res.data,
      admin
    }
  }
}