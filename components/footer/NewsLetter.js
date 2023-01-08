import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

function NewsLetter() {
  return (
    <div className={styles.footer__newsletter}>
      <h3>SIGN UP FOR OUR NEWSLETTER</h3>
      <div className={styles.footer__flex}>
        <input type="text" placeholder="Your E-mail address" />
        <button className={styles.btn_primary}>SUBSCRIBE</button>
      </div>
      <p>
        By clicking SUBSCRIBE, you are agreeing to{" "}
        <Link href="">our Privacy & Cookie Policy</Link>
      </p>
    </div>
  );
}

export default NewsLetter;
