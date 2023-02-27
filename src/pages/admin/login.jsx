import React, { useState } from 'react'
import styles from "../../styles/Login.module.css"
import { useRouter } from 'next/router'
import axios from 'axios'
axios
const login = () => {
    const [username, setusername] = useState(null)
    const [password, setpassword] = useState(null)
    const [error, seterror] = useState(false)
    const router = useRouter()
    const handleClick = async()=>{
        try {
            await axios.post("http://localhost:3000/api/login",{username, password})
            router.push("/admin")
            seterror(false)
        } catch (error) {
            console.log(error)
            seterror(true )
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1>Admin dashbord</h1>
            <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials</span>}
        </div>
    </div>
  )
}

export default login