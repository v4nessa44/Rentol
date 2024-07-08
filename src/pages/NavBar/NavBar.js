import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
        <h1>Rentol</h1>
        <ul>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
            <a href="/profile/id:">Profile</a>
        </ul>
    </div>
  )
}

export default NavBar