import AsideSection from "./AsideSection";
import BannerSection from "./BannerSection";

const HeroSection = () => {
  return (
    <section className="border border-black w-full h-screen p-4 md:p-8 flex justify-center gap-10">
      <AsideSection />
      <BannerSection />
    </section>
  );
};

export default HeroSection;
