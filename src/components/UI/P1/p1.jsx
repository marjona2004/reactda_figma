import React from 'react'
import styles from "./p1.module.css"

export default function P1({children ,padding}) {
  return (
    <p className={`${styles.p_one} ${styles[`${padding}`]}`}>{children}</p>
  )
}
