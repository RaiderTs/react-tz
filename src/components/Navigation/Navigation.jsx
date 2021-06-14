import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>

    <NavLink to="/birds" className={s.link} activeClassName={s.activeLink}>
      Birds
    </NavLink>

    <NavLink to="/building" className={s.link} activeClassName={s.activeLink}>
      Building
    </NavLink>

    <NavLink to="/weather" className={s.link} activeClassName={s.activeLink}>
      Weather
    </NavLink>

    <NavLink to="/favorites" className={s.link} activeClassName={s.activeLink}>
      Favorites
    </NavLink>
  </nav>
);

export default Navigation;
