import { useRouter } from "next/router";
import { CardProduct } from "../src/components/molecules";
import { StoreLayout } from "../src/template";

function Home() {
  const router = useRouter();
  return (
    <StoreLayout
      title={`Online Store - ${process.env.NEXT_PUBLIC_NAMEAPP}`}
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
  );
}

export default Home;
