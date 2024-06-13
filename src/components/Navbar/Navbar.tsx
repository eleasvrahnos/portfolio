import * as React from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <a className={styles.title} href="/">Something here</a>
      <div>
        <ul className={styles.menuItems}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </div>
    </nav>
  )
}
