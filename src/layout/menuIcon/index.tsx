import pipe from "../../../public/pipe.png";
import iron from "../../../public/iron-bar.png";
import tiles from "../../../public/tiles.png";
import beam from "../../../public/beam.png";
import roof from "../../../public/roof.png";
import wood from "../../../public/wood.png";
import Image from "next/image";
import { SectionLayout } from "../../template";

export default function MenuIcon() {
  return (
    <SectionLayout
    title="Kategori"
      main={
        <div className="grid grid-cols-3 gap-5">
          <Menu image={beam} title="Baja Ringan" />
          <Menu image={roof} title="Atap" />
          <Menu image={tiles} title="Granit & Keramik" />
          <Menu image={pipe} title="Pipa Pvc" />
          <Menu image={iron} title="Besi Beton" />
          <Menu image={wood} title="Plywood" />
        </div>
      }
    />
  );
}

function Menu(props: { title: string; image: any }) {
  return (
    <div className="w-full flex justify-center p-2">
      <div className="text-center cursor-pointer hover:shadow p-2 rounded">
        {/* It's a tailwindcss class. It's hiding the div on md screen and showing it on md screen.  */}
        <div className="hidden md:block">
          <Image src={props.image} alt="pipe" width={100} height={100} />
        </div>
        <div className="md:hidden">
          <Image src={props.image} alt="pipe" width={75} height={75} />
        </div>
        <h3 className="text-center font-bold text-teal-800">{props.title}</h3>
      </div>
    </div>
  );
}
