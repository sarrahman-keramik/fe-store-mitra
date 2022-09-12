import { Button, Textfield } from "../../components/atoms";

export default function KalkulatorKeramik() {
  return (
    <div className="flex shadow-lg bg-white m-2 mt-4 flex-col rounded-xl md:rounded-3xl flex-1">
      <div className="p-3">
        <h2 className="font-semibold text-lg capitalize">kalkulator keramik</h2>
        <div className="mt-3">
          <Textfield label="Panjang" type="number" />
          <Textfield label="Panjang" type="number" />
          <Textfield label="Panjang" type="number" />
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
    </div>
  );
}
