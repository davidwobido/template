import React from "react";

import "./globals.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>
        <p className={styles.text}>Welcome to your new project 💥</p>
      </header>
    </div>
  );
}

export default App;
