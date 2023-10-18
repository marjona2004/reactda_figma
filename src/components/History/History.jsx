import React from "react";
import styles from "./History.module.css"
import imgThree from "../../assets/img/imgThree.png"
import H1 from "../UI/H1/h1";
import P1 from "../UI/P1/p1";
import Button from "../UI/Button/Button";

export default function History() {
  return (
    <div className={styles.history}> 
      <div className={styles.history_img}>
        <img src={imgThree} alt="" />
      </div>
      <div className={styles.history_info}>
        <H1 fontsize="h_2">
          OUR <span> Histor </span>
        </H1>
        <P1 padding="padding_info2">It is a long established fact that a reader will be <br /> distracted by the readable content of a page w <br />
          hen looking at.
        </P1>
        <P1 padding="padding_info2">It is a long established fact that a reader will be <br /> distracted by the readable content of a page w <br />
          hen looking at.
        </P1>
        <Button padding= "btnP2">Learn more</Button>
      </div>
    </div>
  );
}
