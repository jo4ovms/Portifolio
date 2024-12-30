import "../global.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homer from "./pages/Home/Homer";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homer />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
