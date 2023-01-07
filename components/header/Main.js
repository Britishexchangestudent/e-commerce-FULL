import Link from "next/link";
import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import styles from "./styles.module.scss";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/">
          <img src="../../../logo.png" alt="" className={styles.logo} />
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart">
          <div className={styles.cart}>
            <FaOpencart />
            <span>0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Main;
