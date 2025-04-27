import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import NewArrival from "./components/NewArrival/NewArrival";
import Dressstyles from "./components/Dressstyle/Dressstyles";
import HappyCustomer from "./components/HappyCustomers/HappyCustomers";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <NewArrival />
      <Dressstyles />
      <HappyCustomer />
      <Footer />
    </div>
  );
};

export default Home;
