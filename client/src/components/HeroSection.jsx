import { useContext } from "react";
import DataContext from "../DataContext";
import BannerSection from "./BannerSection";
import AsideSection from "../components/AsideSection";
import ProductCard from "./ProductCard";

const HeroSection = () => {
  const { data, loading } = useContext(DataContext);

  console.log(data);
  return (
    <section className="w-full h-auto min-h-screen p-4 bg-slate-100 md:p-8 flex flex-col items-center">
      <div className="h-auto w-full max-w-[1200px] flex">
        <div>
          <AsideSection />
        </div>
        <div className="flex flex-col w-full max-w-[1800px] h-full">
          <div className="max-w-[1800px] w-full h-full flex gap-5 justify-center mb-5">
            <BannerSection />
          </div>

          <div className="w-full max-w-[1300px] flex justify-start px-10 xl:px-16">
            <span className="font-bold text-[20px] font-sans cursor-pointer">
              Samsung
            </span>
          </div>

          <div className="w-full max-w-[1300px] h-auto flex justify-evenly p-5 mb-10">
            <ProductCard loading={loading} data={data?.Samsung?.[0]} />
            <ProductCard loading={loading} data={data?.Samsung?.[1]} />
            <ProductCard loading={loading} data={data?.Samsung?.[2]} />
            <ProductCard loading={loading} data={data?.Samsung?.[3]} />
          </div>
          <div className="w-full max-w-[1300px] flex justify-start px-10 xl:px-16">
            <span className="font-bold text-[20px] font-sans cursor-pointer">
              iPhone
            </span>
          </div>
          <div className="w-full max-w-[1300px] h-auto flex justify-evenly p-5 mb-10">
            <ProductCard loading={loading} data={data?.Iphone?.[0]} />
            <ProductCard loading={loading} data={data?.Iphone?.[1]} />
            <ProductCard loading={loading} data={data?.Iphone?.[2]} />
            <ProductCard loading={loading} data={data?.Iphone?.[3]} />
          </div>
          <div className="w-full max-w-[1300px] flex justify-start px-10 xl:px-16">
            <span className="font-bold text-[20px] font-sans cursor-pointer">
              Motorola
            </span>
          </div>
          <div className="w-full max-w-[1300px] h-auto flex justify-evenly p-5 mb-10">
            <ProductCard loading={loading} data={data?.Motorola?.[0]} />
            <ProductCard loading={loading} data={data?.Motorola?.[1]} />
            <ProductCard loading={loading} data={data?.Motorola?.[2]} />
            <ProductCard loading={loading} data={data?.Motorola?.[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
