import React from 'react'
import styles from '../src/styles/Navbar.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'


const Navbar = () => {
  const quantity = useSelector(state=> state.cart.quantity)
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
        <Link href="/" passHref >
          <li className={styles.listItem}>HomePage</li>
        </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src='/img/logo2.png' alt ="logo" width="200" height ="200" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref >
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/img/cart.png' alt ="logo" width="30" height ="30"/> 
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </nav>
  )
}

export default Navbar