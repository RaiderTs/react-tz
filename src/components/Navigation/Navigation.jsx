import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import Favorite from '../../components/Favorites'

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>

    <NavLink to="/birdPage" className={s.link} activeClassName={s.activeLink}>
      Birds
    </NavLink>

    <NavLink
      to="/buildingPage"
      className={s.link}
      activeClassName={s.activeLink}
    >
      Building
    </NavLink>

    <NavLink to="/weatherPage" className={s.link} activeClassName={s.activeLink}>
      Weather
    </NavLink>

    <NavLink to="/favoritesPage" className={s.link} activeClassName={s.activeLink}>
      Favorites
    </NavLink>
    <Favorite />
  </nav>
);

export default Navigation;
