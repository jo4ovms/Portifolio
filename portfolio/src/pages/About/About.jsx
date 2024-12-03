import { Typography, Box } from "@mui/material";
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
  return (
    <div>
      <Box>
        <Typography
          sx={{
            fontSize: 48,
            color: "#ffffff",
            fontFamily: "DM Sans",
          }}
        >
          Sobre mim
        </Typography>
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: "DM Sans",
            color: "#B4B4B4",
            marginLeft: "30px",
            mt: "30px",
          }}
        >
          Transformo ideias em soluções práticas, desenvolvendo aplicações
          funcionais com tecnologias como Java, React e Docker, sempre buscando
          crescer e entregar valor.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "column",
          mt: "80px",
          ml: "-30px",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography
              sx={{
                color: "#fff",
                fontSize: 50,
                width: "61px",
                height: "65px",
                ml: "30px",
                fontWeight: "bold",
              }}
            >
              5+
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontFamily: "DM Sans",
                color: "#B4B4B4",
                marginLeft: "30px",
                mt: "30px",
                width: "223px",
                height: "115px",
              }}
            >
              Projetos próprios e acadêmicos desenvolvidos
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                color: "#fff",
                fontSize: 50,
                width: "61px",
                height: "65px",
                ml: "30px",
                fontWeight: "bold",
              }}
            >
              10+
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontFamily: "DM Sans",
                color: "#B4B4B4",
                marginLeft: "30px",
                mt: "30px",
                width: "223px",
                height: "115px",
              }}
            >
              Tecnologias aprendidas e aplicadas, como Java, React e Spring
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                color: "#fff",
                fontSize: 50,
                width: "61px",
                height: "65px",
                ml: "30px",
                fontWeight: "bold",
              }}
            >
              200+
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontFamily: "DM Sans",
                color: "#B4B4B4",
                marginLeft: "30px",
                mt: "30px",
                width: "223px",
                height: "115px",
              }}
            >
              Horas dedicadas a cursos, estudos e desenvolvimento prático
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                color: "#fff",
                fontSize: 50,
                width: "61px",
                height: "65px",
                ml: "30px",
                fontWeight: "bold",
              }}
            >
              100%
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontFamily: "DM Sans",
                color: "#B4B4B4",
                marginLeft: "30px",
                mt: "30px",
                width: "223px",
                height: "115px",
              }}
            >
              Dedicado a aprender e evoluir
            </Typography>
          </Grid>
        </Grid>

        <Box
          mt="100px"
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          position={"relative"}
          width={"100%"}
          height={"450px"}
        >
          <div
            style={{
              width: 538,
              height: 564,
              background: "#fff",
              borderRadius: 30,
              border: "4px #130F40 solid",
              position: "initial",
            }}
          />
          <Typography
            sx={{
              fontSize: 48,
              color: "#fff",
              width: 721,
              height: 239,
              fontFamily: "DM Sans",
              mt: "30px",
              fontWeight: "bold",
              left: 600,
              top: -70,
              position: "absolute",
            }}
          >
            <span style={{ color: "#00D9FF" }}>Desenvolvedor </span>focado em
            transformar <span style={{ color: "#00D9FF" }}>ideias </span>em
            soluções práticas e eficientes
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              fontFamily: "DM Sans",
              color: "#B4B4B4",
              marginLeft: "30px",
              top: 200,
              left: 570,
              position: "absolute",
            }}
          >
            <p style={{ marginBottom: "30px" }}>
              Olá! Eu sou João Victor, estudante de Análise e Desenvolvimento de
              Sistemas. Minha jornada na tecnologia começou por curiosidade,
              desde criança tive contato com tecnologia então logo virou uma
              paixão. Desde então, tenho me dedicado a aprender e criar projetos
              que colocam em prática tudo o que estudo, usando tecnologias como
              Java, React, Docker e PostgreSQL.
            </p>

            <p>
              Mesmo sem experiência formal ainda, cada projeto pessoal me ajuda
              a crescer, aprender com desafios reais e entender como criar
              aplicações modernas e escaláveis. Estou sempre buscando melhorar
              minhas habilidades e me preparar para contribuir em projetos que
              façam a diferença.{" "}
            </p>
          </Typography>
        </Box>

        <Box mt="100px" display={"flex"} justifyContent={"flex-start"}>
          <div
            style={{
              width: "100%",
              height: 970,
              position: "absolute",
              background: "#070707",
              left: 0,
              marginTop: "100px",
            }}
          />
          <Typography
            sx={{
              fontSize: 80,
              fontFamily: "DM Sans",
              fontWeight: "bold",
              color: "#fff",
              position: "absolute",
              top: 1400,
            }}
          >
            Minha trajetória
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              fontFamily: "DM Sans",
              color: "#B4B4B4",
              marginLeft: "30px",
              top: 1550,
              left: 300,
              position: "absolute",
            }}
          >
            Construindo uma base sólida em desenovlvimento de software por meio
            de cursos e projetos práticos.
          </Typography>

          <Box sx={{ mt: "350px", ml: "-1320px" }}>
            <Timeline position="right">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    padding: "10px",
                    backgroundColor: "#070707",
                    color: "#fff",
                    px: 2,
                    width: "100%",
                  }}
                >
                  <Typography variant="h6" component="span">
                    <Box
                      sx={{
                        border: "2px solid #fff",
                        borderRadius: "40px",
                        color: "#00D9FF",
                        display: "inline-block",
                        borderWidth: "1px",
                        borderColor: "#FFF",
                        width: "150px",
                        height: "47px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        2023 - PRESENTE
                      </Typography>
                    </Box>
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
                    Instituto Federal Catarinense - Campus Fraiburgo
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#b4b4b4",
                    }}
                  >
                    @ Estudante de Análise e Desenvolvimento de Sistemas
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "#b4b4b4",
                      mt: "10px",
                    }}
                  >
                    No curso, tenho aprendido fundamentos de programação e banco
                    de dados, consolidando a base necessária para o
                    desenvolvimento de sistemas. Paralelamente, dedico-me ao
                    aprendizado autodidata para aprofundar conhecimentos em
                    tecnologias como Java, React, PostgreSQL, Docker e boas
                    práticas de desenvolvimento.
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
                    padding: "10px",
                    backgroundColor: "#070707",
                    color: "#fff",
                    px: 2,
                    width: "100%",
                  }}
                >
                  <Typography variant="h6" component="span">
                    <Box
                      sx={{
                        border: "2px solid #fff",
                        borderRadius: "40px",
                        color: "#00D9FF",
                        display: "inline-block",
                        borderWidth: "1px",
                        borderColor: "#FFF",
                        width: "150px",
                        height: "47px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        2023 - PRESENTE
                      </Typography>
                    </Box>
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
                    Stockify - Sistema de Gerenciamento de Estoque
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#b4b4b4",
                    }}
                  >
                    @ Desenvolvedor Full Stack
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "#b4b4b4",
                      mt: "10px",
                    }}
                  >
                    Criação de um sistema completo para gerenciar o estoque de
                    e-commerces para a matéria Projeto Interdisciplinar:
                    <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                      <li>
                        Tecnologias utilizadas: Java, Spring Boot, React,
                        PostgreSQL, Docker, Kafka.
                      </li>
                      <li>
                        mplementação de autenticação, controle de acesso e
                        integração de APIs RESTful.
                      </li>
                      <li>
                        Deploy realizado com ferramentas como AWS EC2 e Vercel,
                        garantindo escalabilidade e eficiência.
                      </li>
                    </ul>
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default About;
