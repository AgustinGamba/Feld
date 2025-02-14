import { Box, Typography } from "@mui/material";

import imagePlaceholder from "../../../../assets/feldCarouselPlaceholder.png"
import styles from "./carousel.module.css";

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

const Carousel = ({ scrollContentRef }) => {
  return (
    <Box ref={scrollContentRef} display="flex" gap={1}>
      {slides.map((slide, index) => (
        <Box key={index + 1}>
          <img src={slide.image} alt={`Slide ${index + 1}`} className={styles.carouselImage} />
          <Typography variant="body1">
            {slide.name}
          </Typography>
          <Typography variant="body1" className={styles.carouselSubtitle}>
            /{slide.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Carousel;
