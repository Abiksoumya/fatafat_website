import { useResult } from "../query/get-result";
import Table from "./table";
import { useEffect, useState } from "react";

export default function OldResult() {
  const { data } = useResult();
  console.log("data inside table old result", data)
  const [filteredData, setFilteredData] = useState([]);
  const last60DaysData = data?.filter((item) => {
    const itemDate = new Date(item.date);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - itemDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays <= 60;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  useEffect(() => {
    setFilteredData(last60DaysData);
  }, []);
  return (
    <div className="container pt-5">

      <div className="mb-4 text-center">
        <h2 >Last 60 days result</h2>


      </div>

      <div className="  ">

        {filteredData.map((item, index) => (
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
    </div>
  )
}