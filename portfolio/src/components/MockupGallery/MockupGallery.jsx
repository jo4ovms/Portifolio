import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./MockupCSS.css";
const MockupGallery = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

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
      spacing={isXLargeScreen ? 2 : 4}
      sx={{
        mt: 5,
        px: 3,
        width: "99vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {/* Primeira linha */}
      {projects.slice(0, 2).map((project) => (
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          key={project.id}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              position: "relative",
              height: "100%",
              width: "100%",

              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: isSmallScreen
                  ? "350px"
                  : isMediumScreen
                  ? "450px"
                  : "430px",
                width: "100%",
                overflow: "hidden",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundImage: `url(${project.image}), linear-gradient(90deg, #1A2140 0%, #515473 100%)`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
                  fontSize: isSmallScreen ? "14px" : "18px",
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

      {/* Segunda linha */}
      {projects.slice(2, 5).map((project) => (
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
          key={project.id}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              position: "relative",
              height: "100%",
              width: "100%",
              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundImage: `url(${project.image})`,
              backgroundSize: "contain",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: isSmallScreen
                  ? "350px"
                  : isMediumScreen
                  ? "430px"
                  : isLargeScreen
                  ? "400px"
                  : "430px",
                width: "100%",
                overflow: "hidden",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundImage: `url(${project.image}), linear-gradient(90deg, #1A2140 0%, #515473 100%)`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
                  fontSize: isSmallScreen ? "14px" : "18px",
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
