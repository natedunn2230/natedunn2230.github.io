import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import styles from "./hamburger.module.scss";
import CloseIco from "public/Close.svg";
import HamburgerCloseIco from "public/HamburgerClose.svg";
import Image from "next/image";

function ClickOutsideMenu(ref: MutableRefObject<HTMLElement>, cb: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
}

export default function Hamburger({ children }: { children: React.ReactNode }) {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);
  const menu = useRef(null);

  /*
   * Hacky hook to determine if the user clicks outside the bounds of the menu.
   */
  ClickOutsideMenu(menu as unknown as MutableRefObject<HTMLElement>, () =>
    setHamburgerOpen(false),
  );

  return (
    <div className={styles.hamburger}>
      <Image
        src={HamburgerCloseIco}
        alt="hamburger menu"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      ></Image>
      <div
        style={{
          visibility: hamburgerOpen ? "visible" : "hidden",
          opacity: hamburgerOpen ? "1" : "0",
          transition: "all 250ms",
        }}
        ref={menu}
        className={styles.overlayMenu}
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        <Image
          src={CloseIco}
          alt="hamburger menu"
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        ></Image>
        {children}
      </div>
      {/* )} */}
    </div>
  );
}
