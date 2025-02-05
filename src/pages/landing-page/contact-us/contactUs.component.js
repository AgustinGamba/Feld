import { Container, Box, Typography } from '@mui/material';

import letsTalk from '../../../assets/letsTalk.svg'
import PaddedContainer from '../../../components/padded-container/paddedContainer.component'
import styles from './contactUs.module.css';

function ContactUs() {
  return (
    <Container>
      <Box display="flex" flexDirection="row" textAlign='center' className={styles.contactUsBlackBox}>
        <img alt='Lets talk' src={letsTalk} />
        <Typography alignContent='center' variant="h2" width='50%' className={styles.whiteText}>
          Let's talk
          and shape that
          idea you have.
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" className={styles.contactUsBlueBox}>
        <PaddedContainer>
          <Typography textAlign='center' variant="h2" width='50%' className={styles.whiteText}>
            Contact us.
          </Typography>
        </PaddedContainer>
        <Typography variant="h2" width='50%' className={styles.whiteText}>
          Form
        </Typography>
      </Box>
    </Container>
    // <div>
    //   <div>
    //    
    //   </div>
    //   <div>
    //     We create digital solutions that inspire and grow with you. By blending creativity with tech,
    //     we unlock the true story behind your brand, transforming insights into impactful results
    //   </div>
    //   <div>
    //     Contact us.
    //   </div>
    //   <div>
    //     Full name
    //   </div>
    //   <div>
    //     Email
    //   </div>
    //   <div>
    //     Company
    //   </div>
    //   <div>
    //     Service
    //   </div>
    //   <div>
    //     What can we help you with?
    //   </div>
    //   <div>
    //     Send
    //   </div>
    // </div>
  );
}

export default ContactUs;
