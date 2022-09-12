import { Iconify, Typograhpy } from "../../components/atoms";

export default function AppBar() {
  return (
    <div className="w-full text-center bg-teal-800 p-5 sm:flex justify-between items-center px-10 select-none">
      <Typograhpy
        child={`${process.env.NEXT_PUBLIC_NAMEAPP}`}
        variant="xl"
        other={"font-extrabold text-white capitalize"}
      />
      <div className="sm:flex hidden items-center">
        <Iconify other={"mr-10"} size="2xl" icon="fa:search" />
        <Iconify other={"mr-10"} size="2xl" icon="fa:search" />
        <Iconify size="2xl" icon="fa:search" />
      </div>
    </div>
  );
}
