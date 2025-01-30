import { Container, Box, Link, Typography } from '@mui/material'
import { Menu, NorthEast } from '@mui/icons-material';
import classNames from 'classnames';

import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import feldLogo from '../../../assets/feldLogoColor.svg'
import styles from './header.module.css';

function Header() {
  const digitalSolutionsClass = classNames(styles.headerText, styles.boldText)

  return (
    <PaddedContainer className={styles.headerContainer}>
      <Container>
        <Box className={styles.headerBox} display="flex" justifyContent="space-between">
          {/* TODO: Resize logo */}
          <img alt='Feld Logo' className={styles.headerLogo} src={feldLogo} />
          {/* TODO: Resize icon, add functionality */}
          <Menu />
        </Box>
        {/* TODO: Define space between header bar and this */}
        <Box className={styles.headerTextBox} display="flex" gap={5} alignItems="center" flexDirection="column" textAlign="center">
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" className={styles.headerText}>
              We boost brands
            </Typography>
            <Typography variant="h1" className={styles.headerText}>
              with creativity
            </Typography>
            <Box display="flex" flexDirection="row">
              <Typography variant="h1" className={styles.headerText}>
                and&nbsp;
              </Typography>
              <Typography variant="h1" className={digitalSolutionsClass}>
                digital solutions
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            {/* TODO: Fix color and position, too high */}
            <NorthEast />
            <Link href="#" className={styles.headerLink}>See our work</Link>
          </Box>
          {/* TODO: Define space between header text and header end */}
        </Box>
      </Container >
    </PaddedContainer >
  );
}

export default Header;
