import { useRouter } from "next/router";
import { IconButton } from "../../components/atoms";

export default function BottomBar() {
  const router = useRouter();
  return (
    <div className="fixed w-full sm:hidden bg-teal-800 bottom-0 text-white py-2">
      <div className="flex justify-between px-2">
        <IconButton
          backgroundColor="transparent"
          icon="ant-design:home-filled"
          onClick={() => router.push("/")}
        />
        <IconButton
          backgroundColor="transparent"
          icon="ci:heart-fill"
          onClick={() => router.push("/tersimpan")}
        />
        <IconButton
          backgroundColor="transparent"
          icon="bxs:cart"
          onClick={() => router.push("/keranjang")}
        />
        <IconButton
          backgroundColor="transparent"
          icon="ci:notification"
          onClick={() => router.push("/notifikasi")}
        />
      </div>
    </div>
  );
}
