/* eslint-disable @next/next/no-img-element */
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IconButton } from "../../src/components/atoms";
import { SectionLayout, StoreLayout } from "../../src/template";

export default function Profile() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [profile, setProfile] = useState({} as any);

  useEffect(() => {
    const call = async () => {
      const getToken = await fetch("/api/token").then((res) => res.json());
      const access_token = getToken.accessToken;
      if (access_token) {
        setIsLogin(true);
        setProfile(jwt_decode(access_token));
      }
    };
    call();
  }, []);

  return (
    <StoreLayout
      title={"Profile"}
      onlySearchable={true}
      main={
        <div>
          <SectionLayout
            title={"Profile"}
            main={
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${isLogin ? "mr-3 md:mr-5" : "hidden"}`}>
                    <img
                      src={`https://placeimg.com/150/150/nature`}
                      className="rounded-full"
                      alt="gambar"
                      height={60}
                      width={60}
                    />
                  </div>
                  <div className={`${isLogin ? "hidden" : "mr-3 md:mr-5"}`}>
                    <IconButton
                      icon="ic:baseline-account-circle"
                      backgroundColor="transparent"
                      color="teal"
                      size="5xl"
                    />
                  </div>
                  <div className="flex-1">
                    <div className={`${isLogin ? "" : "hidden"}`}>
                      <h1 className="font-bold text-lg">{profile.username}</h1>
                      <h1 className="text-sm">{profile.no_telp}</h1>
                    </div>
                    <div
                      className={`${
                        isLogin
                          ? "hidden"
                          : "flex px-4 font-semibold items-center"
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
                        className="ml-2 cursor-pointer rounded p-1 hover:border"
                      >
                        Daftar
                      </p>
                    </div>
                  </div>
                </div>
                <IconButton
                  icon="el:edit"
                  backgroundColor="transparent"
                  color="teal"
                />
              </div>
            }
          />
          <SectionLayout
            title={"Halaman"}
            main={
              <div className="w-full">
                <div className="flex border-b items-center cursor-pointer py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-sky-50">
                  <IconButton
                    icon="icon-park-solid:transaction-order"
                    backgroundColor="transparent"
                    color="teal"
                  />
                  <p>Pesanan Saya</p>
                </div>

                <div className="flex items-center cursor-pointer py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-sky-50">
                  <IconButton
                    icon="ci:heart-fill"
                    backgroundColor="transparent"
                    color="teal"
                  />
                  <p>Favorit Saya</p>
                </div>
              </div>
            }
          />
          <SectionLayout
            title={"Lainnnya"}
            main={
              <div className="w-full">
                <div className="flex border-b items-center cursor-pointer py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-sky-50">
                  <IconButton
                    icon="bxs:help-circle"
                    backgroundColor="transparent"
                    color="teal"
                  />
                  <p>Pusat Bantuan</p>
                </div>

                <div className="flex items-center cursor-pointer py-3 text-sm text-red-600 capitalize transition-colors duration-200 transform hover:bg-red-50">
                  <IconButton
                    icon="fluent:sign-out-20-filled"
                    backgroundColor="transparent"
                    color="red"
                  />
                  <p>Keluar</p>
                </div>
              </div>
            }
          />
          <p className="text-center text-xs text-gray-600">App Version 1.0</p>
        </div>
      }
    />
  );
}
