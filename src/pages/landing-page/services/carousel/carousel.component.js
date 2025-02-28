import { Box } from '@mui/material';
import Slider from "react-slick";
import styles from "./carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clientPlaceholder from "../../../../assets/clientPlaceholder.svg"
import { useBreakpoint } from "../../../../components/breakpoint-provider/breakpointProvider.component";


// TODO: Remove placeholder, add real data
const clients = [clientPlaceholder, clientPlaceholder, clientPlaceholder, clientPlaceholder];

function FeldCarousel() {
  const { isSmallerThanOrEqual } = useBreakpoint();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isSmallerThanOrEqual("sm") ? 3 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    touchMove: false,
  };

  return (
    <Box className={styles.carouselContainer}>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <Box key={index}>
            <img alt="Client" src={client} className={styles.carouselClientLogo} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default FeldCarousel;
