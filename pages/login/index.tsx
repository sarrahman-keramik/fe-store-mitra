import { useRouter } from "next/router";
import Lottie from "react-lottie-player";
import { Button, IconButton, Textfield } from "../../src/components/atoms";
import construction from "../../public/construction.json";

export default function Masuk() {
  const router = useRouter();
  return (
    <div>
      <div className="flex shadow justify-between bg-white p-3 items-center px-5">
        <div>
          <h2 className="font-bold text-lg md:text-2xl text-teal-800">
            Sarrahman
          </h2>
        </div>
        <div>
          <div className="sm:flex hidden items-center">
            <h3
              onClick={() => router.push("/")}
              className="text-teal-800 cursor-pointer"
            >
              Dashbord Utama |
            </h3>
            <IconButton
              other={"mr-2"}
              backgroundColor="transparent"
              color="teal"
              icon="brandico:facebook-rect"
              onClick={() => router.push("/tersimpan")}
            />
            <IconButton
              other={"mr-2"}
              color="teal"
              backgroundColor="transparent"
              icon="bxl:instagram-alt"
              onClick={() => router.push("/keranjang")}
            />
            <IconButton
              other={"mr-2"}
              backgroundColor="transparent"
              color="teal"
              icon="bxl:medium-square"
              onClick={() => router.push("/notifikasi")}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center h-screen">
        <div className="flex-1 hidden md:flex md:flex-col">
          <h2 className="text-center font-bold text-lg text-teal-800">
            Bangun Rumah impian Anda Bersama Kami
          </h2>
          <Lottie
            loop
            animationData={construction}
            play
            style={{ width: "100%", height: "300px" }}
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="border p-8 md:p14 bg-white rounded shadow w-fit">
            <h2 className="text-center text-teal-800 font-bold text-lg">
              Login
            </h2>
            <Textfield label="Username" other="my-3" />
            <Textfield label="Password" other="my-3" type="Password" />
            <Button child="Masuk" other="w-full mt-3" />
            <p className="text-sm text-center mt-5">
              Belum Punya Akun ?{" "}
              <span
                onClick={() => router.push("/daftar")}
                className="cursor-pointer text-teal-800 font-semibold"
              >
                Daftar
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
