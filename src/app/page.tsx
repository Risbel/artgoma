import Navbar from "./components/navbar";
import Carousel from "./components/sections/carousel";
import Hero from "./components/sections/hero";

const Home = () => {
  return (
    <main>
      <div className="fixed z-50 right-32 top-4">
        <Navbar />
      </div>
      <div className="fixed z-30 h-14 w-1/2 right-0 bg-gradient-to-l from-black via-black to-transparent rounded-l-full overflow-hidden"></div>

      <Hero />
      <Carousel />
    </main>
  );
};

export default Home;
