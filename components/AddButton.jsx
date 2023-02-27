import React from 'react'
import styles from '../src/styles/AddButton.module.css'
const AddButton = ({setclose}) => {
  return (
    <div onClick={()=>setclose(false)} className={styles.mainAddButton}>Add new Pizza</div>
  )
}

export default AddButton