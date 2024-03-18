interface CellData {
  patti: number;
  point: number;
  slot:any,
  key:any
}

function TableCell({ key, patti, point, slot }: CellData) {
  return (
    <td key={key}>
      {/* <p>Time Slot: {slot}</p> */}
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
  const timeSlots = [
    "09:30",
    "11:00",
    "12:30",
    "02:00",
    "03:30",
    "05:00",
    "06:30",
    "08:00",
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
  
  return (
    <div style={{ overflowX: "auto" }}>
    <table>
      <tbody>
        <tr className="">
          <th colSpan={10} className="border border-black">
            <h4 className="">
              <strong className="bg-green-500">{heading}</strong>
            </h4>
            {
              timeSlots.map((item, index) =>{
                return (
                  <td key={index} className="bg-orange-500">
                    <h5>
                      <strong>{item}</strong>
                    </h5>
                  </td>
                )
              })
            }
          </th>
        </tr>
        <tr className="b">
          {/* Iterate over time slots and render TableCell only if data exists for that time slot */}
          {timeSlots.map((timeSlot) => {
            const matchingData = filteredData.find((item) => convertSlotToHHMM(item.slot) === timeSlot);
            if (matchingData) {
              return (
                
                <TableCell
                  key={timeSlot} // Use time slot as key
                  patti={matchingData.patti}
                  point={matchingData.point}
                  slot={matchingData.slot}
                />
              );
            } else {
              // If no data found for the time slot, render an empty cell
              return <td key={timeSlot} />;
            }
          })}
        </tr>
      </tbody>
    </table>
  </div>
  );
}
