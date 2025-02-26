import { Box, Link, Typography } from '@mui/material'
import { Menu, NorthEast } from '@mui/icons-material';

import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import Headline from "./headline/headline.component";
import feldLogo from '../../../assets/feldLogoColor.svg'
import styles from './header.module.css';

function Header() {
  return (
    <PaddedContainer className={styles.headerContainer}>
      {/* TODO: Change gap in mobile */}
      <Box display="flex" flexDirection="column" height="100%" alignItems="center" >
        <Box display="flex" width="100%" alignItems="center" justifyContent="space-between" paddingTop="5%">
          {/* TODO: Resize on mobile */}
          {/* TODO: Navigate to main page on click */}
          <img alt='Feld Logo' className={styles.headerLogo} src={feldLogo} />
          <Menu className={styles.headerMenuIcon} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
          gap={8}
        >
          <Headline />
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            {/* TODO: Resize on mobile */}
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
