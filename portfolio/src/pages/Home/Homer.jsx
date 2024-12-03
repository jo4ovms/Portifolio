import { Typography, Box, Button } from "@mui/material";
import React from "react";

const Homer = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          width: "100%",
          height: "450px",
        }}
      >
        <div
          style={{
            width: 416,
            height: 450,
            left: 300,
            top: 200,
            background: "#D9D9D9",
            borderRadius: 40,
            border: "4px #130F40 solid",
            position: "initial",
          }}
        />
        <Typography
          sx={{
            fontSize: 48,
            width: 818,
            height: 183,
            color: "#fff",
            fontFamily: "DM Sans",
            position: "absolute",
            left: 500,
            top: 10,
            fontWeight: "bold",
          }}
        >
          Sou um desenvolvedor back-end, entusiasta de front-end e apaixonado
          por tecnologia.
        </Typography>
        <Typography
          sx={{
            fontSize: 20,
            width: 818,
            height: 124,
            color: "#b4b4b4",
            fontFamily: "DM Sans",
            marginBottom: -20,
            position: "absolute",
            left: 500,
            top: 230,
          }}
        >
          Olá, me chamo João e sou estudante de Análise e Desenvolvimento de
          Sistemas. Construo soluções escaláveis no back-end com Java e
          interfaces modernas e responsivas no front-end com React.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#00D9FF",
            fontSize: 18,
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
          }}
        >
          Download CV
        </Button>
      </Box>
    </div>
  );
};

export default Homer;
