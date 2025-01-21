import { Container, SvgIcon } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu';

import feldLogo from '../../assets/feldLogoColor.svg'

import styles from './header.module.css';

function Header() {
  return (
    <Container className={styles.headerContainer}>
      <Container>
        <SvgIcon className={styles.HeaderLogo}>{feldLogo}</SvgIcon>
      </Container>
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
