import React from "react";
import Button from "../UI/Button/Button";
import H1 from "../UI/H1/h1";
import P1 from "../UI/P1/p1";
import imgTwo from "../../assets/img/imgTwo.png"
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <header>
      <div className={styles.info}>
        <H1 fontsize="h_1">
          <span> Hairstyle </span>Reflects <br /> The Personality <br /> Inside You
        </H1>
        <P1 padding="padding_info1">It is a long established fact that a reader will be <br /> distracted by the readable content of a page w <br />
         hen looking at.
        </P1>
         <Button padding="btnP2">Get Started</Button>
      </div>
      <div className={styles.imgTwo}>
         <img src={imgTwo} alt="" />
      </div>
    </header>
  );
}
