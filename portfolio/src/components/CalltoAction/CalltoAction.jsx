import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const CalltoAction = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "#070707",
        pt: 6,
        pb: 6,
        px: 2,
        m: " 0 -400px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          width: {
            xs: "calc(100% - 40px)",
            md: "calc(100% - 200px)",
            lg: "60%",
          },
          height: "auto",
          maxHeight: "500px",
          margin: "20px auto",
          borderRadius: "15px",
          padding: { xs: "20px", md: "40px" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "400",
            color: theme.palette.primary.contrastText,
            marginBottom: "20px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: { xs: "40px", md: "60px" },
            lineHeight: { xs: "50px", md: "70px" },
          }}
        >
          Pronto para transformar suas ideias em realidade?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#1F1F1F",
            fontFamily: "DM Sans, sans-serif",
            marginBottom: "30px",
            fontSize: "20px",
            lineHeight: { xs: "28px", md: "28px" },
          }}
        >
          Se você se interessou e deseja entrar em contato para algum serviço,
          estou à disposição para contribuir com seu projeto.
        </Typography>
        <Box
          sx={{ textAlign: "start", display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            endIcon={
              <SendIcon
                className="icon"
                sx={{
                  width: "20px",
                  height: "20px",
                  color: "#bfbfbf",
                }}
              />
            }
            component={Link}
            to="/contato"
            sx={{
              width: { xs: "250px", md: "220px" },
              height: "56px",
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50px",
              padding: "10px 20px",
              gap: "8px",
              transition: "transform 0.3s ease-in-out",
              ":hover": {
                transform: "scale(1.05)",
                backgroundColor: "#111",
              },
              ":active": {
                transform: "scale(0.95)",
              },
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.9)",
              textTransform: "none",
            }}
          >
            <Typography
              className="text"
              sx={{
                color: "#bfbfbf",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "16px",
                transition: "color 0.3s ease-in-out",
                ":hover": { color: "#fff" },
              }}
            >
              Vamos conversar
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CalltoAction;
