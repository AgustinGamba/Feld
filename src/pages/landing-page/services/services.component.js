import { Container, Box, Typography, Link } from '@mui/material';
import { NorthEast } from '@mui/icons-material';
import React, { useState } from "react";

import { useBreakpoint } from "../../../components/breakpoint-provider/breakpointProvider.component";
import Accordion from "./accordion/accordion.component";
import styles from './services.module.css';
import Carousel from './carousel/carousel.component';

function Services() {
  const { isGreaterThanOrEqual, isSmallerThanOrEqual } = useBreakpoint();

  // TODO: Remove placeholder, add real data
  const services = [{
    name: "Graphic Design", description: "We bring your ideas to life. A well-crafted design can transform your brand's perception, enhance its image, and create a lasting impact in the market."
  }, {
    name: "Web Development", description: "We build everything you need to make your project shine in the digital world. From websites to custom platforms, we create fast, high-performing, and engaging experiences that boost user interaction and deliver measurable results."
  }, {
    name: "Digital Marketing", description: "We craft tailored marketing strategies to elevate your brand's online presence. Through compelling campaigns, we maximize your reach and drive sales effectively."
  }, {
    name: "Social Media", description: "We manage your social media with expertise in content creation, copywriting, art direction, and product photography. Plus, you’ll receive a monthly report to track performance and plan the next steps in real time."
  }];

  const [fullyExpanded, setFullyExpanded] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <Container className={styles.servicesContainer} >
      <Container className={styles.servicesBackgroundImage} >
        <Box >
          <Box display="flex" flexDirection="column"
            sx={{
              gap: isGreaterThanOrEqual("sm") ? 0 : 10
            }} >
            <Box
              display="flex"
              sx={{
                flexDirection: isSmallerThanOrEqual("sm") ? "column" : "row",
                gap: isSmallerThanOrEqual("sm") ? 3 : 0,
              }}
            >
              <Box display="flex" flexDirection="column" width='40%' gap={5} paddingLeft="10%">
                <Box display="flex" flexDirection="row" >
                  <Typography variant="h1">
                    Services
                  </Typography>
                  <Typography variant="h1" className={styles.servicesDot}>
                    .
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column" gap={10}
                  sx={{
                    display: isSmallerThanOrEqual("sm") ? "none" : "flex",
                  }}
                >
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
              <Box>
                <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3} justifyContent="center"
                  sx={{
                    marginLeft: isSmallerThanOrEqual("sm") ? 10 : 0,
                    marginRight: isSmallerThanOrEqual("sm") ? 10 : 0,
                  }}>
                  {services.map((service, index) => (
                    <Accordion
                      key={index + 1}
                      service={service}
                      position={index + 1}
                      onClick={() => fullyExpanded === index + 1 ? setFullyExpanded(null) : setFullyExpanded(index + 1)}
                      expanded={fullyExpanded === index + 1 || hovered === index + 1}
                      onMouseEnter={() => {
                        if (fullyExpanded !== index + 1) setFullyExpanded(null)
                        setHovered(index + 1)
                      }}
                      onMouseLeave={() => {
                        if (fullyExpanded !== index + 1) setHovered(null);
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
            <Box display="flex" gap={5} paddingLeft="10%"
              sx={{
                marginTop: isSmallerThanOrEqual("xs") ? 0 : 5,
                flexDirection: isSmallerThanOrEqual("sm") ? "column" : "row",
              }}>
              <Box display="flex" flexDirection="row">
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
