import { useState } from "react";
import { Iconify, Typograhpy } from "../../components/atoms";

export default function AppBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full bg-teal-800 hidden p-5 sm:flex justify-between items-center px-10 select-none">
      <div className="cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        <Iconify icon="dashicons:menu-alt3" />
        <PopUpMenu showProfileMenu={showMenu} />
      </div>
      <Typograhpy
        child={`${process.env.NEXT_PUBLIC_NAMEAPP}`}
        variant="2xl"
        other={"font-extrabold text-white"}
      />
      <div className="flex items-center">
        <Iconify other={"mr-10"} size="2xl" icon="fa:search" />
        <Iconify other={"mr-10"} size="2xl" icon="ci:notification" />
        <Iconify size="2xl" icon="heroicons:shopping-cart-20-solid" />
      </div>
    </div>
  );
}

const PopUpMenu = (props: { showProfileMenu: boolean }) => {
  return (
    <div
      className={`${
        props.showProfileMenu ? "absolute" : "hidden"
      } left-0 z-20 border w-48 py-2 mt-1 ml-14 overflow-hidden bg-white rounded-md shadow-sm shadow-teal-50`}
    >
      <div className="block cursor-pointer px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-teal-50">
        <p>Produk Favorit</p>
      </div>
      <div className="block cursor-pointer px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-teal-50">
        <p>Tiket Diskon</p>
      </div>
    </div>
  );
};
