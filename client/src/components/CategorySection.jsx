const CategorySection = () => {
  return (
    <section className="w-full h-[60px] flex items-center justify-center border mt-5 shadow-sm shadow-zinc-800">
      <ul className="w-full max-w-[900px] h-full flex justify-between items-center">
        <li>
          <span className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200">
            Categorias
          </span>
        </li>
        <li>
          <span className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200">
            iPhone
          </span>
        </li>
        <li>
          <span className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200">
            Samsung
          </span>
        </li>
        <li>
          <span className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200">
            Motorola
          </span>
        </li>
        <li>
          <span className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200">
            Smartwatches
          </span>
        </li>
        <li>
          <span className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200">
            Tablets
          </span>
        </li>
        <li>
          <span className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200">
            Informática
          </span>
        </li>
        <li>
          <span className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200">
            Acessórios
          </span>
        </li>
        <li>
          <span className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200">
            Outlet
          </span>
        </li>
      </ul>
    </section>
  );
};

export default CategorySection;
