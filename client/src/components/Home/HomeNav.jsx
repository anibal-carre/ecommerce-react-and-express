const HomeNav = () => {
  return (
    <nav className="w-full max-w-[1100px] h-20 flex justify-between border border-black">
      <div className="w-[20%] border border-blue-500"></div>
      <div className="w-[45%] flex items-center border border-blue-500">
        <input className="w-[90%] h-12 border" type="text" />
      </div>
      <div className="w-[25%] border border-blue-500"></div>
    </nav>
  );
};

export default HomeNav;
