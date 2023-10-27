"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";
import homeLogoIco from "../../../public/TitleLogo.svg";
import Image from "next/image";
import HamburgerOpenIco from "../../../public/HamburgerOpen.svg";
import HamburgerCloseIco from "../../../public/HamburgerClose.svg";
import { useState } from "react";

export default function NavBar() {
  const currentPage = usePathname();
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <Image
          className={styles.icon}
          priority
          src={homeLogoIco}
          alt="Homepage logo"
        />
      </Link>
      <div className={styles.links}>
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
      </div>
      <div className={styles.hamburger}>
        <Image
          src={hamburgerOpen ? HamburgerOpenIco : HamburgerCloseIco}
          alt="hamburger menu"
          onClick={() => setHamburgerOpen((open) => !open)}
        ></Image>
      </div>
    </div>
  );
}
