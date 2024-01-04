const AsideSection = () => {
  return (
    <aside className="hidden md:flex md:flex-col md:w-[245px] md:border md:border-zinc-300 md:bg-white md:h-full md:px-2 md:py-8">
      {/* Categoria */}

      <span className="font-[500] text-[18px] ml-2 mt-5 mb-1">Categoria</span>
      <div className="h-[1px] w-[90%] bg-zinc-300 self-center mb-3" />
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Smartphones
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Outlet
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Smartwatches Samsung
      </span>

      {/* Modelos */}

      <span className="font-[500] text-[18px] ml-2 mt-5 mb-1">Modelos</span>
      <div className="h-[1px] w-[90%] bg-zinc-300 self-center mb-3" />

      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Moto G50
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Moto G 5G
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        iPhone 13
      </span>

      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        iPhone 15
      </span>

      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Galaxy Z Flip 3
      </span>

      {/* Condição */}
      <span className="font-[500] text-[18px] ml-2 mt-5 mb-1">Condição</span>
      <div className="h-[1px] w-[90%] bg-zinc-300 self-center mb-3" />

      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Outlet
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Excelente
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Bom
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Muito Bom
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Novo
      </span>

      {/* Cor */}
      <span className="font-[500] text-[18px] ml-2 mt-5 mb-1">Cor</span>
      <div className="h-[1px] w-[90%] bg-zinc-300 self-center mb-3" />

      <div className="flex gap-3 flex-wrap mb-5">
        <span className="w-[22px] h-[22px] rounded-full bg-zinc-800 ml-2 mb-1 cursor-pointer"></span>
        <span className="w-[22px] h-[22px] rounded-full bg-blue-500 ml-2 mb-1 cursor-pointer"></span>
        <span className="w-[22px] h-[22px] rounded-full bg-green-500 ml-2 mb-1 cursor-pointer"></span>
        <span className="w-[22px] h-[22px] rounded-full bg-yellow-500 ml-2 mb-1 cursor-pointer"></span>
        <span className="w-[22px] h-[22px] rounded-full bg-red-500 ml-2 mb-1 cursor-pointer"></span>
        <span className="w-[22px] h-[22px] rounded-full bg-pink-500 ml-2 mb-1 cursor-pointer"></span>
        <span className="w-[22px] h-[22px] rounded-full bg-purple-500 ml-2 mb-1 cursor-pointer"></span>
        <span className="w-[22px] h-[22px] rounded-full bg-slate-500 ml-2 mb-1 cursor-pointer"></span>
        <span className="w-[22px] h-[22px] rounded-full bg-zinc-300 ml-2 mb-1 cursor-pointer"></span>
      </div>

      {/* Marca */}
      <span className="font-[500] text-[18px] ml-2 mt-5 mb-1">Marca</span>
      <div className="h-[1px] w-[90%] bg-zinc-300 self-center mb-3" />

      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Samsung
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Apple
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        Motorola
      </span>

      {/* Memoria Interna */}
      <span className="font-[500] text-[18px] ml-2 mt-5 mb-1">
        Memória Interna
      </span>
      <div className="h-[1px] w-[90%] bg-zinc-300 self-center mb-3" />

      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        64 GB
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        128 GB
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        32 GB
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        256 GB
      </span>
      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        512 GB
      </span>
      {/* Faixa de Preço */}
      <span className="font-[500] text-[18px] ml-2 mt-5 mb-1">
        Faixa de Preço
      </span>
      <div className="h-[1px] w-[90%] bg-zinc-300 self-center mb-3" />

      <span className="text-blue-500 hover:underline text-[14px] ml-2 mb-1">
        R$ 229,00 - R$ 7.449,00
      </span>
    </aside>
  );
};

export default AsideSection;
