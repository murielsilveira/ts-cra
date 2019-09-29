import React from 'react'
import logo from './assets/logo.svg'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <span className={styles.title}>TS CRA</span>
        <nav className={styles.menu}>
          <ul>
            <li>Dashboard</li>
            <li>Elements</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
