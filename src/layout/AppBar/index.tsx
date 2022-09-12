import { useRouter } from "next/router";
import { Iconify, Typograhpy } from "../../components/atoms";

export default function AppBar() {
  const router = useRouter();
  return (
    <div className="w-full text-center bg-teal-800 p-5 sm:flex justify-between items-center px-10 select-none">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <Typograhpy
          child={`${process.env.NEXT_PUBLIC_NAMEAPP}`}
          variant="xl"
          other={"font-extrabold text-white capitalize"}
        />
      </div>
      <div className="sm:flex hidden items-center">
        <Iconify other={"mr-10"} size="2xl" icon="fa:search" />
        <Iconify other={"mr-10"} size="2xl" icon="fa:search" />
        <Iconify size="2xl" icon="fa:search" />
      </div>
    </div>
  );
}
