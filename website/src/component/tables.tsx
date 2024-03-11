import { useResult } from "../query/get-result";
import Table from "./table";

export default function Tables() {
  const { data } = useResult();
  console.log("data inside table",data)


  return (
    <div>
      {data?.data?.map((item) => (
        <Table
          heading={item.user}
          data={data
            }
        />
      ))}
    </div>
  );
}
