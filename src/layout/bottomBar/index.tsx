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
          } hover:bg-teal-100 flex-1 p-2`}
          onClick={() => router.push("/")}
        >
          <IconButton
            backgroundColor="transparent"
            icon="ant-design:home-filled"
            color="teal"
          />
        </div>
        <div
          className={`${
            props.isLogin ? "block" : "hidden"
          } text-center cursor-pointer ${
            router.pathname === "/tersimpan" ? "bg-teal-100" : ""
          } hover:bg-teal-100 flex-1 p-2`}
          onClick={() => router.push("/chat")}
        >
          <IconButton
            backgroundColor="transparent"
            icon="bi:chat-text-fill"
            color="teal"
          />
        </div>
        <div
          className={`${
            props.isLogin ? "block" : "hidden"
          } text-center cursor-pointer ${
            router.pathname === "/keranjang" ? "bg-teal-100" : ""
          } hover:bg-teal-100 flex-1 p-2`}
          onClick={() => router.push("/keranjang")}
        >
          <IconButton
            backgroundColor="transparent"
            icon="bxs:cart"
            color="teal"
          />
        </div>
        <div
          className={`${
            router.pathname === "/profile" ? "bg-teal-100" : ""
          } text-center cursor-pointer hover:bg-teal-100 flex-1 p-2`}
          onClick={() => router.push("/profile")}
        >
          <IconButton
            backgroundColor="transparent"
            color="teal"
            icon="ic:baseline-account-circle"
          />
        </div>
      </div>
    </div>
  );
}
