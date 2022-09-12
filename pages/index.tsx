import { IconButton, Textfield } from "../src/components/atoms";
import { CardProduct } from "../src/components/molecules";
import { AppBar, BottomBar } from "../src/layout";

export default function Home() {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center items-center w-full">
        <div className="w-10/12 flex my-4">
          <Textfield
            other="w-full mr-2"
            placeholder="Cari Sesuatu ..."
            type="search"
          />
          <IconButton
            backgroundColor="transparent"
            color="teal"
            icon="fa:search"
          />
        </div>
      </div>
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
      <BottomBar />
    </div>
  );
}
