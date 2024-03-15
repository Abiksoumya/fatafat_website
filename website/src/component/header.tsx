import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
    <Navbar/>
     <div className="header flex justify-around text-blue-800  m-8 border border-black">
  {/* Tips */}
  <div>
    <h2>Tips</h2>
  </div>
  
  {/* Refresh button */}
  <div>
    <h2>Old Result</h2>
  </div>
  
  {/* Tatti List */}
  <div>
    <h2>Patti</h2>
  </div>
</div>
    </>
   

  );
}
