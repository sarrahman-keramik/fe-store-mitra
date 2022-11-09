import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IconButton, Textfield, Typograhpy } from "../../components/atoms";

export default function AppBar() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const call = async () => {
      const getToken = await fetch("/api/token").then((res) => res.json());
      const access_token = getToken.accessToken;
      if (access_token) {
        setIsLogin(true);
      }
    };
    call();
  }, []);

  return (
    <div>
      <div></div>
      <div className="w-full text-center bg-teal-800 p-5 sm:flex justify-between items-center px-10 select-none">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Typograhpy
            child={`${process.env.NEXT_PUBLIC_NAMEAPP}`}
            variant="xl"
            other={"font-extrabold text-white capitalize"}
          />
        </div>
        <div className="w-full sm:mx-4 md:mx-12 flex my-4">
          <Textfield
            other="w-full mr-2 border-none shadow-gray-100 shadow"
            placeholder="Cari Sesuatu ..."
            type="search"
          />
          <IconButton backgroundColor="teal" color="white" icon="fa:search" />
        </div>
        <div className={`${isLogin ? "hidden md:flex items-center" : "hidden"}`}>
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
        <div
          className={`${
            isLogin
              ? "hidden"
              : "hidden md:flex px-4 font-semibold text-white items-center"
          }`}
        >
          <p
            className="mr-2 cursor-pointer rounded p-1 hover:border"
            onClick={() => router.push("/login")}
          >
            Masuk
          </p>
          <p>|</p>
          <p
            onClick={() => router.push("/daftar")}
            className="ml-2 cursor-pointer rounded p-1 hover:bg-white hover:text-teal-800"
          >
            Daftar
          </p>
        </div>
      </div>
    </div>
  );
}
