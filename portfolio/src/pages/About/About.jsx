import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import Grid from "@mui/material/Grid2";

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const stats = [
    {
      value: "5+",
      description: "Projetos próprios e acadêmicos desenvolvidos",
    },
    {
      value: "10+",
      description:
        "Tecnologias aprendidas e aplicadas, como Java, React e Spring",
    },
    {
      value: "200+",
      description:
        "Horas dedicadas a cursos, estudos e desenvolvimento prático",
    },
    { value: "100%", description: "Dedicado a aprender e evoluir" },
  ];

  return (
    <div>
      {/* Título e introdução */}
      <Box>
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
            fontFamily: "DM Sans",
          }}
        >
          Sobre mim
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            textAlign: "start",
            mx: "auto",
            maxWidth: "90%",
            mb: 4,
            color: "#B4B4B4",
            fontFamily: "DM Sans",
          }}
        >
          Transformo ideias em soluções práticas, desenvolvendo aplicações
          funcionais com tecnologias como Java, React e Docker, sempre buscando
          crescer e entregar valor.
        </Typography>
      </Box>

      {/* Stats */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {stats.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 12, md: 3 }} key={index}>
            <Box textAlign="center">
              <Typography
                variant="h3"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  mb: 1,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#B4B4B4",
                  fontFamily: "DM Sans",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                {stat.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Imagem e texto principal */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ mt: 6 }}
        direction={isSmallScreen ? "column" : "row"}
      >
        <Grid size={{ xs: 6, md: 5 }}>
          <Box
            component="img"
            src="me3.jpg"
            sx={{
              width: { xs: "600px", md: "500px" },
              height: { xs: "600px", md: "500px" },
              background: "#fff",
              borderRadius: "30px",
              border: "4px solid #130F40",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
              color: "#fff",
              mb: 2,
              fontFamily: "DM Sans",
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <span style={{ color: "#00D9FF" }}>Desenvolvedor </span>focado em
            transformar <span style={{ color: "#00D9FF" }}>ideias </span>em
            soluções práticas e eficientes
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem" },
              color: "#B4B4B4",
              textAlign: { xs: "center", md: "left" },
              lineHeight: 1.5,
            }}
          >
            Olá! Eu sou João Victor, estudante de Análise e Desenvolvimento de
            Sistemas. Minha jornada na tecnologia começou por curiosidade, e
            logo virou uma paixão. Tenho me dedicado a aprender e criar projetos
            que colocam em prática tudo o que estudo, usando tecnologias como
            Java, React, Docker e PostgreSQL.
            <br />
            <br />
            Mesmo sem experiência formal ainda, cada projeto pessoal me ajuda a
            crescer, aprender com desafios reais e entender como criar
            aplicações modernas e escaláveis.
          </Typography>
        </Grid>
      </Grid>

      {/* Timeline */}
      <Box mt={10}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            mb: 4,
          }}
        >
          Minha trajetória
        </Typography>
        <Timeline position={isSmallScreen ? "alternate" : "right"}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                backgroundColor: "#070707",
                color: "#fff",
                p: 2,
                borderRadius: "10px",
                maxWidth: "80%",
                mx: "auto",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#00D9FF", fontWeight: "bold", mb: 1 }}
              >
                2023 - PRESENTE
              </Typography>
              <Typography>
                Instituto Federal Catarinense - Campus Fraiburgo
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                Estudante de Análise e Desenvolvimento de Sistemas
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                backgroundColor: "#070707",
                color: "#fff",
                p: 2,
                borderRadius: "10px",
                maxWidth: "80%",
                mx: "auto",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#00D9FF", fontWeight: "bold", mb: 1 }}
              >
                2023 - PRESENTE
              </Typography>
              <Typography>
                Stockify - Sistema de Gerenciamento de Estoque
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  color: "#B4B4B4",
                  mt: 1,
                }}
              >
                Criação de um sistema completo para gerenciar o estoque de
                e-commerces:
                <ul>
                  <li>Java, Spring Boot, React, PostgreSQL</li>
                  <li>APIs RESTful</li>
                  <li>Deploy em AWS e Vercel</li>
                </ul>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </div>
  );
};

export default About;
