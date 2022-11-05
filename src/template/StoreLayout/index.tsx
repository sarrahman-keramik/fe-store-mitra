import Head from "next/head";
import { useRouter } from "next/router";
import { AppBar, BottomBar} from "../../layout";

export default function StoreLayout(props: {
  main: any;
  title: string;
  noSearchable?: boolean;
}) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <AppBar />
      <div className="p-1 md:p-8 w-full mb-20">{props.main}</div>
      <div className={`${router.pathname === "/keranjang" ? "hidden" : ""}`}>
        <BottomBar />
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
