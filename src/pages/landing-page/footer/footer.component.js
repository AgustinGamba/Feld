import { Container, Box, Typography, Link } from '@mui/material';
import { NorthEast } from '@mui/icons-material';
import feldLogo from '../../../assets/feldLogo.svg'

import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import styles from './footer.module.css';

function Footer() {
  return (
    <Container className={styles.footerContainer}>
      <Box display="flex" flexDirection="row" >
        <PaddedContainer >
          <Box display="flex" flexDirection="column" >
            {/* TODO: Resize logo */}
            <img alt='Feld Logo' className={styles.footerLogo} src={feldLogo} />
            <Typography variant="body3">
              {/* TODO: Check why it's wrapping */}
              Copyright © 2024 FELD.
            </Typography>
          </Box>
        </PaddedContainer>
        <PaddedContainer >
          <Box display="flex" flexDirection="column" gap={2} >
            <Typography variant="body1" className={styles.footerBlueText}>
              FIND US.
            </Typography>
            <Box >
              <Typography variant="body2">
                {/* TODO: Check why it's wrapping */}
                Buenos aires | Argentina
              </Typography>
              <Typography variant="body2">
                +54 9 11-3518-0602
              </Typography>
            </Box>
          </Box>
        </PaddedContainer>
        <PaddedContainer >
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="body1" className={styles.footerBlueText}>
              {/* TODO: Check why its wrapping */}
              FOLLOW US.
            </Typography>
            <Box >
              <Typography variant="body2">
                Instagram
              </Typography>
              <Typography variant="body2">
                LinkedIn
              </Typography>
            </Box>
          </Box>
        </PaddedContainer>
        <PaddedContainer >
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="body1" className={styles.footerBlueText}>
              GET IN TOUCH.
            </Typography>
            <Box display="flex" flexDirection="row">
              {/* TODO: Fix color and position, too high */}
              <NorthEast />
              <Link href="#">info@estudiofeld.com</Link>
            </Box>
          </Box>
        </PaddedContainer>
      </Box>
    </Container >
  );
}

export default Footer;
