import { Box, Typography } from '@mui/material';

import PaddedContainer from '../../../../components/padded-container/paddedContainer.component';
import { useBreakpoint } from "../../../../components/breakpoint-provider/breakpointProvider.component";
import Form from "./form/form.component";

import styles from './blueBox.module.css';

function BlueBox() {
  const { isSmallerThanOrEqual } = useBreakpoint();

  return (
    <PaddedContainer className={styles.blueBoxContainer}>
      <Box display="flex"
        sx={{
          padding: isSmallerThanOrEqual("sm") ? "50px 0" : 0,
          flexDirection: isSmallerThanOrEqual("sm") ? "column" : "row",
          gap: isSmallerThanOrEqual("sm") ? 3 : 0,
        }}>
        <Box display="flex" className={styles.blueBoxHalfContainer}>
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
