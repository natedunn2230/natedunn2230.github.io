import Link from "next/link";
import styles from "./navbar.module.scss";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link className={styles.link} href="/about">
        About
      </Link>
      <Link className={styles.link} href="/contact">
        Contact
      </Link>
      <Link className={styles.link} href="/work">
        My Work
      </Link>
    </div>
  );
}
