import { Box, Typography } from "@mui/material";

import imagePlaceholder from "../../../../assets/feldhorizontalScrollPlaceholder.png"
import styles from "./horizontalScroll.module.css";

// TODO: Remove placeholder, add real data
const slides = [
  { name: "Wabro S.A.", description: "Branding & website", image: imagePlaceholder },
  { name: "Wabro S.A.", description: "Branding & website", image: imagePlaceholder },
  { name: "Wabro S.A.", description: "Branding & website", image: imagePlaceholder },
  { name: "Wabro S.A.", description: "Branding & website", image: imagePlaceholder },
  { name: "Wabro S.A.", description: "Branding & website", image: imagePlaceholder },
  { name: "Wabro S.A.", description: "Branding & website", image: imagePlaceholder },
  { name: "Wabro S.A.", description: "Branding & website", image: imagePlaceholder },
  { name: "Wabro S.A.", description: "Branding & website", image: imagePlaceholder },
  { name: "Wabro S.A.", description: "Branding & website", image: imagePlaceholder },
];

const HorizontalScroll = ({ scrollContentRef }) => {
  return (
    <Box ref={scrollContentRef} display="flex" gap={1}>
      {slides.map((slide, index) => (
        <Box key={index + 1}>
          <img src={slide.image} alt={`Slide ${index + 1}`} className={styles.horizontalScrollImage} />
          <Typography variant="body1">
            {slide.name}
          </Typography>
          <Typography variant="body1" className={styles.horizontalScrollSubtitle}>
            /{slide.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScroll;
