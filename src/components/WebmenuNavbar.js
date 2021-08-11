import React from 'react'
import {Navbar, NavLink, NavbarBrand} from 'react-bootstrap'

import styles from './WebmenuNavBar.module.css'

const WebmenuNavbar = () => {
  return (
    <section>
      <Navbar className={styles.navbarStyle}>
        <NavbarBrand>Web-Menu</NavbarBrand>
        <NavLink className={styles.linkStyle}>Home</NavLink>
        <NavLink className={styles.linkStyle}>Breakfast</NavLink>
        <NavLink className={styles.linkStyle}>Lunch</NavLink>
        <NavLink className={styles.linkStyle}>Dinner</NavLink>
        <NavLink className={styles.linkStyle}>Desert</NavLink>
        <NavLink className={styles.linkStyle}>Restaraunt</NavLink>
        <NavLink className={styles.linkStyle}>Inventory</NavLink>
      </Navbar>
    </section>
  )
}

export default WebmenuNavbar
