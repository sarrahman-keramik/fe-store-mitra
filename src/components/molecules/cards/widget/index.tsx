import { Iconify, Typograhpy } from "../../../atoms";

export default function CardWidget(props: {
  title: string;
  subtitle: string;
  icon: string;
  bgColor?: "teal" | "blue" | "green" | "gray" | "yellow" | "orange";
}) {
  const bgColor = props.bgColor || "teal";
  return (
    <div
      className={`${
        bgColor === "yellow"
          ? "bg-gradient-to-l from-orange-500 to-yellow-500"
          : bgColor === "teal"
          ? "bg-gradient-to-l from-green-500 to-teal-500"
          : bgColor === "blue"
          ? "bg-gradient-to-l from-cyan-500 to-blue-500"
          : bgColor === "green"
          ? "bg-gradient-to-l from-teal-500 to-green-500"
          : bgColor === "gray"
          ? "bg-gradient-to-l from-gray-400 to-gray-600"
          : bgColor === "orange"
          ? "bg-gradient-to-l from-yellow-500 to-orange-500"
          : "bg-teal-500"
      }
    h-32 md:w-[24%] rounded-xl w-full m-1 text-white flex justify-between flex-col py-5 px-3 shadow shadow-teal-100`}
    >
      <div className="flex justify-between items-center">
        <Typograhpy
          other={"text-gray-200 select-none"}
          child={props.title}
          variant="lg"
        />
        <Iconify
          icon={props.icon}
          size="3xl"
          other={` ${
            bgColor === "yellow"
              ? "bg-yellow-600"
              : bgColor === "teal"
              ? "bg-teal-600"
              : bgColor === "blue"
              ? "bg-blue-600"
              : bgColor === "green"
              ? "bg-green-600"
              : bgColor === "gray"
              ? "bg-gray-600"
              : bgColor === "orange"
              ? "bg-orange-600"
              : "bg-teal-600"
          } p-1 rounded-full`}
        />
      </div>
      <div>
        <Typograhpy child={props.subtitle} variant="2xl" />
      </div>
    </div>
  );
}
