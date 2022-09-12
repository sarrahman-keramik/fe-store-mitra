import {
  KalkulatorKeramik,
  ProductDetailCard,
  SimulasiKeramik,
} from "../../../src/layout";
import { StoreLayout } from "../../../src/template";
import { SwiperProduct } from "../../../src/components/organisms";

export default function DetailBarang() {
  return (
    <StoreLayout
      title="Detail Barang"
      noSearchable={true}
      main={
        <div>
          <ProductDetailCard />
          <div className="flex flex-col md:flex-row">
            <SimulasiKeramik />
            <KalkulatorKeramik />
          </div>
          <SwiperProduct />
        </div>
      }
    />
  );
}
