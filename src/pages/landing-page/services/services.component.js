import { Container, Box, Typography, Link } from '@mui/material';
import { NorthEast } from '@mui/icons-material';
import React, { useState } from "react";

import Accordion from "./accordion/accordion.component"
import styles from './services.module.css';
import Carousel from './carousel/carousel.component';

function Services() {
  // TODO: Remove placeholder, add real data
  const services = [{
    name: "Graphic Design", description: "We bring your ideas to life. A well-crafted design can transform your brand's perception, enhance its image, and create a lasting impact in the market."
  }, {
    name: "Web Development", description: "We build everything you need to make your project shine in the digital world. From websites to custom platforms, we create fast, high-performing, and engaging experiences that boost user interaction and deliver measurable results."
  }, {
    name: "Digital Marketing", description: "We craft tailored marketing strategies to elevate your brand's online presence. Through compelling campaigns, we maximize your reach and drive sales effectively."
  }, {
    name: "Content & Social Media", description: "We manage your social media with expertise in content creation, copywriting, art direction, and product photography. Plus, you’ll receive a monthly report to track performance and plan the next steps in real time."
  }];

  const [expanded, setExpanded] = useState(null);

  const handleChange = id => (_, isExpanded) => {
    setExpanded(isExpanded ? id : null);
  };

  return (
    <Container className={styles.servicesContainer} >
      <Container className={styles.servicesBackgroundImage} >
        <Box paddingLeft="10%" >
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
              <Box paddingLeft="5%">
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
              </Box>
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
              <Carousel />
            </Box>
          </Box>
        </Box>
      </Container >
    </Container >
  );
}

export default Services;
