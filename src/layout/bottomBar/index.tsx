import { useRouter } from "next/router";
import { IconButton } from "../../components/atoms";

export default function BottomBar() {
  const router = useRouter();
  return (
    <div className="fixed w-full z-20 sm:hidden bg-teal-800 bottom-0 text-white">
      <div className="flex justify-between">
        <div
          className={`text-center cursor-pointer ${
            router.pathname === "/" ? "bg-gray-800" : ""
          } hover:bg-gray-800 rounded-r-lg p-2`}
        >
          <IconButton
            backgroundColor="transparent"
            icon="ant-design:home-filled"
            onClick={() => router.push("/")}
          />
          {/* <p className="text-sm">Home</p> */}
        </div>
        <div
          className={`text-center cursor-pointer ${
            router.pathname === "/tersimpan" ? "bg-gray-800" : ""
          } hover:bg-gray-800 p-2`}
        >
          <IconButton
            backgroundColor="transparent"
            icon="ci:heart-fill"
            onClick={() => router.push("/tersimpan")}
          />
          {/* <p className="text-sm">Tersimpan</p> */}
        </div>
        <div
          className={`text-center cursor-pointer ${
            router.pathname === "/keranjang" ? "bg-gray-800" : ""
          } hover:bg-gray-800 p-2`}
        >
          <IconButton
            backgroundColor="transparent"
            icon="bxs:cart"
            onClick={() => router.push("/keranjang")}
          />
          {/* <p className="text-sm">Keranjang</p> */}
        </div>
        <div
          className={`${
            router.pathname === "/notifikasi" ? "bg-gray-800" : ""
          } text-center cursor-pointer hover:bg-gray-800 rounded-l-lg p-2`}
        >
          <IconButton
            backgroundColor="transparent"
            icon="ci:notification"
            onClick={() => router.push("/notifikasi")}
          />
          {/* <p className="text-sm">Notifikasi</p> */}
        </div>
      </div>
    </div>
  );
}
