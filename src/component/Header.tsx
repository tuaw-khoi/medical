import DropdownArrow from "./Dropdown";

const Header = () => {
  return (
    <div className="bg-[#0D4241] text-white flex items-center justify-between px-20 py-3">
      <div className="flex items-center gap-x-4">
        <p>Govt-Program Helpline: 051-591101</p>
        <div className="w-px h-5 bg-white"></div> {/* Thanh ngăn cách nhỏ */}
        <p>Emergency: 051-591014, 591320</p>
      </div>

      <div className="flex items-center gap-x-2">
        <img
          src="https://res.cloudinary.com/dfua5nwki/image/upload/t_Thumbnail/v1741686323/flag_l39stz.svg"
          alt="Flag"
          className="w-6 h-4 object-cover"
        />
        <p>EN</p>
        <div className="mt-2">
          <DropdownArrow />
        </div>
      </div>
    </div>
  );
};

export default Header;
