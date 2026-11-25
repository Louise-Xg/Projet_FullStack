import styles from "../styles/Header.module.css";
import { Link } from "react-router";

function Header() {
  return (
    <header className={styles.header_part}>
      <figure>
        <img
          className={styles.logo}
          src="../../public/Logo_EQ_detection.png"
          alt="Logo_with_name.png"
        />
      </figure>
      <nav className={styles.nav_part}>
        <Link to="/full_eq_catalog">
          <button> ⍟ Earthquakes</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
