import BannerSection from "./BannerSection";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);
  return (
    <section className="border border-black w-full h-auto min-h-screen p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-[1800px] w-full h-full flex gap-10 justify-center mb-20">
        <BannerSection />
      </div>

      <div className="w-full max-w-[1300px] h-auto flex justify-evenly p-5 mb-10">
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75">
          <span>{data?.Iphone[0].name}</span>
        </div>
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75">
          <span>{data?.Samsung[0].name}</span>
        </div>
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75">
          <span>{data?.Samsung[1].name}</span>
        </div>
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75"></div>
      </div>
      <div className="w-full max-w-[1300px] h-auto flex justify-evenly p-5 mb-10">
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75"></div>
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75"></div>
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75"></div>
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75"></div>
      </div>
      <div className="w-full max-w-[1300px] h-auto flex justify-evenly p-5 mb-10">
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75"></div>
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75"></div>
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75"></div>
        <div className="border w-[260px] h-[320px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75"></div>
      </div>
    </section>
  );
};

export default HeroSection;
