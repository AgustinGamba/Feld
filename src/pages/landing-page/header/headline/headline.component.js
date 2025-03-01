import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Box, Typography } from "@mui/material";

import arrow from "../../../../assets/arrow.svg";
import asterisk from "../../../../assets/asterisk.svg";
import { useBreakpoint } from "../../../../components/breakpoint-provider/breakpointProvider.component";

import styles from "./headline.module.css";

const MainText = () => {
  gsap.registerPlugin(ScrollTrigger);
  const beforeArrowTextRef = useRef(null);
  const arrowRef = useRef(null);
  const afterArrowTextRef = useRef(null);
  const asteriskRef = useRef(null);
  const underlineRef = useRef(null);
  const { isSmallerThanOrEqual } = useBreakpoint();


  useEffect(() => {
    const animation = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });

    animation.set(
      [arrowRef.current, asteriskRef.current, underlineRef.current],
      { opacity: 0, scale: 0.5, scaleX: 0 }
    )
      .fromTo(afterArrowTextRef.current, { x: isSmallerThanOrEqual("xs") ? -10 : -25 }, { x: 20, duration: 0.5, ease: "power2.out" }, 0)
      .to(arrowRef.current, { x: 10, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.3")
      .to(
        asteriskRef.current,
        { opacity: 1, scale: 1, rotate: 360, duration: 0.8, ease: "back.out(1.7)", transformOrigin: "center" },
        "+=0.2"
      )
      .to(
        underlineRef.current,
        { opacity: 1, scaleX: 1, duration: 0.5, ease: "power2.out", transformOrigin: "left" },
        "+=0.3"
      );

  }, []);

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography ref={beforeArrowTextRef} variant="h2">
          We
        </Typography>
        <Box display="flex" justifyContent="center"
          sx={{
            height: isSmallerThanOrEqual("xs") ? "20px" : "30px",
            width: isSmallerThanOrEqual("xs") ? "20px" : "40px",
          }}>
          <img alt='Arrow' src={arrow} ref={arrowRef} />
        </Box>
        <Typography ref={afterArrowTextRef} variant="h2">
          boost brands
        </Typography>
      </Box>
      <Box display="flex" alignItems="baseline" justifyContent="center">
        <Typography variant="h2">
          with creativity&nbsp;
        </Typography>
        <Box sx={{
          height: isSmallerThanOrEqual("xs") ? "25px" : "35px",
          width: isSmallerThanOrEqual("xs") ? "25px" : "35px",
        }}>
          <img ref={asteriskRef} alt="Asterisk" src={asterisk} height="100%" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h2">and&nbsp;</Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h2" noWrap className={styles.headlineDarkerText}>
            digital solutions
          </Typography>
          <Box height="4px"
            ref={underlineRef}
            className={styles.headlineTextUnderline}
          />
        </Box>
      </Box>
    </Box >
  );
};

export default MainText;
