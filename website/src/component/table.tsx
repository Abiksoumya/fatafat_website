interface CellData {
  patti: number;
  point: number;
}

function TableCell({ patti, point }: CellData) {
  return (
    <td>
      <h5>
        <strong>{patti}</strong>
      </h5>
      <h5>{point}</h5>
    </td>
  );
}

export default function Table({
  heading,
  data,
}: {
  heading: string;
  data: CellData[];
}) {
  console.log("data inside table9999999999",data)
  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <tbody>
          <tr className="">
            <th colSpan={10} className="border border-black">
              <h4 className="">
                <strong className="">{heading}</strong>
              </h4>
            </th>
          </tr>
          <tr>
            {data.map(({ patti, point }) => (
              <TableCell patti={patti} point={point} />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
