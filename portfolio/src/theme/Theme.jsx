import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00D9FF",
      contrastText: "#000",
    },
    background: {
      default: "#070707",
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
    body1: {
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: 400,
      color: "#b4b4b4",
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
  },
});

export default theme;
