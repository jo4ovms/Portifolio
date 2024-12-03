import React from "react";
import { Button } from "../../components/Button";
import { Component } from "../../components/Component";
import { Navbar } from "../../components/Navbar";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <div
      style={{
        width: 1920,
        height: 1600,
        position: "relative",
        background: "linear-gradient(270deg, #130F40 0%, black 100%)",
      }}
    >
      <div
        style={{
          width: 472,
          height: 18,
          left: 1150,
          top: 34,
          position: "absolute",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 55,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontFamily: "Inter",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          SOBRE
        </div>
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontFamily: "Inter",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          HABILIDADES
        </div>
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontFamily: "Inter",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          PROJETOS
        </div>
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontFamily: "Inter",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          CONTATO
        </div>
      </div>
      <div
        style={{
          width: 416,
          height: 450,
          left: 300,
          top: 207,
          position: "absolute",
          background: "#D9D9D9",
          borderRadius: 40,
          border: "4px #130F40 solid",
        }}
      />
      <div
        style={{
          width: 195,
          height: 57,
          left: 802,
          top: 523,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 195,
            height: 57,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#00D9FF",
            borderRadius: 50,
          }}
        />
        <div
          style={{
            width: 127,
            height: 20.36,
            left: 31,
            top: 18.32,
            position: "absolute",
            color: "black",
            fontSize: 20,
            fontFamily: "DM Sans",
            fontWeight: "500",
            lineHeight: 20,
            wordWrap: "break-word",
          }}
        >
          Download CV
        </div>
      </div>
      <div
        style={{
          width: 818,
          height: 124,
          left: 802,
          top: 659,
          position: "absolute",
          color: "#B4B4B4",
          fontSize: 20,
          fontFamily: "DM Sans",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Olá, me chamo João e sou estudante de Análise e Desenvolvimento de
        Sistemas. Construo soluções escaláveis no back-end com Java e interfaces
        modernas e responsivas no front-end com React.
      </div>
      <div
        style={{
          width: 818,
          height: 183,
          left: 802,
          top: 216,
          position: "absolute",
          color: "white",
          fontSize: 48,
          fontFamily: "DM Sans",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Sou um desenvolvedor back-end, entusiasta de front-end e apaixonado por
        tecnologia.
      </div>
      <div
        style={{
          width: 800,
          height: 600,
          left: 216,
          top: 958,
          position: "absolute",
        }}
      >
        <img
          style={{
            width: 800,
            height: 600,
            left: 0,
            top: 0,
            position: "absolute",
          }}
          src="https://via.placeholder.com/800x600"
        />
        <div
          style={{
            width: 105,
            height: 45,
            left: 684,
            top: 27,
            position: "absolute",
            background: "rgba(0, 0, 0, 0.20)",
            boxShadow: "4px 4px 4px ",
            borderRadius: 32,
            filter: "blur(4px)",
          }}
        />
        <div
          style={{
            left: 704,
            top: 39,
            position: "absolute",
            color: "white",
            fontSize: 16,
            fontFamily: "DM Sans",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Stockify
        </div>
      </div>
      <div
        style={{
          width: 800,
          height: 600,
          left: 1053,
          top: 958,
          position: "absolute",
          background: "white",
        }}
      >
        <img
          style={{
            width: 800,
            height: 600,
            left: 0,
            top: 0,
            position: "absolute",
          }}
          src="https://via.placeholder.com/800x600"
        />
        <div
          style={{
            width: 105,
            height: 45,
            left: 684,
            top: 27,
            position: "absolute",
            background: "rgba(0, 0, 0, 0.20)",
            boxShadow: "4px 4px 4px ",
            borderRadius: 32,
            filter: "blur(4px)",
          }}
        />
        <div
          style={{
            left: 704,
            top: 39,
            position: "absolute",
            color: "white",
            fontSize: 16,
            fontFamily: "DM Sans",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Stockify
        </div>
      </div>
    </div>
  );
};
export default Home;
