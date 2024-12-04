import "../global.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homer from "./pages/Home/Homer";
function App() {
  return (
    <>
      {/* <Navbar />
      <div className="main-content">
        {/* <About /> */}
      {/* <Homer /> */}
      {/* </div> */}

      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Homer />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
