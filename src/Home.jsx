import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import NewArrival from "./components/NewArrival/NewArrival";
import Dressstyles from "./components/Dressstyle/Dressstyles";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <NewArrival />
      <Dressstyles />

      <Footer />
    </div>
  );
};

export default Home;
