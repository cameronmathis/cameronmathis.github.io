import React from "react";
import { BrowserView } from "react-device-detect";
// import pages
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
// import css
import "./css/App.css";

function App() {
  return (
    <div className="app">
      <BrowserView>
        <div id="top" data-testid="top" />
        <Header />
        <BackToTopButton />
      </BrowserView>
      <About />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
