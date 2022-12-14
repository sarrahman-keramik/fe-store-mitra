import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Iconify from "../../Iconify";

export default function DoubleList(props: {
  child: string;
  icon: string;
  secondList: any[];
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [iconArrow, setIconArrow] = useState("bi:arrow-up-circle-fill");

  useEffect(() => {
    props.secondList.map((item) => {
      if (item.url === router.pathname) {
        setOpen(true);
      }
    });
    if (open) {
      setIconArrow("bi:arrow-down-circle-fill");
    } else {
      setIconArrow("bi:arrow-up-circle-fill");
    }
  }, [open, props.secondList, router.pathname]);

  return (
    <>
      <li
        onClick={() => setOpen(!open)}
        className={`mb-3 pr-2 font-medium text-md cursor-pointer flex justify-between items-center transition-all hover:text-teal-800 hover:bg-teal-50 hover:border-l-2 hover:border-teal-900`}
      >
        <div className="flex items-center py-2 px-7">
          <Iconify color="yellow" other={"mr-2"} icon={props.icon} />
          <p className="select-none">{props.child}</p>
        </div>
        <Iconify size="sm" color="yellow" other={"mr-2"} icon={iconArrow} />
      </li>
      <div className={`${open ? "block" : "hidden"} transition-all`}>
        <ul>
          {props.secondList.map((item, i) => {
            return (
              <li
                onClick={() => router.push(item.url)}
                key={i}
                className={`${
                  router.pathname === item.url
                    ? "border-l-2 border-teal-500 bg-teal-50 text-teal-800 rounded-l"
                    : ""
                } mb-3 ml-5 font-medium flex items-center text-md cursor-pointer transition py-2 px-7 hover:border-l-2 hover:border-teal-50`}
              >
                <Iconify color="yellow" other={"mr-2"} icon={props.icon} />
                <p className="select-none">{item.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
