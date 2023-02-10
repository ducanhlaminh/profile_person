function Header() {
  return (
    <>
      <div className="text-sm h-[60px] flex justify-center bg-white items-center">
        <div className="p-3">Home</div>
        <div className="p-3">Profolio</div>
        <div className="p-3">About Me</div>
        <div className="p-3">Contact Me</div>
      </div>
      <div className="h-[500px] bg-gradient-to-b from-[#d4d4df26] via-[#76d2d57d] to-[#76d2d57d] flex justify-center items-center">
        <div className="h-[350px] w-[75%] flex">
          <div className="text-[15px] font-semibold">
            <p>Chào mọi người</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
