import pipe from "../../../public/pipe.png";
import iron from "../../../public/iron-bar.png";
import tiles from "../../../public/tiles.png";
import beam from "../../../public/beam.png";
import roof from "../../../public/roof.png";
import wood from "../../../public/wood.png";
import Image from "next/image";

export default function MenuIcon() {
  return (
    <div className="w-full">
      <div className="border bg-white p-4">Kategori</div>
      <div className="bg-white grid grid-cols-3 gap-5">
        <Menu image={pipe} title="Pipa Pvc" />
        <Menu image={iron} title="Besi Beton" />
        <Menu image={tiles} title="Granit & Keramik" />
        <Menu image={beam} title="Baja Ringan" />
        <Menu image={roof} title="Atap" />
        <Menu image={wood} title="Plywood" />
      </div>
    </div>
  );
}

function Menu(props: { title: string; image: any }) {
  return (
    <div className="w-full flex justify-center p-2">
      <div className="text-center cursor-pointer hover:shadow p-2 rounded">
        <Image src={props.image} alt="pipe" width={75} height={75} />
        <h3 className="text-center font-bold text-teal-800">{props.title}</h3>
      </div>
    </div>
  );
}
