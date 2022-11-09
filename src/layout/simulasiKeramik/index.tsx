import { SectionLayout } from "../../template";

/* eslint-disable @next/next/no-img-element */
export default function SimulasiKeramik() {
  return (
    <SectionLayout
      other="flex shadow-lg bg-white m-2 mt-4 flex-col rounded-xl md:rounded-3xl flex-1"
      title="Simulasi Pattern"
      main={
        <div>
          <div className="grid w-full grid-cols-3 gap-1 bg-gray-400">
            <ImagePattern />
            <ImagePattern />
            <ImagePattern />
            <ImagePattern />
            <ImagePattern />
            <ImagePattern />
          </div>
          <p className="px-2 pb-2 md:px-5 md:pb-3 text-sm md:text-base">
            * Click untuk memutar gambar *
          </p>
        </div>
      }
    />
  );
}

const ImagePattern = () => {
  return (
    <img
      src={`https://placeimg.com/640/640/nature`}
      onClick={(e) => {
        // rotate image 90 degree
        const img = e.target as HTMLImageElement;
        const deg = img.style.transform
          ? parseInt(
              img.style.transform.replace("rotate(", "").replace("deg)", "")
            )
          : 0;
        img.style.transform = `rotate(${deg + 90}deg)`;
      }}
      alt="produk"
      width={300}
      height={300}
    />
  );
};
