

function TableCell({ key, patti }) {
  return (
    <td key={key} className="test">
      {/* <p>Time Slot: {slot}</p> */}
      <h4 className="mb-0">
        <strong>{patti}</strong>
      </h4>
    </td>
  );
}
function TableCellTwo({ key, point }) {
  return (
    <td key={key} className="test">
      <h4 className="mb-0"><strong>{point}</strong></h4>
    </td>
  );
}

export default function Table({ heading, data, }) {
  const parts = heading.split('/');
  
  // Rearrange the parts to the desired format
  const dateFormat = `${parts[1]}/${parts[0]}/${parts[2]}`;
  console.log("data inside table9999999999", dateFormat);

  const timeSlots = [
    "09:30",
    "11:00",
    "12:30",
    "02:00",
    "03:30",
    "05:00",
    "06:30",
    "08:00",
    "09:30"
  ];


  const convertSlotToHHMM = (slot) => {
    // If slot is already in 'HH:MM' format, return it directly
    if (typeof slot === 'string') {
      return slot;
    }

    // If the slot has a decimal part, it includes minutes
    if (Number.isInteger(slot)) {
      // Convert the slot value to an integer representing hours
      const hour = slot.toString().padStart(2, '0'); // Convert to string and pad with leading zero

      // Set the minutes part to '00'
      const minute = '00';

      return `${hour}:${minute}`;
    } else {
      // Split the slot string by '.', if it exists
      const parts = slot.toString().split('.');

      // Extract hours and minutes from the parts array
      const hour = parseInt(parts[0]).toString().padStart(2, '0'); // Extract hour and pad with leading zero
      const minute = parseInt(parts[1]).toString().padEnd(2, '0'); // Extract minute and pad with trailing zero

      return `${hour}:${minute}`;
    }
  };



  const filteredData = data.filter(item => timeSlots.includes(convertSlotToHHMM(item.slot)));

  console.log("filteredData", filteredData);


  const checkToday = (data) => {
    console.log("checkToday", data);
    const currentDate = new Date();

    // Extract month, day, and year
    const month = currentDate.getMonth() + 1; // Adding 1 because months are zero-indexed
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    // Format the date
    const formattedDate = `${day}/${month}/${year}`;

    console.log(formattedDate); // Output: "3/20/2024"

    if (data === formattedDate) {
      return 'Today Result'
    } else {
      return data
    }
  }

  const countManer = (data) =>{
    switch (data){
      case 0: return '1st';
      case 1: return '2nd';
      case 2: return '3rd';
      case 3: return '4th';
      case 4: return '5th';
      case 5: return '6th';
      case 6: return '7th';
      case 7: return '8th';
      case 8: return '9th';
    }
  }

  return (

    <>



      <div className={`table-responsive  tableTypeOne my-3 my-md-5 ${checkToday(dateFormat) === 'Today Result' ? 'todayTable' : ''}`}>
        <table className="table mb-0">
          <tbody>
            <tr className="">
              <th rowSpan={3} className="dateBox">
               <div className="dateWrap">
               <h4 className="">
                  {checkToday(dateFormat)}
                </h4>
               </div>

              </th>
              {
                timeSlots.map((item, index) => {
                  return (
                    <td key={index} className="text-center head">
                      <h5>
                       {countManer(index)} <strong>({item})</strong>
                      </h5>
                    </td>
                  )
                })
              }

            </tr>
            <tr className="lastRow">
              {/* Iterate over time slots and render TableCell only if data exists for that time slot */}
              {timeSlots.map((timeSlot) => {
                const matchingData = filteredData.find((item) => convertSlotToHHMM(item.slot) === timeSlot);
                if (matchingData) {
                  return (

                    <TableCell
                      key={timeSlot} // Use time slot as key
                      patti={matchingData.patti}
                      slot={matchingData.slot}
                    />
                  );
                } else {
                  // If no data found for the time slot, render an empty cell
                  return <td key={timeSlot} ><h5><strong>-</strong></h5></td>;
                }
              })}
            </tr>
            <tr className="lastRowTwo">
              {/* Iterate over time slots and render TableCell only if data exists for that time slot */}
              {timeSlots.map((timeSlot) => {
                const matchingData = filteredData.find((item) => convertSlotToHHMM(item.slot) === timeSlot);
                if (matchingData) {
                  return (

                    <TableCellTwo
                      key={timeSlot} // Use time slot as key
                      point={matchingData.point}
                      slot={matchingData.slot}
                    />
                  );
                } else {
                  // If no data found for the time slot, render an empty cell
                  return <td key={timeSlot} ><h5><strong>-</strong></h5></td>;
                }
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
