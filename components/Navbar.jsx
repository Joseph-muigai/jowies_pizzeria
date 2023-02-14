import React from 'react'
import styles from '../src/styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callbutton}>
          <Image src ="/img/telephone.png" alt ="telephone image" width="32" height="32"/>

        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>+254-708-589-564</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HomePage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src='/img/logo2.png' alt ="logo" width="200" height ="200" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/img/cart.png' alt ="logo" width="30" height ="30"/> 
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar