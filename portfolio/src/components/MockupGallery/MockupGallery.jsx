import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./MockupGallery.css";
const MockupGallery = () => {
  const projects = [
    { id: 1, name: "Stockify", image: "/images/stockify1.png" },
    { id: 2, name: "Energia Sustentável", image: "/images/energy4.png" },
    { id: 3, name: "Projeto 3", image: "/images/image3.jpg" },
    { id: 4, name: "Projeto 4", image: "/images/image3.jpg" },
    { id: 5, name: "Energia Sustentável", image: "/images/energy3.png" },
  ];

  return (
    <Grid
      container
      spacing={3}
      sx={{
        mt: 10,
        px: 3,
        width: "99vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {/* Primeira linha com 2 itens */}
      {projects.slice(0, 2).map((project) => (
        <Grid size={{ xs: 12, sm: 6 }} key={project.id}>
          <Box
            sx={{
              position: "relative",
              height: "600px",
              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "filter 0.3s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "rgba(0, 0, 0, 0.6)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {project.name}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}

      {/* Segunda linha com 3 itens */}
      {projects.slice(2, 5).map((project) => (
        <Grid size={{ xs: 12, sm: 4 }} key={project.id}>
          <Box
            sx={{
              position: "relative",
              height: "400px",
              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "filter 0.3s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "rgba(0, 0, 0, 0.6)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {project.name}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
export default MockupGallery;
