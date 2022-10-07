import React from "react";
import styles from "./Navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus, AiFillAppstore } from "react-icons/ai";
const Navbar = () => {
  return (
    <section className={`${styles.navbar_container}  `}>
      <section className={styles.navbar_left}>
        <h1>Agumentik</h1>
      </section>

      <ul className={styles.navbar_right}>
        <li>
          <GiHamburgerMenu className={styles.menu_icon} />
        </li>
        <li className={`${styles.searchbar}`}>
          <input type="text" placeholder="Search products" />
        </li>

        <li>
          <button className={styles.create_project}>
            <AiOutlinePlus />
            Create New Project
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
