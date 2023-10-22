import React from "react";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <main className="page-content">
      <div className={styles.welcomeText}>
        <h1>Hi. My name is Nathan Dunn.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam
          atque minus sit quo doloremque a voluptatem. Possimus nesciunt,
          necessitatibus iste similique atque nostrum praesentium, nisi, ut
          cupiditate error commodi.
        </p>
      </div>
    </main>
  );
}
