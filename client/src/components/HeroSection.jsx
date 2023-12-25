import BannerSection from "./BannerSection";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const HeroSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);
  return (
    <section className="w-full h-auto min-h-screen p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-[1800px] w-full h-full flex gap-10 justify-center mb-20">
        <BannerSection />
      </div>

      <div className="w-full max-w-[1300px] flex justify-start px-10 xl:px-16">
        <span className="font-bold text-[20px] font-sans cursor-pointer">
          Samsung
        </span>
      </div>

      <div className="w-full max-w-[1300px] h-auto flex justify-evenly p-5 mb-10">
        <ProductCard data={data?.Samsung[0]} />
        <ProductCard data={data?.Samsung[1]} />
        <ProductCard data={data?.Samsung[2]} />
        <ProductCard data={data?.Samsung[3]} />
      </div>
      <div className="w-full max-w-[1300px] flex justify-start px-10 xl:px-16">
        <span className="font-bold text-[20px] font-sans cursor-pointer">
          iPhone
        </span>
      </div>
      <div className="w-full max-w-[1300px] h-auto flex justify-evenly p-5 mb-10">
        <ProductCard data={data?.Iphone[0]} />
        <ProductCard data={data?.Iphone[0]} />
        <ProductCard data={data?.Iphone[0]} />
        <ProductCard data={data?.Iphone[0]} />
      </div>
      <div className="w-full max-w-[1300px] flex justify-start px-10 xl:px-16">
        <span className="font-bold text-[20px] font-sans cursor-pointer">
          Motorola
        </span>
      </div>
      <div className="w-full max-w-[1300px] h-auto flex justify-evenly p-5 mb-10">
        <ProductCard data={data?.Iphone[0]} />
        <ProductCard data={data?.Iphone[0]} />
        <ProductCard data={data?.Iphone[0]} />
        <ProductCard data={data?.Iphone[0]} />
      </div>
    </section>
  );
};

export default HeroSection;
