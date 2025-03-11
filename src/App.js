import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import Experience from "./Pages/exp/Exp";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/exp" element={<Experience />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
