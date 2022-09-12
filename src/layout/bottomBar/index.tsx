import { IconButton } from "../../components/atoms";

export default function BottomBar() {
  return (
    <div className="fixed w-full sm:hidden bg-teal-800 bottom-0 text-white py-2">
      <div className="flex justify-between px-2">
        {/* home */}
        <IconButton backgroundColor="transparent" icon="fa:search" />
        {/* keranjang */}
        <IconButton backgroundColor="transparent" icon="fa:search" />
        {/* notifikasi */}
        <IconButton backgroundColor="transparent" icon="fa:search" />
        {/* whitlist */}
        <IconButton backgroundColor="transparent" icon="fa:search" />
      </div>
    </div>
  );
}
