export default function SectionLayout(props: {
  main: any;
  title: string;
  other?: any;
}) {
  return (
    <div className={`w-full my-8 ${props.other}`}>
      <div className="border rounded-t-lg font-bold bg-white p-4 capitalize">
        {props.title}
      </div>
      <div className="bg-gray-50 rounded-b-lg p-2 md:p-4">{props.main}</div>
    </div>
  );
}
