import { useRouter } from "next/router";
import { IconButton, Typograhpy } from "../../components/atoms";

export default function AppBar() {
  const router = useRouter();
  return (
    <div className="w-full text-center bg-teal-800 p-5 sm:flex justify-between items-center px-10 select-none">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <Typograhpy
          child={`${process.env.NEXT_PUBLIC_NAMEAPP}`}
          variant="xl"
          other={"font-extrabold text-white capitalize"}
        />
      </div>
      <div className="sm:flex hidden items-center">
        <IconButton
          other={"mr-2"}
          backgroundColor="transparent"
          icon="ci:heart-fill"
          onClick={() => router.push("/tersimpan")}
        />
        <IconButton
          other={"mr-2"}
          backgroundColor="transparent"
          icon="bxs:cart"
          onClick={() => router.push("/keranjang")}
        />
        <IconButton
          other={"mr-2"}
          backgroundColor="transparent"
          icon="ci:notification"
          onClick={() => router.push("/notifikasi")}
        />
      </div>
    </div>
  );
}
