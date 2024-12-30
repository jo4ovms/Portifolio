import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          backgroundColor: "#070707",
          overflow: "hidden",
          padding: "50px 0",
        }}
      >
        <Typography
          sx={{
            marginTop: "40px",
            textAlign: "center",
            color: "#B4B4B4",
            fontFamily: "DM Sans",
            fontSize: "14px",
          }}
        >
          ©Copyright{" "}
          <span style={{ color: "#00D9FF" }}>
            João Victor Maciel dos Santos 2024
          </span>{" "}
          Todos os direitos reservados.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
