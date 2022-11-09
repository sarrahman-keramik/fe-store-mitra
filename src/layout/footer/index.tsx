import { IconButton, Textfield } from "../../components/atoms";

export default function Footer() {
  return (
    <div className="bg-gray-50 p-2">
      <div className="flex md:flex-row flex-col">
        <div className="flex justify-center flex-1 flex-col p-2 md:p-4 mb-5 md:mb-0">
          <h2 className="font-bold text-teal-800 text-base md:text-lg text-center">
            Sarrahman Bangunan
          </h2>
          <p className="md:mx-20 text-sm md:text-base text-center">
            Misi kami adalah menyediakan produk bahan bangunan dengan harga
            terjangkau kepada seluruh pelanggan yang mencakup wilayah kalimantan
            timur
          </p>
        </div>
        <div className="flex justify-center flex-1">
          <div className="flex items-center">
            <Textfield
              label="Berlanggan Promo (WA)"
              placeholder="08123456789"
              type="number"
            />
            <IconButton
              other={"mt-4 ml-2"}
              backgroundColor="green"
              size="xl"
              icon="akar-icons:whatsapp-fill"
            />
          </div>
        </div>
      </div>
      <div className="text-black border-b border-gray-200 mt-7"></div>
      <p className="text-center text-xs md:text-base text-gray-500">
        Copyright 2022 Sarrahman Bangunan{" "}
      </p>
    </div>
  );
}
