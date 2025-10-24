import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}><img src="logo.png" alt="Logo"/></Link>
        
        <button className={styles.navToggle} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <li className={styles.navItem}>
            <Link href="/home" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>About Us</Link>
          </li>
          <li className={styles.navItem}><a href="#services" className={styles.navLink}>Our Services</a></li>
          <li className={styles.navItem}><a href="#portfolio" className={styles.navLink}>Portfolio</a></li>
          <li className={styles.navItem}><a href="#pricing" className={styles.navLink}>Pricing</a></li>
        </ul>
         <button className={styles.book_call}>Book A Call</button>
        <div className={styles.menu_icon} onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
}