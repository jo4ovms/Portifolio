import { useMemo } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Box, Typography } from "@mui/material";
import styles from "./ImageCarousel.module.css";
const animation = { duration: 25000, easing: (t) => t };

const ImageCarousel = () => {
  const images = useMemo(
    () => [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    ],
    []
  );
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
      spacing: 15,
    },
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        width: "100%",
        height: "300px",
        backgroundColor: "#070707",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "calc(100% - 80px)",
          margin: "0 auto",
          padding: "0 300px",
          mt: "70px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "16px",
            mb: "30px",
            textTransform: "uppercase",
            letterSpacing: "5px",
            color: "#fff",
            fontFamily: "DM Sans",
            textAlign: "center",
            fontWeight: "500",
            paddingTop: "20px",
          }}
        >
          Tecnologias Usadas
        </Typography>
        <div className={styles["carousel-container"]} id="carousel-container">
          <div className={styles["carousel-gradient-left"]}></div>
          <div className={styles["carousel-gradient-right"]}></div>

          <div ref={sliderRef} className="keen-slider">
            {images.map((src, index) => (
              <div key={index} className="keen-slider__slide carousel-slide">
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className={styles["carousel-image"]}
                />
              </div>
            ))}
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
