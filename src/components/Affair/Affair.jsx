import React from "react";
import styles from "./Affair.module.css"
import H1 from "../UI/H1/h1";
import user from "../../assets/icons/scissors.png"
import electr from "../../assets/icons/electricRazor.png"
import shampo from "../../assets/icons/shamboo.png"
export default function Affair() {
  return (
    <div >
      <div className={styles.servic}>
      <H1 fontsize="h_2">
        Services We  <br/>  <span> Provide</span>
      </H1>
      </div>
      
      <div className={styles.scissors_provid}>
      <div className={styles.provid}>
        <img src={user} alt="scissors" />
        <p className={styles.hair_p}>Hair Cut</p>
        <p className={styles.p_info}>
        long established fact that a re <br /> acted by the readable content of <br />
        hen looking at.
        </p>
      </div>
      <div className={styles.provid}>
        <img src={electr} alt="scissors" />
        <p className={styles.hair_p}>Hair Cut</p>
        <p className={styles.p_info}>
        long established fact that a re <br /> acted by the readable content of <br />
        hen looking at.
        </p>
      </div>
      <div className={styles.provid}>
        <img src={shampo} alt="scissors" />
        <p className={styles.hair_p}>Hair Cut</p>
        <p className={styles.p_info}>
        long established fact that a re <br /> acted by the readable content of <br />
        hen looking at.
        </p>
      </div>
      
      </div>
    
    </div>
   
  );
}
