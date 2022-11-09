/* eslint-disable @next/next/no-img-element */
import { IconButton } from "../../src/components/atoms";
import { SectionLayout, StoreLayout } from "../../src/template";

export default function Profile() {
  return (
    <StoreLayout
      title={"Profile"}
      onlySearchable={true}
      main={
        <div>
          <SectionLayout
            title={"Profile"}
            main={
              <div className="flex justify-between">
                <div className="flex">
                  <div className="mr-3">
                    <img
                      src={`https://placeimg.com/150/150/nature`}
                      className="rounded-full"
                      alt="gambar"
                      height={60}
                      width={60}
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="font-bold text-lg">Sarrahman</h1>
                    <h1 className="text-sm">081249363040</h1>
                  </div>
                </div>
                <IconButton
                  icon="el:edit"
                  backgroundColor="transparent"
                  color="teal"
                />
              </div>
            }
          />
          <SectionLayout
            title={"Halaman"}
            main={
              <div className="w-full">
                <div className="flex items-center cursor-pointer py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-sky-50">
                  <IconButton
                    icon="icon-park-solid:transaction-order"
                    backgroundColor="transparent"
                    color="teal"
                    size="sm"
                  />
                  <p>Pesanan Saya</p>
                </div>

                <div className="flex items-center cursor-pointer py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-sky-50">
                  <IconButton
                    icon="ci:heart-fill"
                    backgroundColor="transparent"
                    color="teal"
                    size="sm"
                  />
                  <p>Favorit Saya</p>
                </div>
              </div>
            }
          />
          <SectionLayout
            title={"Lainnnya"}
            main={
              <div className="w-full">
                <div className="flex items-center cursor-pointer py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-sky-50">
                  <IconButton
                    icon="bxs:help-circle"
                    backgroundColor="transparent"
                    color="teal"
                    size="sm"
                  />
                  <p>Pusat Bantuan</p>
                </div>

                <div className="flex items-center cursor-pointer py-3 text-sm text-red-600 capitalize transition-colors duration-200 transform hover:bg-sky-50">
                  <IconButton
                    icon="fluent:sign-out-20-filled"
                    backgroundColor="transparent"
                    color="red"
                    size="sm"
                  />
                  <p>Pusat Bantuan</p>
                </div>
              </div>
            }
          />
          <p className="text-center text-sm text-gray-600">App Version 1.0</p>
        </div>
      }
    />
  );
}
