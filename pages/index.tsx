import { useRouter } from "next/router";
import { CardProduct } from "../src/components/molecules";
import { Banner, MenuIcon, Promo } from "../src/layout";
import { SectionLayout, StoreLayout } from "../src/template";

function Home() {
  const router = useRouter();
  return (
    <StoreLayout
      title={`Online Store - ${process.env.NEXT_PUBLIC_NAMEAPP}`}
      main={
        <div>
          <Banner />
          <MenuIcon />
          <Promo />
          <SectionLayout
            title="Rekomendasi"
            main={
              <div className="py-3 flex flex-wrap w-full justify-evenly">
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
                <CardProduct onClick={() => router.push("/barang/kad")} />
              </div>
            }
          />
        </div>
      }
    />
  );
}

export default Home;
