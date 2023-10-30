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
              Hi. I&#8217;m <span className={styles.name}>Nathan Dunn</span>.
            </b>
          </h1>
          <p>
            A fullstack software engineer with experience developing and
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
          priority
          className={styles.profilePicture}
          src={ProfilePicture}
          alt="Profile Picture"
        />
      </div>
    </main>
  );
}
