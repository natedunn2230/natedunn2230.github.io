"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";
import homeLogoIco from "../../../public/TitleIcon.svg";
import Image from "next/image";
import Hamburger from "./hamburger/hamburger";

export default function NavBar() {
  const currentPage = usePathname();

  function links() {
    return (
      <>
        <Link
          className={
            currentPage === "/about" ? styles.linkSelected : styles.link
          }
          href="/about"
        >
          About
        </Link>
        <Link
          className={
            currentPage === "/work" ? styles.linkSelected : styles.link
          }
          href="/work"
        >
          Experience
        </Link>
        <Link
          className={
            currentPage === "/contact" ? styles.linkSelected : styles.link
          }
          href="/contact"
        >
          Contact
        </Link>
      </>
    );
  }

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <Image className={styles.icon} src={homeLogoIco} alt="Homepage logo" />
      </Link>
      <div className={styles.links}>{links()}</div>
      <div className={styles.hamburger}>
        <Hamburger>{links()}</Hamburger>
      </div>
    </div>
  );
}
