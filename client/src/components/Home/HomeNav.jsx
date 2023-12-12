const HomeNav = () => {
  return (
    <nav className="w-full max-w-[1100px] h-20 flex justify-between border border-black">
      <div className="w-[20%] flex justify-center items-center border border-blue-500">
        <span className="font-bold text-[20px]">PHONE SHOP</span>
      </div>
      <div className="w-[45%] flex items-center border border-blue-500">
        <input className="w-[90%] h-12 border" type="text" />
      </div>
      <div className="w-[25%] flex items-center justify-center gap-8 border border-blue-500">
        <span className="font-bold">My Account</span>
        <span>Cart</span>
      </div>
    </nav>
  );
};

export default HomeNav;
