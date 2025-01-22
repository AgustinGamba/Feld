import { Container, Box, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NorthEastIcon from '@mui/icons-material/NorthEast';

import feldLogo from '../../assets/feldLogoColor.svg'

import styles from './header.module.css';

function Header() {
  return (
    <Container className={styles.headerContainer}>
      <Box className={styles.headerBox}>
        {/* TODO: Resize logo */}
        <img className={styles.headerLogo} src={feldLogo} />
        {/* TODO: Resize icon */}
        <MenuIcon />
      </Box>
      <Box className={styles.headerTextBox}>
        <div className={styles.headerText}>
          We boost brands
        </div>
        <div className={styles.headerText}>
          with creativity
        </div>
        <div className={styles.headerText}>
          and digital solutions
        </div>
        <Box>
          {/* TODO: Fix color and position, too high */}
          <NorthEastIcon />
          <Link href="#" className={styles.headerLink}>See our work</Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Header;
