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
          <div className="flex shadow-lg bg-white m-2 mt-4 flex-col rounded-xl md:rounded-3xl flex-1">
            <div className="p-2 md:p-4 flex flex-col">
              <h2 className="font-semibold text-lg capitalize">Ongkos Kirim</h2>
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 text-center my-2">
                  <p className="cursor-pointer text-blue-500 font-medium">Gunakan Lokasi Saat Ini</p>
                  <hr />
                </div>
                <div className="flex-1">result</div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
