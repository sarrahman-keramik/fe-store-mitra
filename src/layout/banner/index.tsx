import Image from "next/image";
import banner from "../../../public/promo-banner.jpg";

export default function Banner() {
  return (
    <div className="flex my-4">
      <div className="md:flex-row flex flex-col w-full">
        <div className="flex flex-1 justify-end">
          <div>
            <div className="m-2">
              <Image src={banner} alt="banner" />
            </div>
            <div className="m-2">
              <Image src={banner} alt="banner" />
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div>
            <div className="m-2">
              <Image src={banner} alt="banner" />
            </div>
            <div className="m-2">
              <Image src={banner} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
