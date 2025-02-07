import { Box, TextField, Typography } from '@mui/material';
import clsx from 'clsx';

import { NorthEast } from '@mui/icons-material';
import PaddedContainer from '../../../../../components/padded-container/paddedContainer.component';
import styles from './form.module.css';

function Form() {
  const arrowIconClass = clsx(styles.contactUsWhiteText, styles.contactUsArrowIcon)

  return (
    <PaddedContainer >
      {/* TODO: Add a form */}
      <Box display="flex" flexDirection="column" gap={3}>
        <Box display="flex" flexDirection="row" gap={3}>
          <TextField id="full-name" label="Full name" />
          <TextField id="company" label="Company" />
        </Box>
        <Box display="flex" flexDirection="row" gap={3}>
          <TextField id="email" label="Email address" />
          <TextField id="service" label="Service" />
        </Box>
        <TextField id="reason" label="What can we help you with?" multiline maxRows={4} />
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end" >
          <NorthEast className={arrowIconClass} />
          <Typography variant="h4" className={styles.contactUsWhiteText}>
            Send
          </Typography>
        </Box>
      </Box>
    </PaddedContainer>
  );
}

export default Form;
