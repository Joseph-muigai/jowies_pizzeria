import React, { useState } from 'react'
import styles from '../src/styles/Featured.module.css'
import Image from 'next/image'

const Featured = () => {
    const images =[
        '/img/featured5.png' ,
        '/img/featured6.png',
        '/img/featured7.png'
    ]
    const [index, setIndex] = useState(0)
    const handleArrow =(direction)=>{
        if (direction == 'l') {
            setIndex(index !== 0?index-1:2 )
        }
        if (direction == 'r') {
            setIndex(index !== 2?index+1:0 )
        }

    }
    console.log(index);
  return (
    <section className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow('l')}>

        <Image src = '/img/arrowl.png' alt ="arrow left" width="200" height='200'/>
        </div>
        <div className={styles.wrapper}>
                {
                    images.map((img,i)=>(
                    <div className={styles.imgcontainer} key={i}>    
                       <Image src = {img}  alt ="arrow left" fill objectFit='contain'/> 
                    </div>
                ))
            }
        </div>
           
        <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow('l')}>
            
        <Image src = '/img/arrowr.png' alt ="arrow right" width="200" height='200' />
        </div>

    </section>
  )
}

export default Featured