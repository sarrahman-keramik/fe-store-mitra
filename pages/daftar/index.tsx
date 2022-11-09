import { useRouter } from "next/router";
import Lottie from "react-lottie-player";
import { Button, IconButton } from "../../src/components/atoms";
import construction from "../../public/construction.json";
import { TextfieldGroup } from "../../src/components/organisms";
import { useState } from "react";
import { Loading, Notify } from "notiflix";
import { ValidationSubmit } from "../../src/functions";
import { connect } from "react-redux";
import { RegisterApi } from "../../src/redux/actions/auth";

const form = [
  {
    label: "Nama Lengkap",
    nama: "nama_pelanggan",
  },
  {
    label: "Nomor Telpon",
    nama: "no_telp",
    type: "number",
  },
  {
    label: "Username",
    nama: "username",
  },
  {
    label: "Password",
    nama: "password",
    type: "password",
  },
];

function Daftar(props: { daftar: (data: any) => Promise<any> }) {
  const router = useRouter();
  const [data, setData] = useState({} as any);
  const [checkForm, setCheckForm] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    Loading.dots("loading...", {
      svgColor: "#1e40af",
      backgroundColor: "rgba(0, 0, 100, 0.5)",
    });
    const check = ValidationSubmit(form, data);
    setCheckForm(!check);
    if (check) {
      props
        .daftar(data)
        .then((res) => {
          Loading.remove();
          window.location.href = "/login";
        })
        .catch((err) => {
          Loading.remove();
          if (err.response.data) {
            Notify.failure(err.response.data.message, {
              position: "right-bottom",
            });
            setError(err.response.data.errors);
          }
        });
    }
  };

  return (
    <div>
      <div className="flex shadow justify-between bg-white p-3 items-center px-5">
        <div className={"flex items-center"}>
          <IconButton
            other={`mr-2 `}
            color="teal"
            backgroundColor="transparent"
            icon="eva:arrow-back-fill"
            onClick={() => router.back()}
          />
          <h2 className="font-bold text-lg md:text-2xl text-teal-800">
            {`${process.env.NEXT_PUBLIC_NAMEAPP}`}
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
            Bangun Rumah impian Anda Bersama{" "}
            {`${process.env.NEXT_PUBLIC_NAMEAPP}`}
          </h2>
          <Lottie
            loop
            animationData={construction}
            play
            style={{ width: "100%", height: "300px" }}
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="border p-8 md:p14 bg-white rounded shadow w-fit"
          >
            <h2 className="text-center text-teal-800 font-bold text-lg">
              Daftar
            </h2>
            <TextfieldGroup
              setError={setError}
              error={error}
              showError={checkForm}
              form={form}
              setData={setData}
              data={data}
            />
            <Button type="submit" child="Daftar" other="w-full mt-3" />
            <p className="text-sm text-center mt-5">
              Sudah Punya Akun ?{" "}
              <span
                onClick={() => router.push("/login")}
                className="cursor-pointer text-teal-800 font-semibold"
              >
                Masuk
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

const action = (dispatch: any) => ({
  daftar: (data: any) => dispatch(RegisterApi(data)),
});

export default connect(null, action)(Daftar);
