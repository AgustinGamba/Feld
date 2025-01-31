import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material'

// import styles from './ourWork.module.css';

const Carousel = () => {
  const slides = ['https://placehold.co/320x400', 'https://placehold.co/320x400', 'https://placehold.co/320x400', 'https://placehold.co/320x400', 'https://placehold.co/320x400', 'https://placehold.co/320x400'];

  const carouselRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('in')
            setInView(true);
          } else {
            console.log('out')
            setInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView && carouselRef.current) {
      const scrollInterval = setInterval(() => {
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.clientWidth;

        if (carouselRef.current.scrollLeft + clientWidth < scrollWidth) {
          carouselRef.current.scrollLeft += 70;
        } else {
          clearInterval(scrollInterval);
        }
      }, 20);

      return () => clearInterval(scrollInterval);
    }
  }, [inView]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        ref={carouselRef}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          transition: 'scroll 0.5s ease-in-out',
          width: 'max-content',
          overflow: 'hidden',
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              flexShrink: 0,
              width: 320,
              height: 400,
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginRight: 1.5,
              borderRadius: 4,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
