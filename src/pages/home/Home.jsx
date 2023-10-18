import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import History from "../../components/History/History";
import Affair from "../../components/Affair/Affair";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css"

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className={styles.foo_info}>
        <div className={styles.istory_affai}>
          <History />
          <Affair />
        </div>
        <div className={styles.gallery_footer} />
        <Gallery />
        <Footer />
      </div>
    </div>



  );
}
