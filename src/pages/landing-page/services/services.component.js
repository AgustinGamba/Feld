import { Container, Box, Typography } from '@mui/material'

import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import styles from './services.module.css';

function Services() {
  return (
    <Container className={styles.servicesContainer}>
      <PaddedContainer >
        <Box display="flex" flexDirection="row" >
          <Box display="flex" flexDirection="column" >
            <Box display="flex" flexDirection="row" marginTop={5} marginBottom={5} >
              <Typography variant="h1">
                Services
              </Typography>
              <Typography variant="h1" className={styles.servicesDot}>
                .
              </Typography>
            </Box>
            <div>
              We create digital solutions that inspire and grow with you. By blending creativity with tech,
              we unlock the true story behind your brand, transforming insights into impactful results
            </div>
            <div>
              See our work
            </div>
          </Box>
          <Container className={styles.splashContainer}>
            <div>
              01/
            </div>
            {/* ----- */}
            <div>
              Graphic design
            </div>
            <div>
              Clients.
            </div>
            <div>
              Wabro
            </div>
          </Container>
        </Box>
      </PaddedContainer>
    </Container >
  );
}

export default Services;
