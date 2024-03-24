import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo1.jpg';
export default function Navbar() {
  const navigate = useNavigate();
  const redirectToOldResult = () => {
    navigate('/');
  };
  return (
    <>
      <nav className="   py-1 mainNav ">

        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-auto">
              <button className='btn shadow-none p-0' onClick={redirectToOldResult}>
                <img className="  w-auto" src={Logo} alt="Your Company" />
              </button>
            </div>
           
            <div className="col-auto ml-auto">
              <div className="flex justify-end">
                <div className="col-auto">
                  <Link to="tips"  className='btn btn-warning shadow-none'  >Tips</Link>
                </div>
                {/* <div className="col-auto">
                  <Link to="old-result" className='btn btn-warning shadow-none'  >Old Result</Link>
                </div> */}
                <div className="col-auto">
                  <Link to="patti" className='btn btn-warning shadow-none'  >Patti</Link>
                </div>
                
                <figure className='w-2/12 h-auto '>
                  <img src="XVo3.gif" className=' ' alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}

// <Route path="/old-result" element={<OldResult />} />
//       <Route path="/patti" element={<Patti />} />
//       <Route path="/tips" element={<Tips />} />