interface CellData {
  patti: number;
  point: number;
}

function TableCell({ winNumber, winPatti, slot, user }: any) {
  console.log("patti", winNumber, winPatti, slot, user);
  return (
    <td>
      <h5>
        <strong>{winNumber}</strong>
      </h5>
      <h5>{winPatti}</h5>
      <h5>{slot}</h5>

      
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

  console.log("data inside table1111",data)
  
  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <tbody>
          <tr>
            <th colSpan={10}>
              <h4>
                <strong>{heading}</strong>
              </h4>
            </th>
          </tr>
          <tr>
          {data?.data.map(({ _id, winNumber, winPatti, slot, user }) => (
  <TableCell
    key={_id} // Assuming _id is unique for each item
    winNumber={winNumber}
    winPatti={winPatti}
    slot={slot}
    user={user}
  />
))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
