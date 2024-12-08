import React from "react";
import styles from "./Home.module.css";


const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.textOverlay}>
        <p>
          NEW IN <br />
          <b>SCALPERS</b>
        </p>
        <p>
          The latest trends, with authentic touches  <br />
          <b>Buy now</b>
        </p>
      </div>
      <img
      src="/banner.jpg"
      alt="Online business illustration"
      className={styles.homeImage}
    />

    
    </div>

    
    
  );
};

export default Home;
