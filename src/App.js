import React, { useState } from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NavigationBar from "./components/Navbar/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import "./App.css";
import Resume from "./components/Resume/Resume";
import bgVideo from "./components/Videos/video.webm";
import bgVideo2 from "./components/Videos/video3.webm";
import ProjectCarousel from "./components/Projects/Carousel/ProjectCarousel";
import Footer from "./components/Footer/Footer";

function App() {
  const [mode, setMode] = useState("Dark");
  const [flag, setFlag] = useState(false);

  const fetchMode = (modeFetched) => {
    // console.log(modeFetched);
    setMode(modeFetched);
    if (mode === "Dark") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };
  // console.log(`FROM APP: ${mode}`);
  return (
    <React.Fragment>
      {!flag && (
        <video
          className="videoTag"
          id="videoTag"
          autoPlay
          loop
          muted
          style={{
            position: "fixed",
            width: "100%",
            left: "50%",
            height: "100vh",
            objectFit: "cover",
            transform: "translate(-50%)",
            zIndex: "-1",
          }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      )}
      {flag && (
        <video
          className="videoTag"
          id="videoTag"
          autoPlay
          loop
          muted
          style={{
            position: "fixed",
            width: "100%",
            left: "50%",
            height: "100vh",
            objectFit: "cover",
            transform: "translate(-50%)",
            zIndex: "-1",
          }}
        >
          <source src={bgVideo2} type="video/mp4" />
        </video>
      )}
      <NavigationBar fetchMode={fetchMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume mode={mode} />} />
          <Route
            path="/carousel"
            element={<ProjectCarousel style={{ width: "50vw" }} />}
          />
        </Routes>
      <Footer mode={mode}/>
      </main>
    </React.Fragment>
  );
}

export default App;
