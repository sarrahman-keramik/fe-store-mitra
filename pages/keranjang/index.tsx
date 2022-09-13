import { ProductCart } from "../../src/components/molecules/cards";
import { StoreLayout } from "../../src/template";

export default function Keranjang() {
  return (
    <StoreLayout
      title="Keranjang"
      noSearchable={true}
      main={
        <div className="py-3 flex flex-wrap w-full justify-evenly">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      }
    />
  );
}
