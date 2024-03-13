import { useResult } from "../query/get-result";
import Table from "./table";

export default function Tables() {
  const { data } = useResult();
  console.log("data inside table",data)

  

  return (
<div>
  {data?.map((item) => (
    <Table
      key={item.date}
      heading={item.date}
      data={item.data
        .map(({ slot, winningPatti, winningPoint }) => {
          return { slot, patti: winningPatti, point: winningPoint };
        })}
    />
  ))}
</div>


  );
}
