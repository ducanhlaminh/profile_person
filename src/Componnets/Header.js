import avatar from "../asset/avatar.png";

function Header() {
  return (
    <>
      <div className="text-sm h-[60px] flex justify-center bg-white items-center relative">
        <div className="p-3">Home</div>
        <div className="p-3">Profolio</div>
        <div className="p-3">About Me</div>
        <div className="p-3">Contact Me</div>
      </div>
      <div className="absolute h-[70px] bg-gradient-to-b from-[#807f7f12] w-full"></div>
      <div className="px-[50px] h-[900px] bg-[#F5FCFF] flex items-center w-full">
        <div className="h-[350px] flex w-full">
          <div className="text-[15px] font-semibold w-[50%]">
            <p>Chào mọi người</p>
            <p className="text-[70px]">
              CHÀO MỪNG MỌI NGƯỜI ĐẾN VỚI
              <span className="mx-4 text-[#5E3BEE]">TRANG CÁ NHÂN</span>
              CỦA TÔI
            </p>
            <div className="h-[60px] w-[180px] bg-[#5E3BEE] flex justify-center items-center text-white rounded-lg text-xl font-medium">
              LIÊN HỆ
            </div>
          </div>
          <div className="text-[15px] font-semibold w-[50%] relative">
            <div className="bg-[#CBE0EB] h-full rounded-[30px]"></div>
            <div className="absolute bottom-0 w-full flex justify-center h-[160%]">
              <img src={avatar} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0" mask-type="alpha">
              <path
                fill="#5E3BEE"
                d="M45.2,-70.2C57,-62.7,64,-47.6,70.5,-32.5C77,-17.3,83,-2.3,78.2,9.2C73.3,20.7,57.7,28.5,47.4,41.9C37.1,55.4,32.3,74.4,21.9,79.8C11.6,85.2,-4.3,77,-19.4,70.6C-34.5,64.1,-48.8,59.4,-60.9,50.1C-73,40.9,-82.9,27.1,-85.1,12.2C-87.2,-2.7,-81.5,-18.7,-72.6,-31.1C-63.8,-43.6,-51.6,-52.5,-39,-59.6C-26.3,-66.7,-13.2,-72,1.8,-74.7C16.7,-77.4,33.4,-77.7,45.2,-70.2Z"
                transform="translate(100 100)"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                fill="#5E3BEE"
                d="M45.2,-70.2C57,-62.7,64,-47.6,70.5,-32.5C77,-17.3,83,-2.3,78.2,9.2C73.3,20.7,57.7,28.5,47.4,41.9C37.1,55.4,32.3,74.4,21.9,79.8C11.6,85.2,-4.3,77,-19.4,70.6C-34.5,64.1,-48.8,59.4,-60.9,50.1C-73,40.9,-82.9,27.1,-85.1,12.2C-87.2,-2.7,-81.5,-18.7,-72.6,-31.1C-63.8,-43.6,-51.6,-52.5,-39,-59.6C-26.3,-66.7,-13.2,-72,1.8,-74.7C16.7,-77.4,33.4,-77.7,45.2,-70.2Z"
                transform="translate(100 100)"
              />
              <image xlinkHref={avatar} className="w-[120px] " x="35" y="40" />
            </g>
          </svg>
        </div>
        <div className="w-2/3">
          <p>About</p>
          <p>Gioi thieu</p>
        </div>
      </div>
    </>
  );
}

export default Header;
