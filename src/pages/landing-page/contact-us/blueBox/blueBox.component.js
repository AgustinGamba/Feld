import { Container, Box, Typography } from '@mui/material';

import Form from "./form/form.component";
import styles from './blueBox.module.css';

function BlueBox() {
  return (
    <Container>
      <Box display="flex" flexDirection="row" className={styles.blueBoxContainer}>
        <Container className={styles.blueBoxHalfContainer}>
          <Box display="flex" justifyContent="flex-end">
            <Typography textAlign='center' variant="h2" className={styles.blueBoxWhiteText}>
              Contact us.
            </Typography>
          </Box>
        </Container>
        <Form />
      </Box>
    </Container>
  );
}

export default BlueBox;
