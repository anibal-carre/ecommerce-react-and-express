import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductViewMotoG22 = ({ image, color, data, setImage, loading }) => {
  return (
    <div className="flex flex-col items-center">
      {/* PRINCIPAL */}
      {!loading ? (
        image == "principal" ? (
          <>
            {color == "principal" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Motorola?.[3].images?.principal}
                alt="image"
              />
            ) : (
              ""
            )}

            {color == "green" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Motorola?.[3].images?.green?.principal}
                alt="image"
              />
            ) : (
              ""
            )}

            {color == "black" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Motorola?.[3].images?.black?.principal}
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
              src={data?.Motorola?.[3].images?.image1}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "green" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Motorola?.[3].images?.green?.image1}
              alt="image"
            />
          ) : (
            ""
          )}
          {color == "black" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Motorola?.[3].images?.black?.image1}
              alt="image"
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {/* IMAGE 2*/}
      {image == "image2" ? (
        <>
          {color == "principal" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Motorola?.[3].images?.image2}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "green" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Motorola?.[3].images?.green?.image2}
              alt="image"
            />
          ) : (
            ""
          )}
          {color == "black" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Motorola?.[3].images?.black?.image2}
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
                  ? data?.Motorola?.[3].images.principal
                  : "" || color == "green"
                  ? data?.Motorola?.[3].images.green.principal
                  : "" || color == "black"
                  ? data?.Motorola?.[3].images.black.principal
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
                  ? data?.Motorola?.[3].images.image1
                  : "" || color == "green"
                  ? data?.Motorola?.[3].images.green.image1
                  : "" || color == "black"
                  ? data?.Motorola?.[3].images.black.image1
                  : ""
              }
              alt="image2"
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
            image == "image2"
              ? `border border-[#ff8800]`
              : `border border-zinc-300 `
          }`}
          onClick={() => setImage("image2")}
        >
          {!loading ? (
            <img
              className="w-full h-full"
              src={
                color == "principal"
                  ? data?.Motorola?.[3].images.image2
                  : "" || color == "green"
                  ? data?.Motorola?.[3].images.green.image2
                  : "" || color == "black"
                  ? data?.Motorola?.[3].images.black.image2
                  : ""
              }
              alt="image3"
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

export default ProductViewMotoG22;
