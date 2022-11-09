/* eslint-disable @next/next/no-img-element */
import { Button } from "../../src/components/atoms";
import { ProductCart } from "../../src/components/molecules/cards";
import { SectionLayout, StoreLayout } from "../../src/template";

export default function Keranjang() {
  return (
    <StoreLayout
      title="Keranjang"
      onlySearchable={true}
      main={
        <div>
          <SectionLayout
            title="Keranjang"
            main={
              <div className="py-1 flex flex-wrap w-full justify-evenly">
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
              </div>
            }
          />
          <SectionLayout
            title="Rincian"
            main={
              <div className="">
                <div className="flex border-b items-center py-3 text-sm md:text-base text-gray-600">
                  <p>
                    <span className="font-bold">Qty</span>: 10 Items
                  </p>
                </div>
                <div className="flex items-center py-3 text-sm md:text-base text-gray-600">
                  <p>
                    <span className="font-bold">Total</span>: Rp 10.000.000
                  </p>
                </div>
              </div>
            }
          />
          <SectionLayout
            title="Pembayaran"
            main={
              <ul className="grid gap-6 w-full md:grid-cols-2">
                <li>
                  <input
                    type="checkbox"
                    id="react-option"
                    value=""
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="react-option"
                    className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-teal-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <img
                        className="mb-2 w-7 h-7 text-sky-500"
                        src={Bca}
                        alt=""
                      />
                      <div className="w-full text-lg font-semibold">
                        Bank BCA
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="flowbite-option"
                    value=""
                    className="hidden peer"
                  />
                  <label
                    htmlFor="flowbite-option"
                    className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-teal-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="block">
                      <img
                        className="mb-2 w-7 h-7 text-sky-500"
                        src={mandiri}
                        alt=""
                      />
                      <div className="w-full text-lg font-semibold">
                        Bank Mandiri
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            }
          />
          <Button child="Buat Pesanan" other="w-full" />
        </div>
      }
    />
  );
}

const Bca =
  "data:image/jpeg;base64,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";

const mandiri =
  "data:image/png;base64,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";
