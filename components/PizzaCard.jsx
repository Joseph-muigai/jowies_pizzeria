import Image from 'next/image'
import React from 'react'
import styles from '../src/styles/PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src='/img/pizza.png' alt="" width ="200" height ="200"/>
        <h1 className={styles.title}> FIORI DI ZUCCA</h1>
        <span className={ styles.price}>Ksh 1900</span>
        <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, consequuntur?
        </p>
    </div>
  )
}

export default PizzaCard