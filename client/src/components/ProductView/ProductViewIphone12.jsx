import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductViewIphone12 = ({ image, color, data, setImage, loading }) => {
  return (
    <div className="flex flex-col items-center">
      {/* PRINCIPAL */}
      {!loading ? (
        image == "principal" ? (
          <>
            {color == "principal" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Iphone?.[1].images?.principal}
                alt="image"
              />
            ) : (
              ""
            )}

            {color == "blue" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Iphone?.[1].images?.blue?.principal}
                alt="image"
              />
            ) : (
              ""
            )}

            {color == "green" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Iphone?.[1].images?.green?.principal}
                alt="image"
              />
            ) : (
              ""
            )}
            {color == "purple" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Iphone?.[1].images?.purple?.principal}
                alt="image"
              />
            ) : (
              ""
            )}
            {color == "red" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Iphone?.[1].images?.red?.principal}
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
              src={data?.Iphone?.[1].images?.image1}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "blue" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Iphone?.[1].images?.blue?.image1}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "green" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Iphone?.[1].images?.green?.image1}
              alt="image"
            />
          ) : (
            ""
          )}
          {color == "purple" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Iphone?.[1].images?.purple?.image1}
              alt="image"
            />
          ) : (
            ""
          )}
          {color == "red" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Iphone?.[1].images?.red?.image1}
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
                  ? data?.Iphone?.[1].images.principal
                  : "" || color == "blue"
                  ? data?.Iphone?.[1].images.blue.principal
                  : "" || color == "green"
                  ? data?.Iphone?.[1].images.green.principal
                  : "" || color == "purple"
                  ? data?.Iphone?.[1].images.purple.principal
                  : "" || color == "red"
                  ? data?.Iphone?.[1].images.red.principal
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
                  ? data?.Iphone?.[1].images.image1
                  : "" || color == "blue"
                  ? data?.Iphone?.[1].images.blue.image1
                  : "" || color == "green"
                  ? data?.Iphone?.[1].images.green.image1
                  : "" || color == "purple"
                  ? data?.Iphone?.[1].images.purple.image1
                  : "" || color == "red"
                  ? data?.Iphone?.[1].images.red.image1
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

export default ProductViewIphone12;
