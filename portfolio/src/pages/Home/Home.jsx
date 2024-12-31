import {
  Typography,
  Button,
  Container,
  useTheme,
  Box,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useMemo } from "react";
import MockupGallery from "../../components/MockupGallery/MockupGallery";
import CalltoAction from "../../components/CalltoAction/CalltoAction";
import DownloadIcon from "@mui/icons-material/Download";
import EmblaCarousel from "../../components/Carousel/EmblaCarousel";

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
      >
        <Grid size={{ xs: 12, sm: 9, md: 10, lg: 5 }}>
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
              border: "4px #130F40 solid",
              backgroundPosition: "center",
            }}
          />
        </Grid>

        <Grid
          size={{ xs: 12, md: 12, lg: 7 }}
          container
          direction="column"
          spacing={2}
        >
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
                  background: "linear-gradient(to right, #fff 0%, #696969 85%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sou um desenvolvedor back-end, entusiasta de front-end e
                apaixonado por tecnologia.
              </span>
            </Typography>
          </Grid>

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

          <Grid
            sx={{
              display: "flex",
              justifyContent: isLargeScreen ? "center" : "unset",
            }}
          >
            <Button
              variant="contained"
              endIcon={<DownloadIcon />}
              sx={{
                fontSize: "16px",
                p: "15px 30px",
                margin: isMediumScreen ? "unset" : "0 90px",
                mt: isMediumScreen ? "unset" : "15px",
              }}
            >
              Download CV
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ mt: isMediumScreen ? 10 : isLargeScreen ? 130 : 10 }}
        justifyContent="center"
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
