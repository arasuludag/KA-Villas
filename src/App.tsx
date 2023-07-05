import AirBNBSection from "./components/AirBNBSection/AirBNBSection";
import Features1 from "./components/Features1";
import Features2 from "./components/Features2";
import Footer from "./components/Footer";
import GoogleMaps from "./components/GoogleMaps";
import Hero from "./components/Hero";
import Swiper from "./components/Swiper/Swiper";

function App() {
  return (
    <>
      <Hero />
      <Features1 />
      <Swiper />
      <Features2 />
      <AirBNBSection />
      <GoogleMaps />
      <Footer />
    </>
  );
}

export default App;
