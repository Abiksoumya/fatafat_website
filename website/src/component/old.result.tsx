import Header from "./header";
import { useResult } from "../query/get-result";
import Table from "./table";
import { useEffect, useState } from "react";

export default function OldResult (){
    const { data } = useResult();
  console.log("data inside table old result",data)
  const [filteredData, setFilteredData] = useState([]);


  const last60DaysData = data
  ?.filter((item) => {
    const itemDate = new Date(item.date);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - itemDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays <= 60;
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

  useEffect(() => {
    setFilteredData(last60DaysData);
  }, []);
    return(
        <>
                <Header />

        <div className="m-8">
        <div className="flex justify-start">
        <p >Last 60 days result</p>

            </div>

        </div>

         <div className="m-8 -mt-11 ">
            
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
        </>
    )
}