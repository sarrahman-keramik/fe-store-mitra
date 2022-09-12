import Head from "next/head";
import { IconButton, Textfield } from "../../components/atoms";
import { AppBar, BottomBar } from "../../layout";

export default function StoreLayout(props: {
  main: any;
  title: string;
  noSearchable?: boolean;
}) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <AppBar />
      <div
        className={`${
          props.noSearchable ? "hidden" : "flex"
        } justify-center items-center w-full`}
      >
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
      <div className="p-1 w-full">{props.main}</div>
      <BottomBar />
    </div>
  );
}
