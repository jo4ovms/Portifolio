import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  IconButton,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled, useTheme } from "@mui/system";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid2";
import RoundGradientButton from "../Skills/ContainedButtons";
import { useState } from "react";
import "./Projects.css";
import CalltoAction from "../../components/CalltoAction/CalltoAction";

const projects = [
  {
    title: "Economia de Energia",
    description:
      "Desenvolvi uma aplicação web para monitoramento e controle de consumo de energia elétrica em tempo real, com gráficos e relatórios detalhados. Desenovlvido para a disciplina de Gerenciamento de Projetos de Software e Interface Humano Computador.",
    image: "/images/energypage.png",
    link: "https://github.com/jo4ovms/EnergySaver",
    technologies: ["React", "Node.js", "PostgreSQL,"],
  },
  {
    title: "Gerenciamento SCRUM",
    description:
      "Aplicação web para gerenciamento de projetos ágeis com metodologia SCRUM, com quadro de tarefas, gráficos de desempenho e relatórios de produtividade. Desenvolvido para a disciplina de Engenharia de Software.",
    image: "/images/scrumapp.png",
    link: "https://github.com/jo4ovms/gerenciamento_scrum/tree/master",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Task Manager",
    description:
      "Sistema de gerenciamento de tarefas com autenticação de usuário e armazenamento no MongoDB.",
    image: "/images/taskmanager.png",
    link: "https://github.com/jo4ovms/task-manager",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
];

const featuredProject = {
  title: "Stockify",
  description:
    "Stockify é uma aplicação para o gerenciamento eficiente de estoque voltada para e-commerce, desenvolvida com uma API robusta em Java/Spring Boot, uma interface de usuário em React, e banco de dados PostgreSQL.",
  technologies: ["React", "Spring", "PostgreSQL", "Kafka"],
  image: "/images/stockifypage.png",
  link: "https://github.com/jo4ovms/Stockify",
};

const StyledCard = styled(Card)(() => ({
  maxWidth: 450,

  padding: "3px",
  margin: "auto",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const Projects = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "backdropClick") {
      setOpen(false);
    }
    setOpen(false);
    setSelectedImage("");
  };

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
          Meus Projetos
        </Typography>

        <Typography variant="subtitle1">
          Explore os principais projetos que demonstram minhas habilidades em
          tecnologias avançadas.
        </Typography>
      </Box>

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
            padding: "2rem",
            backgroundColor: "#070707",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            borderRadius: "15px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          }}
        >
          <Typography
            variant="h1"
            style={{
              background: "linear-gradient(to bottom, #fff 20%, #696969 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            sx={{
              fontSize: { xs: "2.5rem", sm: "4rem", md: "4rem" },
              textAlign: { xs: "center", md: "left" },
              mb: 4,
            }}
          >
            Destaque:{" "}
            <span
              style={{
                fontWeight: 600,
                background: "linear-gradient(to bottom, #00D9FF, #00FF94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {featuredProject.title}
            </span>
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <img
                className={"featuredProjectImage"}
                src={featuredProject.image}
                alt={featuredProject.title}
                style={{
                  width: "100%",

                  borderRadius: "10px",
                  backgroundColor: "#fff",

                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
                onClick={() => handleClickOpen(featuredProject.image)}
              />
            </Grid>

            <Modal
              open={open}
              onClose={handleClose}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              slotProps={{
                backdrop: {
                  style: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(1px)",
                  },
                },
              }}
            >
              <>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    color: "white",
                    zIndex: (theme) => theme.zIndex.modal + 1,
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    maxWidth: "50%",
                    maxHeight: "50%",
                    userSelect: "none",
                  }}
                />
              </>
            </Modal>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {featuredProject.description}
              </Typography>
              <Typography variant="h6" sx={{ color: "#fff" }}>
                Tecnologias:
              </Typography>
              <Box
                sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginTop: 1 }}
              >
                {featuredProject.technologies.map((tech, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      padding: "5px 15px",
                      backgroundColor: "#130F40",
                      borderRadius: "15px",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
              <RoundGradientButton
                sx={{
                  background: "linear-gradient(to right, #00D9FF, #00FF94)",
                  transition: "background-color 0.3s ease",
                  mt: 3,
                  ":hover": {
                    background: "#130F40",
                    color: "#fff",
                  },
                  marginTop: 3,
                }}
                href={featuredProject.link}
                target="_blank"
              >
                Ver no GitHub
              </RoundGradientButton>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ marginTop: 6 }}>
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={index}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <StyledCard>
                    <CardMedia
                      component="img"
                      width="100%"
                      height="100%"
                      image={project.image}
                      sx={{ objectFit: "fill" }}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                        <Button
                          variant="text"
                          sx={{
                            display: "initial",
                            justifyContent: "start",
                            fontWeight: 600,

                            border: "1px solid",
                            borderRadius: "10px",
                            borderColor: "transparent",
                            background: "transparent",
                            color: "#130F40",
                            textTransform: "none",
                            "&:hover": {
                              background: "black",
                              borderRadius: "10px",
                              color: "#fff",
                            },
                          }}
                          href={project.link}
                          target="_blank"
                        >
                          Ver detalhes
                        </Button>
                      </Box>
                    </CardContent>
                  </StyledCard>
                </motion.div>
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

export default Projects;
