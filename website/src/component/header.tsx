import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const redirectToOldResult = () => {
    navigate('/old-result');
  };
  const redirectToPatti = () => {
    navigate('/patti');
  };
  return (
    <>
    <Navbar/>
     <div className="header flex justify-around text-blue-800  m-8 border border-black">
  {/* Tips */}
  <div>
    <h2>Tips</h2>
  </div>
  
  {/* Refresh button */}
  <button onClick={redirectToOldResult}>
    <h2>Old Result</h2>
  </button>
  
  {/* Tatti List */}
  <button onClick={redirectToPatti}>
    <h2>Patti</h2>
  </button>
</div>
    </>
   

  );
}
