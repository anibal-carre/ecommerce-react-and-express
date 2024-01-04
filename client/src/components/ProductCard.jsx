import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCard = ({ data, loading, brand, name }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/smartphones/${brand}/${name}`)}
      className="border flex flex-col items-center bg-white w-[180px] h-[370px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75 p-4"
    >
      <div className="flex justify-center items-center">
        {!loading ? (
          <img
            className="w-[127px] h-[150px]"
            src={data?.images?.principal}
            alt={data?.name}
          />
        ) : (
          <div className="w-[127px] h-[150px] text-[50px]">
            <SkeletonTheme height={150}>
              <Skeleton count={1} />
            </SkeletonTheme>
          </div>
        )}
      </div>
      <div className="w-[127px] flex flex-col mt-3 font-sans">
        <span className="text-[13px]">
          {!loading ? (
            data?.brand
          ) : (
            <div className="text-[20px]">
              <SkeletonTheme>
                <Skeleton duration={1.5} count={1} />
              </SkeletonTheme>
            </div>
          )}
        </span>
        <span className="text-[13px] font-[500] mb-2">
          {!loading ? (
            data?.name
          ) : (
            <div className="text-[20px]">
              <SkeletonTheme>
                <Skeleton duration={1.5} count={1} />
              </SkeletonTheme>
            </div>
          )}
        </span>

        <span className="text-[13px] text-zinc-400">
          {!loading ? "A partir de" : ""}
        </span>
        <span className="text-[19px] font-[700] text-[#ff8800] mb-4">
          {!loading ? (
            `R$ ${data?.price.toLocaleString()},00`
          ) : (
            <div className="text-[20px]">
              <SkeletonTheme>
                <Skeleton duration={1.5} count={1} />
              </SkeletonTheme>
            </div>
          )}
        </span>

        <span className="text-[10px]">
          {!loading ? (
            `12x de R$ ${(data?.price / 12).toFixed(
              2
            )} sem juros ou no pix 10% off R$ ${(
              data?.price - 100.44
            ).toLocaleString()}`
          ) : (
            <div className="text-[20px]">
              <SkeletonTheme>
                <Skeleton duration={1.5} count={1} />
              </SkeletonTheme>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
