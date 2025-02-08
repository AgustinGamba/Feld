import { Box, Typography } from '@mui/material';

import letsTalk from '../../../../assets/letsTalk.svg';
import PaddedContainer from '../../../../components/padded-container/paddedContainer.component';

import styles from './blackBox.module.css';

function BlackBox() {
  return (
    <PaddedContainer className={styles.blackBoxContainer}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box display="flex" justifyContent="center" className={styles.blackBoxHalfContainer}>
          <img alt='Lets talk' src={letsTalk} />
        </Box>
        {/* TODO: Text should move to bottom when screen is too small */}
        <Box display="flex" justifyContent="center" className={styles.contactUsHalfContainer}>
          <Typography variant="h3" width={"50%"} className={styles.blackBoxWhiteText}>
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
