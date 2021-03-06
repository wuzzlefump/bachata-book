import * as React from "react";
import { RiHome2Fill } from "react-icons/ri";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <RiHome2Fill style={{ fontSize: "180px", color: "gray" }} />
        <h1>Bachata Book</h1>
        <button
          className={styles.button}
          onClick={() => navigate("/beginners")}
        >
          Beginner
        </button>
        <button className={styles.button} onClick={() => navigate("/sf")}>
          SF
        </button>
        <button className={styles.button} onClick={() => navigate("/bronze")}>
          Bronze
        </button>
      </div>
    </div>
  );
}
