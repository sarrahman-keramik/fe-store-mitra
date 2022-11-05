export default function SectionLayout(props: { main: any; title: string }) {
  return (
    <div className="w-full my-8">
      <div className="border rounded-t-lg font-bold bg-white p-4 capitalize">
        {props.title}
      </div>
      <div className="bg-gray-200 border rounded-b-lg p-1">{props.main}</div>
    </div>
  );
}
