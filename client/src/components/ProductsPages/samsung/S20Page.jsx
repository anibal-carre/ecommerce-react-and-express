import { useContext, useState } from "react";
import DataContext from "../../../DataContext";
import CategorySection from "../../CategorySection";
import HomeFooter from "../../Home/HomeFooter";
import HomeHeader from "../../HomeHeader";
import Rank from "../../Rank";
import ProductView from "../../ProductView";
import TruckIcon from "../../icons/TruckIcon";
import CheckIcon from "../../icons/CheckIcon";

const S20Page = () => {
  const { data } = useContext(DataContext);
  const [image, setImage] = useState("principal");
  const [color, setColor] = useState("principal");
  const [capacity, setCapacity] = useState("128 GB");
  const [condition, setCondition] = useState("excelente");

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

          <div className="w-[700px] px-10 py-5">
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

              <div className="w-full mt-2 flex gap-4">
                <button
                  className={`w-[83px] h-[40px] font-[500]  rounded-[3px] shadow-sm ${
                    capacity == "128 GB"
                      ? "border border-[#ff8800]"
                      : "border border-zinc-300"
                  }`}
                  onClick={() => setCapacity("128 GB")}
                >
                  {data?.Samsung?.[0].capacity?.[0]}
                </button>
                <button
                  className={`w-[83px] h-[40px] font-[500]  rounded-[3px] shadow-sm ${
                    capacity == "256 GB"
                      ? "border border-[#ff8800]"
                      : "border border-zinc-300"
                  }`}
                  onClick={() => setCapacity("256 GB")}
                >
                  {data?.Samsung?.[0].capacity?.[1]}
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full h-[130px] border border-red-500 mt-8">
              <span className="font-[500] text-zinc-600 mb-2">
                Condição: <span className="font-[400]">{condition}</span>
              </span>

              <div className="w-full mt-2 flex gap-4">
                <button
                  className={`w-[180px] h-[75px] flex flex-col justify-center items-center font-[500]  rounded-[3px] shadow-sm ${
                    condition == "excelente"
                      ? "border border-[#ff8800]"
                      : "border border-zinc-300"
                  }`}
                  onClick={() => setCondition("excelente")}
                >
                  <span className="text-[14px] font-[500]">Excelente</span>
                  <span className="text-[12px] font-[400]">{`R$ ${data?.Samsung?.[0].price.toLocaleString()},00`}</span>
                </button>
                <button
                  className={`w-[180px] h-[75px] flex flex-col justify-center items-center font-[500]  rounded-[3px] shadow-sm ${
                    condition == "muito bom"
                      ? "border border-[#ff8800]"
                      : "border border-zinc-300"
                  }`}
                  onClick={() => setCondition("muito bom")}
                >
                  <span className="text-[14px] font-[500]">Muito Bom</span>
                  <span className="text-[12px] font-[400]">{`R$ ${(
                    data?.Samsung?.[0].price - 300
                  ).toLocaleString()},00`}</span>
                </button>
                <button
                  className={`w-[180px] h-[75px] flex flex-col justify-center items-center font-[500]  rounded-[3px] shadow-sm ${
                    condition == "bom"
                      ? "border border-[#ff8800]"
                      : "border border-zinc-300"
                  }`}
                  onClick={() => setCondition("bom")}
                >
                  <span className="text-[14px] font-[500]">Bom</span>
                  <span className="text-[12px] font-[400]">{`R$ ${(
                    data?.Samsung?.[0].price - 500
                  ).toLocaleString()},00`}</span>
                </button>
              </div>

              <div className="w-full mt-2 flex gap-4"></div>
            </div>
          </div>
          <div className="w-[230px] flex flex-col border rounded-[3px] py-4 px-3">
            <span className="flex items-center gap-2 text-[17px] font-[600]">
              <span className="text-zinc-400 line-through">
                {`R$ ${(data?.Samsung?.[0].price * 1.3).toLocaleString()},00`}
              </span>
              <span className="w-[50px] flex items-center justify-center rounded-[3px] bg-[#ff8800] text-white text-[15px]">
                - 15%
              </span>
            </span>

            <span className="text-[32px] font-[700] text-zinc-700">{`R$ ${data?.Samsung?.[0].price.toLocaleString()},00`}</span>

            <span className="text-green-600 font-[500] text-[15px]">
              10% OFF <span className="text-zinc-700">no Pix</span>
            </span>

            <span className="mt-2 font-[500]">
              ou{" "}
              <span className="text-zinc-400 font-[600] text-[17px]">{`R$ ${(
                data?.Samsung?.[0].price * 1.1
              ).toLocaleString()},00`}</span>
            </span>
            <span className="font-[400] text-[14px]">
              Até{" "}
              <span className="font-[600]">
                12x de{" "}
                {`R$ ${(data?.Samsung?.[0].price / 12)
                  .toFixed(2)
                  .toLocaleString()}`}{" "}
              </span>
              sem juros
            </span>

            <span className="mt-4 text-blue-500 text-[14px] cursor-pointer">
              Ver as formas de pagamento
            </span>

            <span className="text-[#ff8800] mt-3 font-[600] text-[17px]">
              Últimos Unidades!
            </span>

            <div className="mt-5 h-[1px] w-full bg-zinc-300"></div>

            <span className="flex items-center gap-1 font-[500] text-[14px] mt-5">
              <TruckIcon /> Receba em seu endereço
            </span>
            <span className="text-blue-500 text-[14px] cursor-pointer">
              Consultar entrega
            </span>
            <span className="flex items-center gap-1 font-[500] text-[14px] mt-5">
              <CheckIcon /> Produto vendido e
            </span>
            <span className="flex items-center gap-1 font-[500] text-[14px]">
              entregue por PHONE SHOP
            </span>

            <button className="w-full h-[40px] bg-[#ff8800] text-white font-[500] mt-8 rounded-[3px] hover:bg-orange-600">
              Adicionar ao carrinho
            </button>
            <button className="w-full h-[40px] bg-[#ff8800] text-white font-[500] mt-4 rounded-[3px] hover:bg-orange-600">
              Comprar
            </button>
          </div>
        </div>
      </section>
      <HomeFooter />
    </section>
  );
};

export default S20Page;
