export default function Table(props: { column: any[]; data: any[] }) {
  const column = props.column || [];
  const data = props.data || [];

  return (
    <div className="rounded-md border bg-white">
      <table
        className={`table-auto w-full border-b border-gray-300 ${
          column.length > 4 ? "block overflow-x-scroll" : ""
        }`}
      >
        <thead>
          <tr>
            {column.map((col, i) => (
              <th key={i} className="p-3 border-b border-gray-300">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="hover:bg-teal-50 transition">
              {column.map((col, i2) => (
                <td className="p-2 border-b border-gray-300" key={i2}>
                  {item[col.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
