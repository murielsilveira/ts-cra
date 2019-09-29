import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import styles from './App.module.css'
import Login from './apps/auth/pages/Login'
import Dashboard from './apps/dashboard/pages/Dashboard'
import logo from './assets/logo.svg'

export default function App() {
  return (
    <Router>
      <header className={styles.header}>
        <Link className={styles.logo} to="/">
          <img className={styles.image} src={logo} alt="Logo" />
          <span>TS CRA</span>
        </Link>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}
