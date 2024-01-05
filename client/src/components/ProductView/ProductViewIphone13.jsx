import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductViewIphone13 = ({ image, color, data, setImage, loading }) => {
  return (
    <div className="flex flex-col items-center">
      {/* PRINCIPAL */}
      {!loading ? (
        image == "principal" ? (
          <>
            {color == "principal" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Iphone?.[0].images?.principal}
                alt="image"
              />
            ) : (
              ""
            )}

            {color == "blue" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Iphone?.[0].images?.blue?.principal}
                alt="image"
              />
            ) : (
              ""
            )}

            {color == "yellow" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Iphone?.[0].images?.yellow?.principal}
                alt="image"
              />
            ) : (
              ""
            )}
            {color == "silver" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Iphone?.[0].images?.silver?.principal}
                alt="image"
              />
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )
      ) : (
        <div className="w-[190px] h-[223px] flex justify-center">
          <SkeletonTheme height={210} width={150}>
            <Skeleton count={1} />
          </SkeletonTheme>
        </div>
      )}
      {/* IMAGE 1 */}

      {image == "image1" ? (
        <>
          {color == "principal" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Iphone?.[0].images?.image1}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "blue" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Iphone?.[0].images?.blue?.image1}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "yellow" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Iphone?.[0].images?.yellow?.image1}
              alt="image"
            />
          ) : (
            ""
          )}
          {color == "silver" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Iphone?.[0].images?.silver?.image1}
              alt="image"
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      <div className="flex gap-2">
        <div
          className={`rounded-sm w-[68px] h-[68px] p-1 cursor-pointer flex justify-center items-center ${
            image == "principal"
              ? `border border-[#ff8800]`
              : `border border-zinc-300 `
          }`}
          onClick={() => setImage("principal")}
        >
          {!loading ? (
            <img
              className="w-full h-full"
              src={
                color == "principal"
                  ? data?.Iphone?.[0].images.principal
                  : "" || color == "blue"
                  ? data?.Iphone?.[0].images.blue.principal
                  : "" || color == "yellow"
                  ? data?.Iphone?.[0].images.yellow.principal
                  : "" || color == "silver"
                  ? data?.Iphone?.[0].images.silver.principal
                  : ""
              }
              alt="image1"
            />
          ) : (
            <div className="w-[68px] h-[68px] flex justify-center items-center">
              <SkeletonTheme height={60} width={60}>
                <Skeleton count={1} />
              </SkeletonTheme>
            </div>
          )}
        </div>
        <div
          className={`rounded-sm w-[68px] h-[68px] p-1 cursor-pointer flex justify-center items-center ${
            image == "image1"
              ? `border border-[#ff8800]`
              : `border border-zinc-300 `
          }`}
          onClick={() => setImage("image1")}
        >
          {!loading ? (
            <img
              className="w-full h-full"
              src={
                color == "principal"
                  ? data?.Iphone?.[0].images.image1
                  : "" || color == "blue"
                  ? data?.Iphone?.[0].images.blue.image1
                  : "" || color == "yellow"
                  ? data?.Iphone?.[0].images.yellow.image1
                  : "" || color == "silver"
                  ? data?.Iphone?.[0].images.silver.image1
                  : ""
              }
              alt="image1"
            />
          ) : (
            <div className="w-[68px] h-[68px] flex justify-center items-center">
              <SkeletonTheme height={60} width={60}>
                <Skeleton count={1} />
              </SkeletonTheme>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductViewIphone13;
