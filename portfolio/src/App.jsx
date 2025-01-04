import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import theme from "./theme/Theme";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "../global.css";
import { AnimatePresence, motion } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  const pageTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/sobre"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/contato"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/habilidades"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Skills />
            </motion.div>
          }
        />
        <Route
          path="/projetos"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <Projects />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="main-content">
          <AnimatedRoutes />
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
