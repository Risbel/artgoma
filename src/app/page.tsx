import Navbar from "./components/navbar";
import Carousel from "./components/sections/carousel";
import Carousel2 from "./components/sections/carousel2/Carousel2";
import Connect from "./components/sections/connect";
import GetInTouch from "./components/sections/getInTouch";
import GetInspired from "./components/sections/getInspired";
import Hero from "./components/sections/hero";
import Location from "./components/sections/location";

const Home = () => {
  return (
    <main>
      <div className="fixed z-50 right-32 top-4">
        <Navbar />
      </div>
      <div className="fixed z-30 h-14 w-1/2 right-0 bg-gradient-to-l from-black via-black to-transparent rounded-l-full overflow-hidden"></div>

      <Hero />
      <Carousel />
      <Connect />
      <Carousel2 />
      <GetInspired />
      <Location />
      <GetInTouch />
    </main>
  );
};

export default Home;
