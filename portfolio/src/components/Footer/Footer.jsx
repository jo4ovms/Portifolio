import { Box, Typography } from "@mui/material";

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
          &copy;Copyright {new Date().getFullYear()}{" "}
          <span style={{ color: "#00D9FF" }}>
            João Victor Maciel dos Santos
          </span>{" "}
          All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
