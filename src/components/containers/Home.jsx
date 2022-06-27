import React from "react";
import "./style.scss";
import Navbar from "../Navbar";
import Header from "../Header";
import Featured from "../Featured";
import About from "../About";
import Gallery from "../Gallery";
import Footer from "../Footer";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
const Home = () => {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty Flowers</h1>
          <h2>Rio de Janeiro</h2>
        </div>
      ) : (
        <div className="main-container" id="main-container" data-scroll-section>
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
