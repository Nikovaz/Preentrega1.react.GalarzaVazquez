import React from 'react'
import styles from '../styles/item.module.scss'
import CartWidget from './cartWidget'



const Item = ({item}) => {
  return (
    <div className={styles.container}>
        <img src={item.URLimg}/>
        <h2>{item.title}</h2>
        <span>{item.description}</span>
        <span>${item.price}</span>
        
    </div>
  )
}

export default Item