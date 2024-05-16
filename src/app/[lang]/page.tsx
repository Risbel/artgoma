import { Locale } from "@/configs/i18n.config";
import Circle from "./components/circle";
import Navbar from "./components/navbar";
import DropdownNav from "./components/navbar/DropdownNav";
import NavbarDropdown from "./components/navbar/NavbarDropdown";
import Carousel from "./components/sections/carousel";
import Carousel2 from "./components/sections/carousel2/Carousel2";
import Connect from "./components/sections/connect";
import Footer from "./components/sections/footer";
import GetInTouch from "./components/sections/getInTouch";
import GetInspired from "./components/sections/getInspired";
import Hero from "./components/sections/hero";
import Location from "./components/sections/location";
import LogoCarousel from "./components/carousel";

const Home = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="overflow-x-hidden">
      <div className="flex items-center md:hidden">
        <div className="fixed z-[110] right-16 top-4 md:hidden ">
          <NavbarDropdown />
        </div>
        <DropdownNav />
      </div>

      <Navbar lang={lang} />
      <div className="hidden md:block fixed z-[190] h-14 w-3/4 right-0 backdrop-blur-sm bg-gradient-to-l from-black via-black to-transparent rounded-l-full overflow-hidden"></div>

      <Hero lang={lang} />
      <Carousel />
      <Connect lang={lang} />
      <div className="relative">
        <Circle
          color="border-red-600"
          position="absolute"
          z="z-50"
          className={
            "h-32 w-32 md:h-44 md:w-44 border-[20px] md:border-[32px] border-red-600 -top-32 right-0 translate-x-16 translate-y-12 z-50"
          }
        />
      </div>
      <Carousel2 />
      <LogoCarousel />
      <GetInspired lang={lang} />
      <Location lang={lang} />
      <GetInTouch lang={lang} />
      <Footer />
    </main>
  );
};

export default Home;
