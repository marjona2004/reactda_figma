import React from "react";
import logo from "../../assets/img/logo.png";
import P1 from "../UI/P1/p1";
import styles from "./Footer.module.css"
import facebook from "../../assets/img/facebook.svg"
import twitter from "../../assets/img/twitter.svg";
import google from "../../assets/img/google.svg"



export default function Footer() {
  return (
    <div className={styles.Footer_info}>
      <img src={logo} alt="" />/
      <P1 padding="padding_info1">
        It is a long established fact that a reader will be <br /> distracted by the readable 
      </P1>
       <div className={styles.imgs}>
       <img src={facebook} alt="" />
       <img src ={twitter} alt="" />
       <img src={google} alt="" />

       </div>
    </div>
  );
}
