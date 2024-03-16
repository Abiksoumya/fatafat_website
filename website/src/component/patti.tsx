import Header from "./header";

export default function Patti (){
   
    return(
        <>
        <Header />
        
        <div className=" -mt-10 p-20">
      <table className=" border-collapse border border-gray-800">
        <tbody>
          <tr className="bg-orange-400">
            <td className="border border-gray-800  text-center">0</td>
            <td className="border border-gray-800  text-center ">1</td>
            <td className="border border-gray-800  text-center">2</td>
            <td className="border border-gray-800  text-center">3</td>
            <td className="border border-gray-800  text-center">4</td>
            <td className="border border-gray-800  text-center">5</td>
            <td className="border border-gray-800  text-center">6</td>
            <td className="border border-gray-800  text-center">7</td>
            <td className="border border-gray-800  text-center">8</td>
            <td className="border border-gray-800  text-center">9</td>
          </tr>
          {[...Array(22)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(10)].map((_, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`} className="border border-gray-800  text-center ">
                  {(colIndex * 100 + rowIndex + 1).toString().padStart(3, '0')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

        </>
    )
}