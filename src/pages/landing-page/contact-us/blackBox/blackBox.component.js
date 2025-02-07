import { Container, Box, Typography } from '@mui/material';

import letsTalk from '../../../../assets/letsTalk.svg';
import styles from './blackBox.module.css';

function BlackBox() {
  return (
    <Container>
      <Box display="flex" flexDirection="row" textAlign='center' className={styles.blackBoxContainer}>
        <Container className={styles.blackBoxHalfContainer}>
          <img alt='Lets talk' src={letsTalk} />
        </Container>
        <Container className={styles.contactUsHalfContainer}>
          <Typography alignContent='center' variant="h3" width='50%' className={styles.blackBoxWhiteText}>
            Let's talk
            and shape that
            idea you have.
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}

export default BlackBox;
