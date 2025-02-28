import { Box, Typography } from '@mui/material';

import letsTalk from '../../../../assets/letsTalk.svg';
import PaddedContainer from '../../../../components/padded-container/paddedContainer.component';
import { useBreakpoint } from "../../../../components/breakpoint-provider/breakpointProvider.component";

import styles from './blackBox.module.css';

function BlackBox() {
  const { isSmallerThanOrEqual } = useBreakpoint();

  return (
    <PaddedContainer className={styles.blackBoxContainer}>
      <Box display="flex" alignItems="center"
        sx={{
          padding: isSmallerThanOrEqual("sm") ? "150px 0" : 0,
          flexDirection: isSmallerThanOrEqual("sm") ? "column" : "row",
          gap: isSmallerThanOrEqual("sm") ? 5 : 0,
        }}>
        <Box display="flex" justifyContent="center" className={styles.blackBoxHalfContainer}>
          <img alt='Lets talk' src={letsTalk} />
        </Box>
        {/* TODO: Text should move to bottom when screen is too small */}
        <Box display="flex" justifyContent="center" textAlign="center" className={styles.blackBoxHalfContainer}>
          <Typography variant="h3" width={"60%"} className={styles.blackBoxWhiteText}>
            Let's talk
            and shape that
            idea you have.
          </Typography>
        </Box>
      </Box>
    </PaddedContainer>
  );
}

export default BlackBox;
