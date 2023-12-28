import { useContext } from "react";
import DataContext from "../../../DataContext";
import CategorySection from "../../CategorySection";
import HomeFooter from "../../Home/HomeFooter";
import HomeHeader from "../../HomeHeader";

const S20Page = () => {
  const { data } = useContext(DataContext);
  return (
    <section className="w-full h-screen">
      <HomeHeader />
      <CategorySection />
      <section className="w-full h-[800px] border">
        <span>{data?.Samsung?.[0]?.name}</span>
      </section>
      <HomeFooter />
    </section>
  );
};

export default S20Page;
