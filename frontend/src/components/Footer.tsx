import styles from "../styles/Footer.module.css";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className={styles.footer_part}>
      <figure>
        <img
          className={styles.logo}
          src="../../public/Logo_EQ_detection.png"
          alt="Logo_with_name.png"
        />
      </figure>

      <div className={styles.credit_part}>
        <p>© 2026 Earthquake Catalog | Seismic Data Visualization</p>
      </div>
    </footer>
  );
}

export default Footer;
