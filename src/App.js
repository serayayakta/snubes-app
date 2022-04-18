import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Information from "./components/Information";
import BackgroundImageInformation from "./images/Information-Background-DesktopOnly.png";
import WhySnubesBackgroundImageDesktop from "./images/WhySnubes.png";
import WhySnubesBackgroundImageTablet from "./images/WhySnubesTablet.png";
import WhySnubesBackgroundImageMobile from "./images/WhySnubesMobile.png";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isDesktop = windowWidth >= 768 ? true : false;
  const isMobile = windowWidth <= 320 ? true : false;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="App">
      <div>
        <Router>
          <Navbar></Navbar>
        </Router>
      </div>
      <div
        className="InformationBackgroundContainer"
        style={{
          backgroundImage: `url(${
            isDesktop ? BackgroundImageInformation : ""
          })`,
        }}
      >
        <Information></Information>
      </div>
      <div className="IconsContainer"></div>
      <div
        className="WhySnubesContainer"
        style={{
          backgroundImage: `url(${
            isDesktop
              ? WhySnubesBackgroundImageDesktop
              : isMobile
              ? WhySnubesBackgroundImageMobile
              : WhySnubesBackgroundImageTablet
          })`,
        }}
      ></div>
    </div>
  );
}

export default App;
