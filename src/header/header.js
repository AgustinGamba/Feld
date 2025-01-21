import { Container } from '@mui/material'
;
import styles from './header.module.css';

function Header() {
  return (
    <Container className={styles.headerContainer}>
      <div className={styles.headerText}>
        We boost brands with creativity and digital solutions
      </div>
      <div>
        See our work
      </div>
    </Container>
  );
}

export default Header;
