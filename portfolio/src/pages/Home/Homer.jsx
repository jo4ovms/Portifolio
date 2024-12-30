import { Typography, Box, Button, Container } from "@mui/material";
import React from "react";
import MockupGallery from "../../components/MockupGallery/MockupGallery";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import CalltoAction from "../../components/CalltoAction/CalltoAction";
import DownloadIcon from "@mui/icons-material/Download";
const Homer = () => {
  return (
    <Container sx={{ height: "240vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          width: "100%",
          height: "450px",
          margin: "0 -100px",
        }}
      >
        <img
          src="me3.jpg"
          style={{
            width: 420,
            height: 420,
            left: 300,
            top: 200,
            borderRadius: 40,
            border: "4px #130F40 solid",
            position: "initial",
          }}
        />

        <Typography
          sx={{
            fontSize: 48,
            color: "#ffffff",
            width: 818,
            height: 220,
            fontFamily: "DM Sans",
            position: "absolute",
            left: 500,
            top: 10,
            fontWeight: "400",
          }}
        >
          <span
            style={{
              background: "linear-gradient(to right, #fff 0%, #696969 85%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sou um desenvolvedor back-end, entusiasta de front-end e apaixonado
            por tecnologia.
          </span>
        </Typography>

        <Typography
          sx={{
            fontSize: 20,
            width: 818,
            height: 124,
            color: "#b4b4b4",
            fontFamily: "DM Sans",
            fontWeight: "400",
            marginBottom: -20,
            position: "absolute",
            left: 500,
            top: 230,
          }}
        >
          Olá, me chamo João e estou cursando Análise e Desenvolvimento de
          Sistemas. Construo soluções escaláveis no back-end com Java e
          interfaces modernas e responsivas no front-end com React.
        </Typography>
        <Button
          variant="contained"
          endIcon={<DownloadIcon />}
          sx={{
            bgcolor: "#00D9FF",
            fontSize: 16,
            width: 195,
            height: 57,
            color: "#000",
            fontWeight: 500,
            lineHeight: 20,
            fontFamily: "DM Sans",
            borderRadius: 50,
            position: "absolute",
            left: 500,
            top: 340,
            textTransform: "none",
          }}
        >
          Download CV
        </Button>
      </Box>
      <Box sx={{ mt: 30 }}>
        <Typography
          sx={{
            fontSize: 48,
            color: "#fff",
            fontFamily: "DM Sans",
            textAlign: "center",
            letterSpacing: 5,
          }}
        >
          Trabalhos Recentes
        </Typography>
        <MockupGallery />
      </Box>

      <Box
        mt={15}
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
        <ImageCarousel />
      </Box>
    </Container>
  );
};

export default Homer;
