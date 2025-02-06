import { Container, Box, Typography, Link } from '@mui/material';
import { NorthEast } from '@mui/icons-material';

import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import Accordion from "./accordion/accordion.component"
import styles from './services.module.css';

function Services() {
  const services = [{
    name: "Graphic Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }, {
    name: "Graphic Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }, {
    name: "Graphic Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }, {
    name: "Graphic Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }]

  return (
    <Container className={styles.servicesContainer} >
      <PaddedContainer >
        <Box display="flex" flexDirection="column" >
          <Box display="flex" flexDirection="row" >
            <Box display="flex" flexDirection="column" width='40%'>
              <Box display="flex" flexDirection="row" marginTop={5} marginBottom={5} >
                <Typography variant="h1">
                  Services
                </Typography>
                <Typography variant="h1" className={styles.servicesDot}>
                  .
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" gap={10}>
                <Container>
                  <Typography variant="body2" className={styles.servicesDescriptionText}>
                    We create digital solutions that inspire and grow with you. By blending creativity with tech,
                    we unlock the true story behind your brand, transforming insights into impactful results
                  </Typography>
                </Container>
                <Box display="flex" flexDirection="row">
                  <Container>
                    {/* TODO: Fix color and position, too high, add link to arrow */}
                    <NorthEast />
                    <Link href="#" className={styles.servicesLink}>See our work</Link>
                  </Container>
                </Box>
              </Box>
            </Box>
            <Container className={styles.splashContainer}>
              <Box display="flex" flexDirection="column" gap={3}>
                {services.map((service, index) => <Accordion service={service} position={index + 1} />)}
              </Box>
            </Container>
          </Box>
          <Box display="flex" flexDirection="row" marginTop={5} gap={5}>
            <Box display="flex" flexDirection="row" >
              <Typography variant="h4">
                Clients
              </Typography>
              <Typography variant="h4" className={styles.servicesDot}>
                .
              </Typography>
            </Box>
            {/* TODO: Change for logo */}
            <Typography variant="h4">
              Wabro
            </Typography>
            <Typography variant="h4">
              Wabro
            </Typography>
            <Typography variant="h4">
              Wabro
            </Typography>
            <Typography variant="h4">
              Wabro
            </Typography>
            <Typography variant="h4">
              Wabro
            </Typography>
          </Box>
        </Box>
      </PaddedContainer>
    </Container >
  );
}

export default Services;
