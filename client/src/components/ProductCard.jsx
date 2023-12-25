const ProductCard = ({ data }) => {
  return (
    <div className="border flex flex-col items-center w-[180px] h-[370px] rounded-[2px] shadow-sm shadow-black cursor-pointer hover:scale-105 transition-all delay-75 p-4">
      <div className="flex justify-center items-center">
        <img
          className="w-[127px] h-[150px]"
          src={data?.images?.principal}
          alt={data?.name}
        />
      </div>
      <div className="w-[127px] flex flex-col mt-3 font-sans">
        <span className="text-[13px]">{data?.brand}</span>
        <span className="text-[13px] font-[500] mb-2">{data?.name}</span>

        <span className="text-[13px] text-zinc-400">A partir de</span>
        <span className="text-[19px] font-[700] text-[#ff8800] mb-4">
          {`R$ ${data?.price.toLocaleString()},00`}
        </span>

        <span className="text-[10px]">{`12x de R$ ${(data?.price / 12).toFixed(
          2
        )} sem juros ou no pix 10% off R$ ${(
          data?.price - 100.44
        ).toLocaleString()}`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
