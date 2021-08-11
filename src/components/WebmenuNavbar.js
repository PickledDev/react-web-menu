import React from 'react'
import {Button, Navbar, NavbarBrand} from 'react-bootstrap'

import styles from './WebmenuNavBar.module.css'

const WebmenuNavbar = () => {
  return (
    <section>
      <Navbar className={styles.navbarStyle}>
        <NavbarBrand className={styles.brandStyle}>Web-Menu</NavbarBrand>
        <Button className={styles.buttonStyle}>Home</Button>
        <Button className={styles.buttonStyle}>Breakfast</Button>
        <Button className={styles.buttonStyle}>Lunch</Button>
        <Button className={styles.buttonStyle}>Dinner</Button>
        <Button className={styles.buttonStyle}>Desert</Button>
        <Button className={styles.buttonStyle}>Restaraunt</Button>
        <Button className={styles.buttonStyle}>Inventory</Button>
      </Navbar>
    </section>
  )
}

export default WebmenuNavbar
