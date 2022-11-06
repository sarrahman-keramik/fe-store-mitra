import { Button, Textfield } from "../../components/atoms";
import { SectionLayout } from "../../template";

export default function KalkulatorKeramik() {
  return (
    <SectionLayout
      title="Kalkulator Keramik"
      other="flex shadow-lg bg-white m-2 mt-4 flex-col rounded-md md:rounded-xl flex-1"
      main={
        <div>
          <div className="mt-3">
            <Textfield other="mb-2" label="Panjang" type="number" />
            <Textfield other="mb-2" label="Lebar" type="number" />
            <Textfield other="mb-2" label="Tinggi" type="number" />
            <Button other={"w-full mt-2"} child="Hitung" />
          </div>
          <div className="mt-5 md:mt-16 flex flex-col md:flex-row">
            <div className="flex-1 flex justify-center items-center flex-col mb-5 md:mb-0">
              <h1 className="font-semibold text-xl">Kebutuhan: </h1>
              <h1 className="font-bold text-2xl">49 Dus</h1>
            </div>
            <div className="flex-1 flex justify-center items-center flex-col">
              <h1 className="font-semibold text-xl">Estimasi: </h1>
              <h1 className="font-bold text-2xl">Rp 2.334.000</h1>
            </div>
          </div>
        </div>
      }
    />
  );
}
