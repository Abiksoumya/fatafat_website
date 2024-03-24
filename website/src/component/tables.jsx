import { useResult } from "../query/get-result";
import Table from "./table";
import Logo2 from '../assets/logo2.jpg';

export default function Tables() {
  const { data } = useResult();

  return (
    <div className="container-lg table-show-in-mobile ">
     
      {data
        ?.sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort the data array by date in descending order
        .map((item, index) => {
          // Convert date string to Date object
          const dateObj = new Date(item.date);
          // Extract day, month, and year
          const day = dateObj.getDate().toString().padStart(2, '0');
          const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
          const year = dateObj.getFullYear();
          // Format date as dd/mm/yyyy
          const formattedDate = `${day}/${month}/${year}`;

          return (
            <>
              <Table
                key={index}
                heading={formattedDate} // Use the formatted date
                data={item.data.map(({ slot, winningPatti, winningPoint }) => ({
                  slot,
                  patti: winningPatti,
                  point: winningPoint,
                }))}
              />
              {index === 4 && (
                <figure className=''>
                  <img src={Logo2} className='d-block mx-auto img-fluid rounded-3xl shadow lgo3' alt="" />
                </figure>
              )}
            </>
          );
        })}
    </div>
  );
}
