import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <section className="w-full h-[60px] flex items-center justify-center border mt-5 shadow-sm shadow-zinc-800">
      <ul className="w-full max-w-[900px] h-full flex justify-between items-center">
        <li>
          <Link
            className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200"
            to="/"
          >
            {" "}
            Categorias
          </Link>
        </li>
        <li>
          <Link
            className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200"
            to="/iphone"
          >
            {" "}
            iPhone
          </Link>
        </li>
        <li>
          <Link
            className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200"
            to="/samsung"
          >
            {" "}
            Samsung
          </Link>
        </li>
        <li>
          <Link
            className="text-[15px] font-sans cursor-pointer hover:underline duration-200 hover:delay-200"
            to="/motorola"
          >
            {" "}
            Motorola
          </Link>
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
