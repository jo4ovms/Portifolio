import { Container, Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Code as CodeIcon,
  RocketLaunch as RocketLaunchIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import { useMemo } from "react";
import CalltoAction from "../../components/CalltoAction/CalltoAction";

const Skills = () => {
  const images = useMemo(
    () => [
      "/logos/docker.svg",
      "/logos/git.svg",
      "/logos/java.svg",
      "/logos/javascript.svg",
      "/logos/mysql.svg",
      "/logos/postgresql.svg",
      "/logos/react.svg",
      "/logos/spring.svg",
    ],
    []
  );
  const bgcolor = (image) =>
    image.includes("javascript") ? "#F0DB4F" : "#000";
  const theme = useTheme();
  const skillsText = [
    {
      icon: <CodeIcon sx={{ fontSize: 60 }} />,
      description:
        "Desenvolvendo aplicações web com as melhores tecnologias do mercado.",
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 60 }} />,
      description:
        "Aprimorando minhas habilidades constantemente para me tornar um desenvolvedor melhor.",
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 60 }} />,
      description:
        "Estudando novas tecnologias e ferramentas para me manter atualizado.",
    },
  ];

  return (
    <Container component="main">
      <Box sx={{ mt: { xs: 4, md: 15 } }}>
        <Typography
          variant="h1"
          style={{
            background: "linear-gradient(to bottom, #fff 20%, #696969 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          sx={{
            fontSize: { xs: "2.5rem", sm: "4rem", md: "4rem" },
            textAlign: "start",
            mb: 4,
          }}
        >
          Minhas Habilidades
        </Typography>
        <Typography variant="subtitle1">
          Aqui estão algumas das tecnologias com as quais tenho experiência.
        </Typography>
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
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              backgroundColor: theme.palette.background.default,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              color: theme.palette.background.paper,
            }}
          >
            <Grid container spacing={2} direction={"row"} mt={10} mb={10}>
              {skillsText.map((skill, index) => (
                <Grid key={index} size={{ xs: 12, lg: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: 2,
                      mt: 3,
                    }}
                  >
                    <Box color="primary.main">{skill.icon}</Box>

                    <Typography variant="subtitle1" textAlign={"center"}>
                      {skill.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            mt={10}
            direction={{ xs: "column", sm: "row" }}
          >
            {images.map((image, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    margin: "0 auto",
                    flexDirection: "row",

                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: bgcolor(image),
                    backgroundPosition: "center",
                    height: "180px",
                    width: "180px",
                    borderColor: "transparent",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 3,
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
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

export default Skills;
