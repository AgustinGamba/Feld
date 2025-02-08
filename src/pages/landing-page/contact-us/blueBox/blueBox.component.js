import { Box, Typography } from '@mui/material';

import PaddedContainer from '../../../../components/padded-container/paddedContainer.component';
import Form from "./form/form.component";

import styles from './blueBox.module.css';

function BlueBox() {
  return (
    <PaddedContainer className={styles.blueBoxContainer}>
      <Box display="flex" flexDirection="row">
        <Box display="flex" justifyContent="center" className={styles.blueBoxHalfContainer}>
          <Typography textAlign='center' variant="h1" className={styles.blueBoxWhiteText}>
            Contact us.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" className={styles.blueBoxHalfContainer}>
          <Form />
        </Box>
      </Box>
    </PaddedContainer>
  );
}

export default BlueBox;
