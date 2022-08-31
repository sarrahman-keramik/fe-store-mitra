import Image from "next/image";
import { useState } from "react";
import { FileBase64 } from "../../../utils";
import Iconify from "../Iconify";

export default function ImageInput(props: { isMulti?: boolean }) {
  const [images, setImages] = useState([] as any);

  const handleFile = (file: any) => {
    if (props.isMulti) {
      const imgs = images;
      imgs.push(file[0]);
      setImages(imgs);
    } else {
      setImages(file);
    }
  };

  return (
    <>
      <FileBase64
        files={(f) => handleFile(f)}
        id="uploadImg"
        multiple={props.isMulti || false}
      />
      <div
        onClick={() => {
          const upload = document.getElementById(
            "uploadImg"
          ) as HTMLInputElement;
          upload.click();
        }}
        className="flex items-center cursor-pointer w-fit p-2"
      >
        <Iconify icon="bxs:image-add" color="teal" size="5xl" />
        <p className="font-semibold text-teal-800">Upload Foto</p>
      </div>
      <div className="flex items-center flex-wrap">
        {images.map((image: any, i: number) => (
          <div key={i} className="rounded border p-1 border-teal-100 w-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img key={i} src={image.base64} alt={image.name} width={'100%'} height={'100%'} />
          </div>
        ))}
      </div>
    </>
  );
}
