import CategorySection from "../CategorySection";
import HeroSection from "../HeroSection";
import HomeHeader from "../HomeHeader";
import HomeFooter from "./HomeFooter";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <HomeHeader />
      <CategorySection />
      <HeroSection />
      <HomeFooter />
    </div>
  );
};

export default Home;
