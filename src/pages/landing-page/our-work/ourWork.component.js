import { Container, Box, Typography } from '@mui/material'

import PaddedContainer from '../../../components/padded-container/paddedContainer.component'
import Carousel from './carousel/carousel.component';
import styles from './ourWork.module.css';

function OurWork() {
  return (
    <Container className={styles.ourWorkContainer}>
      <PaddedContainer >
        <Box display="flex" flexDirection="row" marginTop={5} marginBottom={5} >
          <Typography variant="h1">
            Our Work
          </Typography>
          <Typography variant="h1" className={styles.ourWorkDot}>
            .
          </Typography>
        </Box>
      </PaddedContainer>
      <Carousel />
    </Container>
  );
}

export default OurWork;
