import React from "react";
import { BrowserView } from "react-device-detect";

import i18n from './i18n'

import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";

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
