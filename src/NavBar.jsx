import React from 'react'
import styles from "./details.module.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={styles.nav}>
        <article className={styles.right}>
            <NavLink to="/" className={styles.links}>Create</NavLink>
            <NavLink to="/data" className={styles.links}>Data</NavLink>
            <NavLink to="/view" className={styles.links}>View</NavLink>
            <NavLink to="/update" className={styles.links}>Update</NavLink>
        </article>
    </div>
  )
}

export default NavBar