import { Box, Container, TextField, Typography } from '@mui/material';
import clsx from 'clsx';

import { NorthEast } from '@mui/icons-material';
import styles from './form.module.css';

function Form() {
  const arrowIconClass = clsx(styles.contactUsWhiteText, styles.contactUsArrowIcon)

  return (
    <Box display="flex" flexDirection="column" gap={2} width="fit-content">
      {/* TODO: Add a form */}
      <Box display="flex" flexDirection="column" gap={2}>
        <Box display="flex" flexDirection="row" gap={3}>
          <TextField id="full-name" label="Full name" />
          <TextField id="company" label="Company" />
        </Box>
        <Box display="flex" flexDirection="row" gap={3}>
          <TextField id="email" label="Email address" />
          <TextField id="service" label="Service" />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={4}>
        <TextField id="reason" label="What can we help you with?" multiline maxRows={4} />
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end" >
          <NorthEast className={arrowIconClass} />
          <Typography variant="h4" className={styles.contactUsWhiteText}>
            Send
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Form;
