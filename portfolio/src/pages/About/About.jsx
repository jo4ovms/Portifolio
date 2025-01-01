import {
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import Grid from "@mui/material/Grid2";
import CountUp from "react-countup";
import {
  Code as CodeIcon,
  Work as WorkIcon,
  School as SchoolIcon,
} from "@mui/icons-material";

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const stats = [
    {
      value: 5,
      suffix: "+",
      description: "Projetos próprios e acadêmicos desenvolvidos",
    },
    {
      value: 10,
      suffix: "+",
      description:
        "Tecnologias aprendidas e aplicadas, como Java, React e Spring",
    },
    {
      value: 200,
      suffix: "+",
      description:
        "Horas dedicadas a cursos, estudos e desenvolvimento prático",
    },
    {
      value: 100,
      suffix: "%",
      description: "Dedicado a aprender e evoluir",
    },
  ];

  return (
    <Container component="main">
      {/* Header */}
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
          Sobre mim
        </Typography>
        <Typography variant="subtitle1">
          Transformo ideias em soluções práticas, desenvolvendo aplicações
          funcionais com tecnologias como Java, React e Docker, sempre buscando
          crescer e entregar valor.
        </Typography>
      </Box>

      {/* Stats */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {stats.map((stat, index) => (
          <Grid size={{ xs: 5, sm: 3, md: 3 }} key={index}>
            <Box
              textAlign={isMediumScreen || isSmallScreen ? "center" : "left"}
              sx={{ mt: { xs: 4, md: 10 } }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 1,
                }}
              >
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                />
              </Typography>
              <Typography variant="body1">{stat.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Imagem e texto principal */}

      <Grid
        container
        spacing={2}
        alignItems="center"
        direction={isSmallScreen ? "column" : "row"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Grid size={{ xs: 12, sm: 9, md: 6, lg: 5 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "calc(100% * 16 / 16)",
              overflow: "hidden",

              cursor: "pointer",
              backgroundImage: `url(me3.jpg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              border: `4px ${theme.palette.background.main} solid`,
              backgroundPosition: "center",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 10, md: 12, lg: 7 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "40px",
              lineHeight: "48px",
              mb: 2,
              ml: isMediumScreen || isSmallScreen ? "0" : "60px",
              fontWeight: "500",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <span style={{ color: theme.palette.primary.main }}>
              Desenvolvedor{" "}
            </span>
            focado em transformar{" "}
            <span style={{ color: theme.palette.primary.main }}>ideias </span>em
            soluções práticas e eficientes.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: { xs: "center", md: "left" },
              ml: isMediumScreen || isSmallScreen ? "0" : "60px",
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
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={
              isMediumScreen || isSmallScreen ? "center" : "start"
            }
            margin={isMediumScreen || isSmallScreen ? undefined : "0 35px"}
          >
            <Typography
              variant="h1"
              style={{
                background:
                  "linear-gradient(to bottom, #fff 20%, #696969 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              sx={{
                fontSize: { xs: "2.5rem", sm: "4rem", md: "4rem" },
                textAlign: { xs: "center", md: "left" },
                mb: 4,
              }}
            >
              Minha trajetória
            </Typography>

            <Typography variant="subtitle1">
              Construindo uma base sólida em desenvolvimento de software por
              meio de cursos e projetos práticos.
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: "flex-start",
              padding: 0,
              display: "flex",
              maxWidth: "1200px",
              mt: { xs: 2, sm: 3, md: -1 },
              margin: {
                xs: isSmallScreen ? "0 0 0 -250px" : "0 auto",
                sm: "0 auto",
                md: "unset",
              },
            }}
          >
            <Timeline position={isSmallScreen ? "right" : "alternate"}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    2024 - PRESENTE
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    Inovea Tecnologia
                  </Typography>
                  <Typography variant="body2">@ Programador Web Jr</Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Desenvolvendo aplicações customizadas para órgãos públicos e
                    empresas privadas. Otimização de métodos aplicados e
                    desenvolvimento de sistemas web administrativos que aumentam
                    a eficiência e reduzem tempo de processamento.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <CodeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    2023 - PRESENTE
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    Stockify - Sistema de Gerenciamento de Estoque
                  </Typography>
                  <Typography variant="body2">
                    @ Desenvolvedor Full Stack
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Desenvolvi um sistema completo de gestão de estoque para
                    e-commerces. Utilizei tecnologias como Java, Spring Boot,
                    React, PostgreSQL, Docker e Kafka para implementar
                    autenticação segura e integração de APIs RESTful. Deploy
                    escalável com AWS EC2 e Vercel. Resultado: maior eficiência
                    no gerenciamento de mais de 5000 produtos.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    2023 - PRESENTE
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    Instituto Federal Catarinense - Campus Fraiburgo
                  </Typography>
                  <Typography variant="body2">
                    @ Estudante de Análise e Desenvolvimento de Sistemas
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Aprimorando fundamentos de programação, banco de dados e
                    desenvolvimento de sistemas. Estudos autodidatas incluem
                    tecnologias como Java, React e PostgreSQL. Implemento boas
                    práticas de desenvolvimento, projetando sistemas que superam
                    os desafios do mercado.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
