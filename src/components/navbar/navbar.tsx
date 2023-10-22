"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";

export default function NavBar() {
  const currentPage = usePathname();

  return (
    <div className={styles.navbar}>
      LOGO HERE
      <div className={styles.links}>
        <Link
          className={currentPage === "/" ? styles.linkSelected : styles.link}
          href="/"
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
      </div>
    </div>
  );
}
