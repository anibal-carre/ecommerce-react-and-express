const ProductView = ({ image, color, data, setImage }) => {
  return (
    <div className="flex flex-col items-center">
      {/* PRINCIPAL */}
      {image == "principal" ? (
        <>
          {color == "principal" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[0].images?.principal}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "lavander" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[0].images?.lavander?.principal}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "mint" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[0].images?.mint?.principal}
              alt="image"
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      {/* IMAGE 1 */}

      {image == "image1" ? (
        <>
          {color == "principal" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[0].images?.image1}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "lavander" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[0].images?.lavander?.image1}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "mint" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[0].images?.mint?.image1}
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
              src={data?.Samsung?.[0].images?.image2}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "lavander" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[0].images?.lavander?.image2}
              alt="image"
            />
          ) : (
            ""
          )}

          {color == "mint" ? (
            <img
              className="w-[190px] h-[223px] mb-5"
              src={data?.Samsung?.[0].images?.mint?.image2}
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
  );
};

export default ProductView;
