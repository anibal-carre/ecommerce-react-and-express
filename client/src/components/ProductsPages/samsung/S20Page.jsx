import { useContext, useState } from "react";
import DataContext from "../../../DataContext";
import CategorySection from "../../CategorySection";
import HomeFooter from "../../Home/HomeFooter";
import HomeHeader from "../../HomeHeader";
import Rank from "../../Rank";

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
          <div className="border flex flex-col items-center">
            {image == "principal" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Samsung?.[0].images?.principal}
                alt="image"
              />
            ) : (
              ""
            )}

            {image == "image1" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Samsung?.[0].images?.image1}
                alt="image"
              />
            ) : (
              ""
            )}

            {image == "image2" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Samsung?.[0].images?.image2}
                alt="image"
              />
            ) : (
              ""
            )}
            <div className="flex gap-2">
              <div
                className={`rounded-sm w-[68px] h-[68px] p-1 cursor-pointer ${
                  image == "principal"
                    ? `border border-[#ff8800]`
                    : `border border-zinc-300 `
                }`}
                onClick={() => setImage("principal")}
              >
                <img
                  className="w-full h-full"
                  src={data?.Samsung?.[0].images.principal}
                  alt="image1"
                />
              </div>
              <div
                className={`rounded-sm w-[68px] h-[68px] p-1 cursor-pointer ${
                  image == "image1"
                    ? `border border-[#ff8800]`
                    : `border border-zinc-300 `
                }`}
                onClick={() => setImage("image1")}
              >
                <img
                  className="w-full h-full"
                  src={data?.Samsung?.[0].images.image1}
                  alt="image2"
                />
              </div>
              <div
                className={`rounded-sm w-[68px] h-[68px] p-1 cursor-pointer ${
                  image == "image2"
                    ? `border border-[#ff8800]`
                    : `border border-zinc-300 `
                }`}
                onClick={() => setImage("image2")}
              >
                <img
                  className="w-full h-full"
                  src={data?.Samsung?.[0].images.image2}
                  alt="image3"
                />
              </div>
            </div>
          </div>

          <div className="w-[700px] px-10 py-5 border">
            <h2 className="text-[25px] font-[600] font-sans text-zinc-600 mb-1">
              {data?.Samsung?.[0].name}
            </h2>

            <Rank rank={data?.Samsung?.[0].ranking} />

            <span className="font-[500] text-zinc-600">
              Cor: <span className="text-[#ff8800] font-[500]">Azul</span>
            </span>

            <div className="flex gap-2">
              <div
                className={`w-[36px] h-[36px] bg-slate-500 rounded-full mt-4 ${
                  color == "principal" ? `border border-[#ff8800]` : ""
                }`}
                onClick={() => setColor("principal")}
              ></div>
              <div
                className={`w-[36px] h-[36px] bg-[#967bb6] rounded-full mt-4 ${
                  color == "lavander" ? `border border-[#ff8800]` : ""
                }`}
                onClick={() => setColor("lavander")}
              ></div>
              <div
                className={`w-[36px] h-[36px] bg-[#98ff98] rounded-full mt-4 ${
                  color == "mint" ? `border border-[#ff8800]` : ""
                }`}
                onClick={() => setColor("mint")}
              ></div>
            </div>
          </div>
          <div className="w-[200px] border"></div>
        </div>
      </section>
      <HomeFooter />
    </section>
  );
};

export default S20Page;
