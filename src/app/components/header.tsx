"use client";

import styles from "../page.module.css";
import Link from "next/link";


export default function HeaderComponent() {
 
  return (
    <header className={styles.header}>
      <div className={styles.headerFlex}>
        <div className={styles.flexItems}>
          <h4>Home</h4>
          <h4>About us</h4>
          <h4>What can i build</h4>
          <Link href="/profile"><h4>Profile</h4></Link>
          <Link href="/signin">
            <h4>Sign in</h4>
          </Link>
        </div>
      </div>
      <div className={styles.headerFlex}>
        <h4>LOGO</h4>
      </div>
    </header>
  );
}
