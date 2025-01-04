import { Box, Typography, useTheme } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import PropTypes from "prop-types";
import "./Embla.css";
const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        mt: { xs: 6, sm: 8, md: 10 },
        backgroundColor: theme.palette.background.default,
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
          mb: "-40px",
          textTransform: "uppercase",
          letterSpacing: "5px",
          color: theme.palette.background.paper,
          textAlign: "center",
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

EmblaCarousel.propTypes = {
  slides: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
};
