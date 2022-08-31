import { Button } from "../../../atoms";

/* eslint-disable @next/next/no-img-element */
export default function CardProduct() {
  return (
    <div className="w-full max-w-sm bg-white shadow-teal-100 hover:shadow-teal-300 rounded-md shadow-md m-2">
      <img
        className="p-3 rounded-t-md"
        src="https://placeimg.com/640/480/any"
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Nama Keramik - 40 x 40
        </h5>
        <p className="text-teal-800 font-semibold">Categorinya</p>
        <div className="flex justify-between items-center mt-5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            Rp 49k
          </span>
          <Button icon="heroicons:shopping-cart-20-solid" child={"Tambah"} />
        </div>
      </div>
    </div>
  );
}
