import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";

const Home = () => {
  return (
    <main>
      <div className="fixed z-50 right-32 top-4">
        <Navbar />
      </div>
      <div className="fixed z-20 h-14 w-1/2 right-0 bg-gradient-to-l from-black via-black to-transparent"></div>

      <Hero />
    </main>
  );
};

export default Home;
