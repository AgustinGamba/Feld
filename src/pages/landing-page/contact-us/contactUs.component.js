import { Container, Box, Typography } from '@mui/material';
import classNames from 'classnames';

import letsTalk from '../../../assets/letsTalk.svg';
import { NorthEast } from '@mui/icons-material';
import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import styles from './contactUs.module.css';

function ContactUs() {
  const whiteTextWithBorderClass = classNames(styles.contactUsWhiteText, styles.contactUsBorder)

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
            <Typography textAlign='center' variant="h2" width='50%' className={styles.contactUsWhiteText}>
              Contact us.
            </Typography>
          </Container>
        </PaddedContainer>
        <PaddedContainer >
          <Box display="flex" flexDirection="column" gap={3}>
            <Box display="flex" flexDirection="row" gap={20}>
              <Typography variant="body2" minWidth={"20%"} className={whiteTextWithBorderClass}>
                Full name
              </Typography>
              <Typography variant="body2" minWidth={"20%"} className={whiteTextWithBorderClass}>
                Company
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={20}>
              <Typography variant="body2" minWidth={"20%"} className={whiteTextWithBorderClass}>
                Email address
              </Typography>
              <Typography variant="body2" minWidth={"20%"} className={whiteTextWithBorderClass}>
                Service
              </Typography>
            </Box>
            <Typography variant="body2" className={whiteTextWithBorderClass}>
              What can we help you with?
            </Typography>
            <Box display="flex" flexDirection="row" >
              {/* TODO: Fix color and position, too high */}
              <NorthEast />
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
