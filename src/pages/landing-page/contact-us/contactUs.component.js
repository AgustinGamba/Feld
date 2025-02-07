import { Container, Box, TextField, Typography } from '@mui/material';
import clsx from 'clsx';

import letsTalk from '../../../assets/letsTalk.svg';
import { NorthEast } from '@mui/icons-material';
import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import styles from './contactUs.module.css';

function ContactUs() {
  const arrowIconClass = clsx(styles.contactUsWhiteText, styles.contactUsArrowIcon)

  return (
    <Container>
      <Box display="flex" flexDirection="row" textAlign='center' className={styles.contactUsBlackBox}>
        <Container className={styles.contactUsHalfContainer}>
          <img alt='Lets talk' src={letsTalk} />
        </Container>
        <Container className={styles.contactUsHalfContainer}>
          <Typography alignContent='center' variant="h3" width='50%' className={styles.contactUsWhiteText}>
            Let's talk
            and shape that
            idea you have.
          </Typography>
        </Container>
      </Box>
      <Box display="flex" flexDirection="row" className={styles.contactUsBlueBox}>
        <PaddedContainer>
          <Container className={styles.contactUsHalfContainer}>
            <Box display="flex" justifyContent="flex-end">
              <Typography textAlign='center' variant="h2" className={styles.contactUsWhiteText}>
                Contact us.
              </Typography>
            </Box>
          </Container>
        </PaddedContainer>
        <PaddedContainer >
          {/* TODO: Add a form, move to another file */}
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
      </Box>
    </Container>
  );
}

export default ContactUs;
