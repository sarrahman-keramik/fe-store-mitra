import { useRouter } from "next/router";
import { IconButton, Textfield, Typograhpy } from "../../components/atoms";

export default function AppBar(props: {
  isLogin: boolean;
  onlySearchable?: boolean;
}) {
  const router = useRouter();

  return (
    <div>
      <div
        className={`w-full text-center bg-teal-800 p-2 ${
          props.onlySearchable ? "flex" : ""
        } sm:flex justify-between items-center px-2 md:px-10 select-none`}
      >
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Typograhpy
            child={`${process.env.NEXT_PUBLIC_NAMEAPP}`}
            variant="xl"
            other={`font-extrabold ${
              props.onlySearchable ? "hidden" : ""
            } text-white capitalize`}
          />
          <IconButton
            other={`mr-2 ${props.onlySearchable ? "" : "hidden"}`}
            backgroundColor="transparent"
            icon="eva:arrow-back-fill"
            onClick={() => router.back()}
          />
        </div>
        <div className="w-full sm:mx-1 md:mx-12 flex my-4">
          <Textfield
            other="w-full mr-2 border-none"
            placeholder="Cari Sesuatu ..."
            type="search"
          />
          <IconButton size="sm" backgroundColor="teal" color="white" icon="fa:search" />
        </div>
        <div
          className={`${
            props.isLogin ? "hidden md:flex items-center" : "hidden"
          }`}
        >
          <IconButton
            other={"mr-2"}
            backgroundColor="transparent"
            icon="bi:chat-text-fill"
            onClick={() => router.push("/chat")}
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
            icon="ic:baseline-account-circle"
            onClick={() => router.push("/profile")}
          />
        </div>
        <div
          className={`${
            props.isLogin
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
