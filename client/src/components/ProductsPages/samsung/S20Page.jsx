import { useContext, useState } from "react";
import DataContext from "../../../DataContext";
import CategorySection from "../../CategorySection";
import HomeFooter from "../../Home/HomeFooter";
import HomeHeader from "../../HomeHeader";
import Rank from "../../Rank";
import ProductView from "../../ProductView";

const S20Page = () => {
  const { data } = useContext(DataContext);
  const [image, setImage] = useState("principal");
  const [color, setColor] = useState("principal");
  return (
    <section className="w-full h-screen">
      <HomeHeader />
      <CategorySection />
      <section className="w-full h-[800px] flex justify-center p-8 py-16 border">
        <div className="w-full max-w-[1100px] flex">
          <ProductView
            color={color}
            image={image}
            data={data}
            setImage={setImage}
          />

          <div className="w-[700px] px-10 py-5 border border-green-500">
            <h2 className="text-[25px] font-[600] font-sans text-zinc-600 mb-1">
              {data?.Samsung?.[0].name}
            </h2>

            <Rank rank={data?.Samsung?.[0].ranking} />

            <span className="font-[500] text-zinc-600">
              Cor:{" "}
              <span className="text-[#ff8800] font-[500]">
                {color == "principal" ? "Azul" : ""}
                {color == "mint" ? "Menta" : ""}
                {color == "lavander" ? "Lavanda" : ""}
              </span>
            </span>

            <div className="flex items-center gap-2 border border-blue-500 mt-4">
              <div
                className={`w-[42px] h-[42px] flex justify-center items-center bg-white border rounded-full ${
                  color == "principal" ? `border border-[#ff8800]` : ""
                }`}
                onClick={() => setColor("principal")}
              >
                <div
                  className={`w-[36px] h-[36px] bg-slate-500 rounded-full `}
                ></div>
              </div>
              <div
                className={`w-[42px] h-[42px] flex justify-center items-center bg-white border rounded-full ${
                  color == "lavander" ? `border border-[#ff8800]` : ""
                }`}
                onClick={() => setColor("lavander")}
              >
                <div
                  className={`w-[36px] h-[36px] bg-[#ddadd4] rounded-full `}
                ></div>
              </div>
              <div
                className={`w-[42px] h-[42px] flex justify-center items-center bg-white border rounded-full ${
                  color == "mint" ? `border border-[#ff8800]` : ""
                }`}
                onClick={() => setColor("mint")}
              >
                <div
                  className={`w-[36px] h-[36px] bg-[#98ff98] rounded-full `}
                ></div>
              </div>
            </div>

            <div className="flex flex-col w-full h-[100px] border border-red-500 mt-5">
              <span className="font-[500] text-zinc-600">Capacidade</span>

              <div className="w-full mt-2">
                <button className="w-[83px] h-[40px] border border-zinc-300 rounded-[3px]"></button>
              </div>
            </div>
          </div>
          <div className="w-[200px] border">hello</div>
        </div>
      </section>
      <HomeFooter />
    </section>
  );
};

export default S20Page;
