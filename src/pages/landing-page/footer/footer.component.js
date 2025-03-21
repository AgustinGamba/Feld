import { Container, Box, Typography, Link } from '@mui/material';
import { NorthEast } from '@mui/icons-material';
import feldLogo from '../../../assets/feldLogo.svg'
import clsx from 'clsx';

import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import { useBreakpoint } from "../../../components/breakpoint-provider/breakpointProvider.component";
import styles from './footer.module.css';

function Footer() {
  const arrowIconClass = clsx(styles.footerHyperlink, styles.footerArrowIcon);
  const { isSmallerThanOrEqual } = useBreakpoint();

  return (
    <PaddedContainer className={styles.footerContainer}>
      <Box display="flex"
        sx={{
          flexDirection: isSmallerThanOrEqual("sm") ? "column" : "row",
          gap: isSmallerThanOrEqual("sm") ? 4 : 0,
        }}>
        <Box display="flex" flexDirection="column" alignItems="stretch">
          <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
            <img alt='Feld Logo' className={styles.footerLogo} src={feldLogo} />
            <Typography variant="body2" fontSize={14}>
              Copyright © 2024 FELD.
            </Typography>
          </Box>
        </Box>
        <Box display="flex"
          flexGrow={3}
          sx={{
            flexDirection: isSmallerThanOrEqual("sm") ? "column" : "row",
            gap: isSmallerThanOrEqual("sm") ? 3 : 0,
          }}>
          <Container >
            <Box display="flex" flexDirection="column" gap={2}
              sx={{
                alignItems: isSmallerThanOrEqual("sm") ? "baseline" : "center",
              }}>
              <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
                <Typography variant="body1" className={styles.footerBlueText}>
                  FIND US.
                </Typography>
                <Box >
                  <Typography variant="body2">
                    Buenos aires | Argentina
                  </Typography>
                  <Typography variant="body2">
                    {/* TODO Add link */}
                    +54 9 11-3518-0602
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
          <Container >
            <Box display="flex" flexDirection="column" gap={2} sx={{
              alignItems: isSmallerThanOrEqual("sm") ? "baseline" : "center",
            }}>
              <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
                <Typography variant="body1" className={styles.footerBlueText}>
                  FOLLOW US.
                </Typography>
                <Box >
                  {/* TODO: Add link */}
                  <Typography variant="body2" className={styles.footerUnderlinedHyperlink}>
                    Instagram
                  </Typography>
                  <Typography variant="body2" className={styles.footerUnderlinedHyperlink}>
                    {/* TODO: Add link */}
                    LinkedIn
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
          <Container >
            <Box display="flex" flexDirection="column" gap={2} sx={{
              alignItems: isSmallerThanOrEqual("sm") ? "baseline" : "center",
            }}>
              <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
                <Typography variant="body1" className={styles.footerBlueText}>
                  GET IN TOUCH.
                </Typography>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                  <NorthEast className={arrowIconClass} />
                  <Link href="#" className={styles.footerHyperlink}>
                    <Typography variant="body2" >
                      {/* TODO: Add link */}
                      info@estudiofeld.com
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box >
      </Box >
    </PaddedContainer >
  );
}

export default Footer;
