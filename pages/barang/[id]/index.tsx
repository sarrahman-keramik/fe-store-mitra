/* eslint-disable @next/next/no-img-element */
import { ProductDetailCard } from "../../../src/layout";
import { StoreLayout } from "../../../src/template";

export default function DetailBarang() {
  return (
    <StoreLayout
      title="Detail Barang"
      noSearchable={true}
      main={
        <div>
          <ProductDetailCard />
          <div className="md:flex-row flex shadow-lg bg-white m-2 mt-4 flex-col rounded-xl md:rounded-3xl">
            simulasi keramik
          </div>
          <div className="md:flex-row flex shadow-lg bg-white m-2 mt-4 flex-col rounded-xl md:rounded-3xl">
            kalkulator keramik + simulasi biaya
          </div>
          <div className="md:flex-row flex shadow-lg bg-white m-2 mt-4 flex-col rounded-xl md:rounded-3xl">
            cek ongkir
          </div>
          <div className="md:flex-row flex shadow-lg bg-white m-2 mt-4 flex-col rounded-xl md:rounded-3xl">
            rekomendasi produk serupa
          </div>
        </div>
      }
    />
  );
}
