import { useResult } from "../query/get-result";
import Table from "./table";

export default function Tables() {
  const { data } = useResult();
  console.log("data inside table",data)

  

  return (
<div className="m-8 -mt-11 ">
  {data
    ?.sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort the data array by date in descending order
    .map((item, index) => (
      <Table
        key={index}
        heading={item.date}
        data={item.data.map(({ slot, winningPatti, winningPoint }) => ({
          slot,
          patti: winningPatti,
          point: winningPoint,
        }))}
      />
    ))}
</div>


  );
}
