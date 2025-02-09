import { Container, Box, Typography, Link } from '@mui/material';
import { NorthEast } from '@mui/icons-material';
import React, { useState } from "react";


import PaddedContainer from '../../../components/padded-container/paddedContainer.component';
import Accordion from "./accordion/accordion.component"
import styles from './services.module.css';

function Services() {
  const services = [{
    name: "Graphic Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }, {
    name: "Graphic Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }, {
    name: "Graphic Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }, {
    name: "Graphic Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }]
  const [expanded, setExpanded] = useState(null);

  const handleChange = id => (_, isExpanded) => {
    setExpanded(isExpanded ? id : null);
  };

  return (
    <Container className={styles.servicesContainer} >
      <Container className={styles.servicesBackgroundImage} >
        <PaddedContainer >
          <Box display="flex" flexDirection="column" gap={10} >
            <Box display="flex" flexDirection="row" >
              <Box display="flex" flexDirection="column" width='40%' gap={5}>
                <Box display="flex" flexDirection="row" >
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
                    <NorthEast className={styles.servicesHyperlink} />
                    <Link href="#" className={styles.servicesHyperlink}>
                      <Typography variant="body1" >
                        See our work
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <PaddedContainer>
                <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3}>
                  {services.map((service, index) => (
                    <Accordion
                      key={index + 1}
                      service={service}
                      position={index + 1}
                      onChange={handleChange(index + 1)}
                      expanded={expanded === index + 1} />
                  ))}
                </Box>
              </PaddedContainer>
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
              {/* TODO: Change for logo carousel? */}
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
    </Container >
  );
}

export default Services;
