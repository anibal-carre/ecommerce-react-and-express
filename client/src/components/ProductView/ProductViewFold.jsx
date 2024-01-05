import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductViewS20Fe = ({ image, color, data, setImage, loading }) => {
  return (
    <div className="flex flex-col items-center">
      {/* PRINCIPAL */}
      {!loading ? (
        image == "principal" ? (
          <>
            {color == "principal" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Samsung?.[3].images?.principal}
                alt="image"
              />
            ) : (
              ""
            )}

            {color == "lavander" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Samsung?.[3].images?.lavander?.principal}
                alt="image"
              />
            ) : (
              ""
            )}

            {color == "mint" ? (
              <img
                className="w-[190px] h-[223px] mb-5"
                src={data?.Samsung?.[3].images?.mint?.principal}
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
              src={data?.Samsung?.[3].images?.image1}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "lavander" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[3].images?.lavander?.image1}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "mint" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[3].images?.mint?.image1}
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
              src={data?.Samsung?.[3].images?.image2}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "lavander" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[3].images?.lavander?.image2}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "mint" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[3].images?.mint?.image2}
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
                  ? data?.Samsung?.[3].images.principal
                  : "" || color == "lavander"
                  ? data?.Samsung?.[3].images.lavander.principal
                  : "" || color == "mint"
                  ? data?.Samsung?.[3].images.mint.principal
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
                  ? data?.Samsung?.[3].images.image1
                  : "" || color == "lavander"
                  ? data?.Samsung?.[3].images.lavander.image1
                  : "" || color == "mint"
                  ? data?.Samsung?.[3].images.mint.image1
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
                  ? data?.Samsung?.[3].images.image2
                  : "" || color == "lavander"
                  ? data?.Samsung?.[3].images.lavander.image2
                  : "" || color == "mint"
                  ? data?.Samsung?.[3].images.mint.image2
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

export default ProductViewS20Fe;
