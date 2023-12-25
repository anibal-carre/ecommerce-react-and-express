import BagIcon from "../icons/BagIcon";
import SearchIcon from "../icons/SearchIcon";
import UserIcon from "../icons/UserIcon";

const HomeNav = () => {
  return (
    <nav className="w-full max-w-[1100px] h-20 flex justify-between">
      <div className="w-[20%] flex justify-center items-center">
        <span className="font-bold text-[20px] text-[#ff8800] cursor-pointer">
          PHONE SHOP
        </span>
      </div>
      <div className="w-[45%] flex items-center">
        <input className="w-[90%] h-12 border relative" type="text" />

        <span className="relative right-8 text-zinc-400 text-[20px] cursor-pointer">
          <SearchIcon />
        </span>
      </div>
      <div className="w-[25%] flex items-center justify-center gap-8">
        <span className="font-bold text-zinc-600 text-[20px] cursor-pointer">
          <UserIcon />
        </span>
        <span className="font-bold text-zinc-600 text-[20px] cursor-pointer">
          <BagIcon />
        </span>
      </div>
    </nav>
  );
};

export default HomeNav;
