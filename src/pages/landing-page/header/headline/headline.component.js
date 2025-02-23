import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Box, Typography } from "@mui/material";

import arrow from "../../../../assets/arrow.svg";
import asterisk from "../../../../assets/asterisk.svg";

import styles from "./headline.module.css";

gsap.registerPlugin(ScrollTrigger);

const MainText = () => {
  const beforeArrowTextRef = useRef(null);
  const arrowRef = useRef(null);
  const afterArrowTextRef = useRef(null);
  const asteriskRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const animation = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });

    animation.set([arrowRef.current, asteriskRef.current], { opacity: 0, scale: 0.5 })
      .fromTo(afterArrowTextRef.current, { x: -25 }, { x: 20, duration: 0.5, ease: "power2.out" }, 0)
      .to(arrowRef.current, { x: 10, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.3")
      .to(
        asteriskRef.current,
        { opacity: 1, scale: 1, rotate: 360, duration: 0.8, ease: "back.out(1.7)", transformOrigin: "center" },
        "+=0.2"
      )
      .to(underlineRef.current, { opacity: 1, scaleX: 1, duration: 0.5, ease: "power2.out" }, "+=0.3");
  }, []);

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography ref={beforeArrowTextRef} variant="h2" className={styles.headlineText}>
          We
        </Typography>
        <img alt='Arrow' src={arrow} ref={arrowRef} className={styles.headlineArrow} />
        <Typography ref={afterArrowTextRef} variant="h2" className={styles.headlineText}>
          boost brands
        </Typography>
      </Box>
      <Box display="flex" alignItems="baseline" justifyContent="center">
        <Typography variant="h2" className={styles.headlineText}>
          with creativity&nbsp;
        </Typography>
        <img ref={asteriskRef} alt="Asterisk" src={asterisk} className={styles.headlineAsterisk} />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h2" className={styles.headlineText}>and&nbsp;</Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h2" className={styles.headlineDarkerText}>
            digital solutions
          </Typography>
          <Box height="2px"
            ref={underlineRef}
            className={styles.headlineTextUnderline}
          />
        </Box>
      </Box>
    </Box >
  );
};

export default MainText;
