import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

function Header () {
  return (
    <div className={classes.header}>
      <NavLink
        to='/pre-junior'
        activeClassName={classes.activeLink}
        className={classes.links}
      >
        PreJunior
      </NavLink>

      <NavLink
        to='/junior'
        activeClassName={classes.activeLink}
        className={classes.links}
      >
        Junior
      </NavLink>

      <NavLink
        to='/junior-plus'
        activeClassName={classes.activeLink}
        className={classes.links}
      >
        JuniorPlus
      </NavLink>
    </div>
  )
}

export default Header
