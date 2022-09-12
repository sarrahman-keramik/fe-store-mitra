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
        </div>
      }
    />
  );
}
