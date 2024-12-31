import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import theme from "./theme/Theme";
import "../global.css";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
