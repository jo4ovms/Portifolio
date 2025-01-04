import {
  Typography,
  Button,
  Container,
  useTheme,
  Box,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useMemo, useRef } from "react";
import MockupGallery from "../../components/MockupGallery/MockupGallery";
import CalltoAction from "../../components/CalltoAction/CalltoAction";
import DownloadIcon from "@mui/icons-material/Download";
import EmblaCarousel from "../../components/Carousel/EmblaCarousel";
import RoundGradientButton from "../Skills/ContainedButtons";
import { motion, useInView } from "framer-motion";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

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

  const mockupRef = useRef(null);
  const isInView = useInView(mockupRef, { once: true });

  const OPTIONS = {
    loop: true,
    playOnInit: false,
    stopOnInteraction: false,
    dragFree: false,
    watchDrag: false,
    duration: 60,
    watchFocus: false,
  };

  const SLIDES = images;

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const zoomInVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Container
      sx={{
        height: "100%",
        padding: isSmallScreen ? 2 : isMediumScreen ? 3 : 4,
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          height: isSmallScreen || isMediumScreen ? "auto" : "450px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <Grid size={{ xs: 12, sm: 9, md: 10, lg: 5 }}>
          <motion.div variants={fadeInUp}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "calc(100% * 16 / 16)",
                overflow: "hidden",
                borderRadius: "40px",
                cursor: "pointer",
                backgroundImage: `url(me3.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                border: `4px ${theme.palette.background.main} solid`,
                backgroundPosition: "center",
              }}
            />
          </motion.div>
        </Grid>

        <Grid
          size={{ xs: 12, md: 12, lg: 7 }}
          container
          direction="column"
          spacing={2}
        >
          <motion.div variants={fadeInUp}>
            <Grid>
              <Typography
                variant="h1"
                sx={{
                  fontSize: isSmallScreen
                    ? "40px"
                    : isMediumScreen
                    ? "50px"
                    : isLargeScreen
                    ? "50px"
                    : "60px",
                  textAlign: isLargeScreen ? "center" : "left",
                  margin: isLargeScreen ? "unset" : "-10px 50px 0 90px",
                  width: isLargeScreen ? "100%" : "calc(100% - -40px)",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #fff 0%, #696969 85%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Sou um desenvolvedor back-end, entusiasta de front-end e
                  apaixonado por tecnologia.
                </span>
              </Typography>
            </Grid>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Grid>
              <Typography
                variant="h2"
                sx={{
                  textAlign: isLargeScreen ? "center" : "left",
                  margin: isLargeScreen ? "unset" : "0 90px",
                  width: isLargeScreen ? "100%" : "calc(100% - -30px)",
                }}
              >
                Olá, me chamo João e estou cursando Análise e Desenvolvimento de
                Sistemas. Construo soluções escaláveis no back-end com Java e
                interfaces modernas e responsivas no front-end com React.
              </Typography>
            </Grid>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: isLargeScreen ? "center" : "unset",
              }}
            >
              <RoundGradientButton
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  p: "15px 30px",
                  margin: isMediumScreen ? "unset" : "0 90px",
                  mt: isMediumScreen ? "unset" : "15px",
                  background: "linear-gradient(to right, #00D9FF, #00FF94)",
                  transition: "behavior 0.5s ease",
                  ":hover": {
                    background: "#000",
                    border:
                      "1px solid linear-gradient(to right, #00D9FF, #00FF94)",
                  },
                }}
                icon={<DownloadIcon />}
              >
                Download CV
              </RoundGradientButton>

              {/* <Button
              variant="contained"
              endIcon={<DownloadIcon />}
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                p: "15px 30px",
                margin: isMediumScreen ? "unset" : "0 90px",
                mt: isMediumScreen ? "unset" : "15px",
                background: "linear-gradient(to right, #00D9FF, #00FF94)",
                transition: "behavior 0.5s ease",
                ":hover": {
                  background: "#000",
                  border:
                    "1px solid linear-gradient(to right, #00D9FF, #00FF94)",
                },
              }}
            >
              Download CV
            </Button> */}
            </Grid>
          </motion.div>
        </Grid>
      </Grid>

      <Grid
        container
        ref={mockupRef}
        sx={{ mt: isMediumScreen ? 10 : isLargeScreen ? 130 : 10 }}
        justifyContent="center"
        component={motion.div}
        variants={zoomInVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.7,
          ease: [0.17, 0.67, 0.83, 0.67], // "Ease-In-Out" personalizado
        }}
      >
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: isSmallScreen
                ? "1.5rem"
                : isMediumScreen
                ? "2.5rem"
                : "3rem",
            }}
          >
            Trabalhos Recentes
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <MockupGallery />
        </Grid>
      </Grid>

      <Grid
        container
        size={{ xs: 12, md: 12, lg: 12 }}
        sx={{
          mt: "100px",
          mb: "-115px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </Box>
      </Grid>

      <Grid
        container
        size={{ xs: 12, md: 12, lg: 12 }}
        sx={{
          mb: "-35px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CalltoAction />
      </Grid>
    </Container>
  );
};

export default Home;
