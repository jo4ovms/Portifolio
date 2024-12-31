import { Box, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "./Embla.css";
const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);

  return (
    <Box
      sx={{
        width: "100vw",
        mt: { xs: 6, sm: 8, md: 10 },
        backgroundColor: "#070707",
        pt: 6,
        pb: 6,
        px: 2,
        marginLeft: "calc(-50vw + 50%)",
        position: "relative",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "16px",
          mb: "-40px",
          textTransform: "uppercase",
          letterSpacing: "5px",
          color: "#fff",
          fontFamily: "DM Sans",
          textAlign: "center",
          fontWeight: "500",
          paddingTop: "10px",
        }}
      >
        Tecnologias Usadas
      </Typography>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((image, index) => (
              <div className="embla__slide" key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="embla__slide__img"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-gradient-left"></div>
        <div className="carousel-gradient-right"></div>
      </div>
    </Box>
  );
};

export default EmblaCarousel;
