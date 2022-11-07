import Image from "next/image";
import banner from "../../../public/promo-banner.jpg";

export default function Banner() {
  return (
    <div className="flex my-4 justify-center items-center">
      <Image src={banner} alt="banner" />
    </div>
  );
}
