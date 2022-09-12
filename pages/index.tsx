import { CardProduct } from "../src/components/molecules";
import { StoreLayout } from "../src/template";

export default function Home() {
  return (
    <StoreLayout
      title={`Online Store - ${process.env.NEXT_PUBLIC_NAMEAPP}`}
      main={
        <div className="py-3 flex flex-wrap w-full justify-evenly">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      }
    />
  );
}
