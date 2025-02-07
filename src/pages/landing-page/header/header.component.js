import { Box, Link, Typography } from '@mui/material'
import { Menu, NorthEast } from '@mui/icons-material';
import clsx from 'clsx';

import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import feldLogo from '../../../assets/feldLogoColor.svg'
import styles from './header.module.css';

function Header() {
  const digitalSolutionsClass = clsx(styles.headerText, styles.headerBoldText)

  return (
    <PaddedContainer className={styles.headerContainer}>
      <Box display="flex" flexDirection="column" gap={9}>
        <Box display="flex" justifyContent="space-between">
          <img alt='Feld Logo' className={styles.headerLogo} src={feldLogo} />
          {/* TODO: add functionality */}
          <Menu className={styles.headerMenuIcon} />
        </Box>
        <Box className={styles.headerTextBox} display="flex" gap={4} alignSelf="center" flexDirection="column" textAlign="center">
          <Box display="flex" flexDirection="column" alignContent="center" alignItems="center" alignSelf="center" justifyContent="center">
            <Typography variant="h2" className={styles.headerText}>
              We boost brands
              with creativity
              and&nbsp;
            </Typography>
            <Typography variant="h2" className={digitalSolutionsClass}>
              digital solutions.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            {/* TODO: Fix color and position, too high */}
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
