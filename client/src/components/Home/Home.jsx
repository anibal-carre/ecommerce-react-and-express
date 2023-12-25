import CategorySection from "../CategorySection";
import HeroSection from "../HeroSection";
import HomeHeader from "../HomeHeader";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <HomeHeader />
      <CategorySection />
      <HeroSection />
    </div>
  );
};

export default Home;
