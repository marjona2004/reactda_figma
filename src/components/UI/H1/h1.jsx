import React from 'react';
import styles from "./H1.module.css"

export default function H1({children,fontsize}) {
  return (
    <h1 className={`${styles["btn"]} ${styles[`${fontsize}`]}`}>{children}</h1>
  )
}