import React, { useContext } from "react";
import styles from "../styles/navbar.module.scss";
import { NavLink } from "react-router-dom";
import Switch from "./Switch";
import logo from '../assets/logoCharly.png';
import { Theme } from '../context/ThemeProvider';
import CartWidget from './CartWidget'; 

const NavBar = () => {
  const { dark, setDark } = useContext(Theme);

  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <img src={logo} alt="Logo" />
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.isActive : styles.notActive)}
            to={"/category/estampados"}
          >
            Estampados
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.isActive : styles.notActive)}
            to={"/category/lisos"}
          >
            Lisos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.isActive : styles.notActive)}
            to={"/category/Medias"}
          >
            Medias
          </NavLink>
        </li>
        <li>
          <Switch checked={dark} setChecked={setDark} />
        </li>
        <li className={styles.cartWrapper}>
          <CartWidget /> 
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
