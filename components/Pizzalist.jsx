import React from 'react'
import styles from '../src/styles/Pizzalist.module.css'
import PizzaCard from './PizzaCard'
const Pizzalist = ({pizzaList}) => {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}> THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatibus perferendis nostrum illum rem, vitae sed quod numquam obcaecati rerum laudantium illo repudiandae aperiam omnis a libero quaerat reprehenderit non!
        </p>
        <div className={styles.wrapper}>
          {pizzaList.map(pizza=>(

            <PizzaCard key ={pizza._id} pizza ={pizza}/>
          ))}
           
        </div>
    </section>
  )
}

export default Pizzalist