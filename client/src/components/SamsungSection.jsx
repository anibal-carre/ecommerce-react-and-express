import { useContext } from "react";
import DataContext from "../DataContext";
import BannerSection from "./BannerSection";
import AsideSection from "../components/AsideSection";
import ProductCard from "./ProductCard";
import HomeHeader from "./HomeHeader";
import CategorySection from "./CategorySection";
import HomeFooter from "./Home/HomeFooter";

const SamsungSection = () => {
  const { data, loading } = useContext(DataContext);

  console.log(data);
  return (
    <div className="w-screen h-screen">
      <HomeHeader />
      <CategorySection />
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
              <ProductCard
                loading={loading}
                data={data?.Samsung?.[0]}
                brand={"samsung"}
                name={"s20fe"}
              />
              <ProductCard
                loading={loading}
                data={data?.Samsung?.[1]}
                brand={"samsung"}
                name={"s23ultra"}
              />
              <ProductCard
                loading={loading}
                data={data?.Samsung?.[2]}
                brand={"samsung"}
                name={"s23"}
              />
              <ProductCard
                loading={loading}
                data={data?.Samsung?.[3]}
                brand={"samsung"}
                name={"fold"}
              />
            </div>
          </div>
        </div>
      </section>
      <HomeFooter />
    </div>
  );
};

export default SamsungSection;
