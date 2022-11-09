import Iconify from "../Iconify";

function Button(props: {
  onClick?: () => void;
  child: any;
  loading?: boolean;
  color?: "black" | "white";
  backgroundColor?:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "orange"
    | "transparent"
    | "teal";
  other?: any;
  form?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: string;
}) {
  const bgColor = props.backgroundColor || "teal";
  const color = props.color || "#fff";

  return (
    <button
      form={props.form}
      disabled={props.disabled || props.loading || false}
      type={props.type || "button"}
      onClick={props.onClick}
      className={`
        ${
          props.loading || props.disabled
            ? "bg-gray-500 cursor-not-allowed"
            : "cursor-pointer"
        }
        ${bgColor === "teal" ? "bg-teal-500 hover:bg-teal-600" : ""}
        ${bgColor === "red" ? "bg-red-500 hover:bg-red-600" : ""}
        ${bgColor === "blue" ? "bg-blue-500 hover:bg-blue-600" : ""}
        ${bgColor === "green" ? "bg-green-500 hover:bg-green-600" : ""}
        ${bgColor === "yellow" ? "bg-yellow-500 hover:bg-yellow-600" : ""}
        ${bgColor === "orange" ? "bg-orange-500 hover:bg-orange-600" : ""}
        ${bgColor === "transparent" ? "bg-transparent" : ""}
        ${color === "black" ? "text-black" : "text-white"}
        py-2 md:px-4 px-2 rounded md:rounded-md transition hover:shadow
        ${props.other}`}
    >
      <div
        className={`font-semibold first-letter:uppercase text-sm md:text-base font-sans ${
          props.icon ? "inline-flex items-center" : ""
        }`}
      >
        <Iconify
          color={props.color || "white"}
          icon={props.icon || ""}
          other={`mr-2 ${
            props.loading || props.disabled
              ? "cursor-not-allowed"
              : "cursor-pointer"
          } ${props.icon ? "block" : "hidden"}`}
        />
        {props.child}
      </div>
    </button>
  );
}

function IconButton(props: {
  icon: string;
  onClick?: () => void;
  loading?: boolean;
  color?:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "orange"
    | "transparent"
    | "teal"
    | "white"
    | "black";
  backgroundColor?:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "orange"
    | "transparent"
    | "teal";
  other?: any;
  disabled?: boolean;
  otherIcon?: any;
}) {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled || props.loading || false}
      backgroundColor={props.backgroundColor}
      other={props.other}
      child={
        <div className="flex justify-center items-center">
          <Iconify
            color={props.color}
            icon={props.icon}
            size="2xl"
            other={`${
              props.loading || props.disabled
                ? "cursor-not-allowed"
                : "cursor-pointer"
            } ${props.otherIcon}`}
          />
        </div>
      }
    />
  );
}
export { Button, IconButton };
