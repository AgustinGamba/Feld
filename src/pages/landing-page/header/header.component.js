import { Box, Link, Typography } from '@mui/material'
import { Menu, NorthEast } from '@mui/icons-material';

import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import Headline from "./headline/headline.component";
import feldLogo from '../../../assets/feldLogoColor.svg'
import styles from './header.module.css';

function Header() {

  return (
    <PaddedContainer className={styles.headerContainer}>
      <Box display="flex" flexDirection="column" gap={9}>
        <Box display="flex" justifyContent="space-between">
          <img alt='Feld Logo' className={styles.headerLogo} src={feldLogo} />
          <Menu className={styles.headerMenuIcon} />
        </Box>
        <Box className={styles.headerTextBox} display="flex" gap={4} alignSelf="center" flexDirection="column" textAlign="center">
          <Headline />
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <NorthEast className={styles.headerHyperlink} />
            <Link href="#" className={styles.headerHyperlink}>
              <Typography variant="body1" >
                See our work
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </PaddedContainer >
  );
}

export default Header;
