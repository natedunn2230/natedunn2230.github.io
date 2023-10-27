import React from "react";
import styles from "./home.module.scss";

import ProfilePicture from "../../public/Profile.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page-content flex">
      <div className={styles.welcomeBox}>
        <div className={styles.welcomeText}>
          <h1>
            <b>
              Hi. My name is <span className={styles.name}>Nathan.</span>
            </b>
          </h1>
          <p>
            Im a fullstack software engineer with experience developing and
            maintaining mission critical applications, serving a wide range of
            customers.
          </p>
          <div className={styles.buttonWrapper}>
            <Link href="/about" className="button">
              Learn More
            </Link>
          </div>
        </div>
        <Image
          className={styles.profilePicture}
          src={ProfilePicture}
          alt="Profile Picture"
        />
      </div>
    </main>
  );
}
