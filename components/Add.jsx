import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../src/styles/AddButton.module.css'

const Add = ({setclose}) => {
    const [file, setfile] = useState(null)
    const [title, settitle] = useState(null)
    const [desc, setdesc] = useState(null)
    const [prices, setprices] = useState([])
    const [extraOptions, setextraOptions] = useState([])
    const [extra, setextra] = useState(null)
    const handleExtra =(e)=>{
        setextraOptions((prev)=> [...prev, extra]);
    };
    const handleExtraInput =(e)=>{
        setextra({...extra,[e.target.name]:e.target.value})
    };
    const changePrice =(e)=>{
        const currentPrices = prices 
        currentPrices[index] =e.target.value
        setprices(currentPrices)
    }
    const handleCreate =async()=>{
        
    }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
                <span onClick={()=>setclose(true)} className ={styles.close}>
                    X
                </span>
                <h1>Add a new Pizza</h1>
            <div className={styles.item}>
                <label htmlFor=""className={styles.label}>Choose an image</label>
                <input type="file"  onChange={(e)=> setfile(e.target.files[0])}/>
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Title</label>
                <input
                    className={styles.input}
                    type="text"
                    onChange={(e) => settitle(e.target.value)}
                />
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Desc</label>
                <textarea
                    rows={4}
                    type="text"
                    onChange={(e) => setdesc(e.target.value)}
                />
            </div>
            <div className={styles.item}>
            <label className={styles.label}>Prices</label>
            <div className={styles.priceContainer}>
                <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Small"
                onChange={(e) => changePrice(e, 0)}
                />
                <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Medium"
                onChange={(e) => changePrice(e, 1)}
                />
                <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Large"
                onChange={(e) => changePrice(e, 2)}
                />
            </div>
            </div>
            <div className={styles.item}>
                <label className={styles.label}>Extra</label>
                <div className={styles.extra}>
                <input
                className={`${styles.input} ${styles.inputSm}`}
                type="text"
                placeholder="Item"
                name="text"
                onChange={handleExtraInput}
                />
                <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleExtraInput}
                />
                <button className={styles.extraButton} onClick={handleExtra}>
                Add
                </button>
            </div>
            <div className={styles.extraItems}>
                {extraOptions.map((option) => (
                <span key={option.text} className={styles.extraItem}>
                    {option.text}
                </span>
                ))}
            </div>
            </div>
            <button className={styles.addButton} onClick={handleCreate}>
            Create
            </button>
        </div>
    </div>
  )
}

export default Add