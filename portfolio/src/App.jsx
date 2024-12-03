import "../global.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";

import Homer from "./pages/Home/Homer";
function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        {/* <About /> */}
        <Homer />
      </div>
    </>
  );
}

export default App;
