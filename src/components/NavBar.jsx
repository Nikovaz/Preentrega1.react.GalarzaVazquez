import React from "react";
import styles from "../styles/navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./cartWidget";
import logo from '../assets/logoCharly.png';

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.list}>
      <li>
        <img src={logo} alt="Logo" />
      </li>
       
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.isActive : styles.notActive;
            }}
            to={"/category/estampados"}
          >
            Estampados
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.isActive : styles.notActive;
            }}
            to={"/category/lisos"}
          >
            Lisos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.isActive : styles.notActive;
            }}
            to={"/category/Medias"}
          >
            Medias
          </NavLink>
        </li>
        <CartWidget/>
      </ul>
    </nav>
  );
};

export default NavBar;