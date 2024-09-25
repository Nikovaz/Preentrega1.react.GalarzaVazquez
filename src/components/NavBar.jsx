import React from 'react'
import '../styles/navbar.scss'
import CartWidget from './cartWidget'

const NavBar = () => {
  return (
    <ul>
        <li><a className="active" href="#home">home</a></li>
        <li><a href='#news'>News</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><a href='#about'>About</a></li>
        <CartWidget/>
    </ul>
  )
}

export default NavBar