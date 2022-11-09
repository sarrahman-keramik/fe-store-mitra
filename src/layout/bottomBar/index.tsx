import { useRouter } from "next/router";
import { IconButton } from "../../components/atoms";

export default function BottomBar(props: { isLogin: boolean }) {
  const router = useRouter();
  return (
    <div className="fixed w-full z-20 sm:hidden bg-white border-t-2 border-gray-200 bottom-0 text-white">
      <div className="flex justify-around">
        <div
          className={`text-center cursor-pointer ${
            router.pathname === "/" ? "bg-teal-100" : ""
          } hover:bg-teal-100 rounded-lg p-2`}
        >
          <IconButton
            backgroundColor="transparent"
            icon="ant-design:home-filled"
            color="teal"
            onClick={() => router.push("/")}
          />
        </div>
        <div
          className={`${
            props.isLogin ? "block" : "hidden"
          } text-center cursor-pointer ${
            router.pathname === "/tersimpan" ? "bg-teal-100" : ""
          } hover:bg-teal-100 p-2`}
        >
          <IconButton
            backgroundColor="transparent"
            icon="ci:heart-fill"
            color="teal"
            onClick={() => router.push("/tersimpan")}
          />
        </div>
        <div
          className={`${
            props.isLogin ? "block" : "hidden"
          } text-center cursor-pointer ${
            router.pathname === "/keranjang" ? "bg-teal-100" : ""
          } hover:bg-teal-100 p-2`}
        >
          <IconButton
            backgroundColor="transparent"
            icon="bxs:cart"
            color="teal"
            onClick={() => router.push("/keranjang")}
          />
        </div>
        <div
          className={`${
            router.pathname === "/profile" ? "bg-teal-100" : ""
          } text-center cursor-pointer hover:bg-teal-100 rounded-lg p-2`}
        >
          <IconButton
            backgroundColor="transparent"
            color="teal"
            icon="ic:baseline-account-circle"
            onClick={() => router.push("/profile")}
          />
        </div>
      </div>
    </div>
  );
}
