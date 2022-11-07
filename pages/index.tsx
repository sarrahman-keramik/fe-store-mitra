import { useRouter } from "next/router";
import { CardProduct } from "../src/components/molecules";
import { Banner, MenuIcon, Promo, Footer } from "../src/layout";
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
              <div className="py-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
         <Footer />
        </div>
      }
    />
  );
}

export default Home;
