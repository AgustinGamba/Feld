import { Box, Link, Typography } from '@mui/material'
import { Menu, NorthEast } from '@mui/icons-material';

import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import Headline from "./headline/headline.component";
import feldLogo from '../../../assets/feldLogoColor.svg';
import { useBreakpoint } from "../../../components/breakpoint-provider/breakpointProvider.component";

import styles from './header.module.css';

function Header() {
  const { isSmallerThanOrEqual } = useBreakpoint();

  return (
    <PaddedContainer className={styles.headerContainer}>
      <Box display="flex" flexDirection="column" height="100%" alignItems="center" >
        {/* TODO: Change gap in mobile */}
        <Box display="flex" width="100%" alignItems="center" justifyContent="space-between" paddingTop="5%">
          {/* TODO: Navigate to main page on click */}
          <Box
            sx={{
              height: isSmallerThanOrEqual("xs") ? "25px" : "36px",
              width: isSmallerThanOrEqual("xs") ? "60px" : "88px",
            }}>
            <img alt='Feld Logo' src={feldLogo} height="100%" />
          </Box>
          <Box>
            {/* TODO: Add functionality */}
            <Menu />
          </Box>
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
            {/* TODO: Add hyperlink */}
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
