import Image from 'next/image'
import React from 'react'
import styles from '../src/styles/Footer.module.css'
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.item}>
        footer
        <Image src="/img/bg.png" layout='fill'  objectFit='cover' alt='' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE JOWIE'S PZZA, WELL BAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1234,J. Muigai Road #304.
            <br /> Nairobi, 1234
            <br /> (+254)708-589-564
          </p>
          <p className={styles.text}>
            1234,J. Muigai Road #304.
            <br /> Nairobi, 1234
            <br /> (+254)708-589-564
          </p>
          <p className={styles.text}>
            1234,J. Muigai Road #304.
            <br /> Nairobi, 1234
            <br /> (+254)708-589-564
          </p>
          <p className={styles.text}>
            1234,J. Muigai Road #304.
            <br /> Nairobi, 1234
            <br /> (+254)708-589-564
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
        </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
        </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer