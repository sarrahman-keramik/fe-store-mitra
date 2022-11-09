import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AppBar, BottomBar } from "../../layout";

export default function StoreLayout(props: {
  main: any;
  title: string;
  onlySearchable?: boolean;
}) {
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
      <Head>
        <title>{props.title}</title>
      </Head>
      <AppBar isLogin={isLogin} onlySearchable={props.onlySearchable} />
      <div className="p-1 md:p-8 w-full mb-20 md:mb-5">{props.main}</div>
      <div className={`${router.pathname === "/keranjang" ? "hidden" : ""}`}>
        <BottomBar isLogin={isLogin} />
      </div>
      <div
        className={`w-full cursor-pointer ${
          router.pathname === "/keranjang" ? "fixed" : "hidden"
        } bg-orange-500 text-white z-20 text-center py-2 font-bold text-lg bottom-0 hover:bg-orange-400`}
      >
        Pesan
      </div>
    </div>
  );
}
