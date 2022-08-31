import { CardProduct } from "../src/components/molecules";
import { AppBar } from "../src/layout";

export default function Home() {
  return (
    <div>
      <AppBar />
      <div className="py-3 flex flex-wrap w-full last:justify-center">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
}
