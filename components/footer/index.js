import React from "react";
import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";
import NewsLetter from "./NewsLetter";
import Payment from "./Payment";
import Socials from "./Socials";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <FooterLinks />
        <Socials />
        <NewsLetter />
        <Payment />
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
