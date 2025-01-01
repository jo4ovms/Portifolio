import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00D9FF",
      contrastText: "#000",
    },
    background: {
      main: "#130F40",
      default: "#070707",
      secondary: "#333",
      paper: "#fff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b4b4b4",
    },
  },
  typography: {
    fontFamily: "DM Sans, sans-serif",
    h1: {
      fontSize: "50px",
      fontWeight: 400,
      color: "#fff",
    },
    h2: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "28px",
      color: "#b4b4b4",
    },
    h3: {
      fontSize: "50px",
      color: "#fff",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "25px",
      fontWeight: "bold",
    },
    h6: {
      color: "#00D9FF",
      fontWeight: "bold",
      fontSize: "22px",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: 400,
      color: "#b4b4b4",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: "bold",
      color: "#b4b4b4",
    },
    subtitle1: {
      fontSize: "20px",
      textAlign: "start",
      fontWeight: 400,
      lineHeight: "28px",
      color: "#B4B4B4",
      maxWidth: "800px",
      margin: "0 40px",
    },
    button: {
      fontSize: "16px",
      textTransform: "none",
      fontWeight: 500,
    },
    contacttypography: {
      fontSize: "14px",
      color: "#b4b4b4",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#000",
            border: "1px solid #00D9FF",
            color: "#fff",
            transition: "all 0.3s ease-in-out",
          },
        },
        containedPrimary: {
          backgroundColor: "#00D9FF",
          color: "#000",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          border: "1px solid #00D9FF",
          borderRadius: "10px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            color: "#333",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "DM Sans, sans-serif",
        },
      },
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          backgroundColor: "#070707",
          color: "#fff",
          p: 2,
          borderRadius: "10px",
          maxWidth: "80%",
          mx: "auto",
          animation: "fade-in 1s ease-out",
          "@keyframes fade-in": {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          background: "linear-gradient(to bottom, #00D9FF, #00FF94)",
          height: "3px",
        },
      },
    },
  },
});

export default theme;
