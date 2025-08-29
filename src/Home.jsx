import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import NewArrival from "./components/NewArrival/NewArrival";
import Dressstyles from "./components/Dressstyle/Dressstyles";
import { EmblaCarousel } from "./components/HappyCustomers/EmblaCarousel";
import TopSelling from "./components/TopSellings/TopSelling";
import RunnerField from "./components/RunnerField/RunnerField";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <RunnerField />
      <NewArrival />
      <TopSelling />
      <Dressstyles />
      <EmblaCarousel />
      <Footer />
    </div>
  );
};

export default Home;
