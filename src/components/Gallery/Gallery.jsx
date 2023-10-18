import React from "react";
import styles from "./Gallery.module.css"
import H1 from "../UI/H1/h1";
import barber from "../../assets/img/barber_man.svg"
import barber1 from "../../assets/img/barber_2.png"

import barber2 from "../../assets/img/barber_3.png";
import barber3 from "../../assets/img/barber_4.png";
import barber4 from "../../assets/img/barber_5.png";
import barber5 from "../../assets/img/barber_6.png";

import Button from "../UI/Button/Button";


export default function Gallery() {
  return (
    <div className={styles.man_barber}> 
      <div className={styles.H2_info}> 
      <H1 fontsize="h_2" >
           Our  <span> Gallery</span>
        </H1>
      </div>
      <div className={styles.son_barber}>
        <img src={barber5} alt="" />
        <img src={barber} alt="" />
        <img src={barber2} alt="" />
       
         
         <img src={barber3} alt="" />
         <img src={barber4} alt="" />
         <img src={barber1} alt="" />
      
         

       
      </div>
      <Button padding="btnP3">View All</Button>
     
    </div>
  );
}
