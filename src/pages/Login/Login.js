import React, {useState} from 'react'
import styles from './Login.module.css'


const Login = () => {
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");

  const handleLogin = ()=>{
    console.log(email, password);
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1>Login</h1>

        <input type='email' 
        placeholder='Email' 
        value={email} 
        onChange={(e) =>{
          setEmail(e.target.value)}}
          />

        <input type='password' 
        placeholder='Password' 
        value={password}
        onChange={(e) =>{
          setPassword(e.target.value)}}
          />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login