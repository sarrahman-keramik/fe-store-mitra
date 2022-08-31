import { Iconify, Typograhpy } from "../../components/atoms";

export default function AppBar() {
  return (
    <div className="w-full bg-teal-800 p-5 flex justify-between items-center px-10">
      <Iconify icon="dashicons:menu-alt3" />
      <Typograhpy
        child={`${process.env.NEXT_PUBLIC_NAMEAPP}`}
        variant="2xl"
        other={"font-extrabold text-white"}
      />
      <div className="flex items-center">
        <Iconify other={"mr-10"} size="2xl" icon="fa:search" />
        <Iconify other={"mr-10"} size="2xl" icon="ci:notification" />
        <Iconify size="2xl" icon="heroicons:shopping-cart-20-solid" />
      </div>
    </div>
  );
}
