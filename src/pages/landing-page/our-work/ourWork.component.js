import { useEffect, useRef } from "react";
import { Container, Box, Typography } from '@mui/material'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PaddedContainer from '../../../components/padded-container/paddedContainer.component'
import HorizontalScroll from './horizontal-scroll/horizontalScroll.component';
import styles from './ourWork.module.css';

gsap.registerPlugin(ScrollTrigger);

function OurWork() {
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);

  useEffect(() => {
    if (scrollContentRef.current && scrollContainerRef.current) {
      const scrollWidth = scrollContentRef.current.scrollWidth - scrollContainerRef.current.clientWidth;

      gsap.to(scrollContentRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${scrollWidth * 1}`,

        },
      });
    }
  }, []);

  return (
    <Container ref={scrollContainerRef} className={styles.ourWorkContainer}>
      <PaddedContainer>
        <Box display="flex" flexDirection="row" marginTop={5} marginBottom={5}>
          <Typography variant="h1">
            {/* In mobile should be shown when scrolling */}
            Our Work
          </Typography>
          <Typography variant="h1" className={styles.ourWorkDot}>
            .
          </Typography>
        </Box>
      </PaddedContainer>
      <Box>
        <HorizontalScroll scrollContentRef={scrollContentRef} />
      </Box>
    </Container>
  );
}

export default OurWork;
