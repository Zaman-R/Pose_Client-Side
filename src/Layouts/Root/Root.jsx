import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar";
import Footer from "../../pages/Shared/Footer";


const Root = () => {
  return (
    <div>
    <Navbar/>
       <Outlet/>
    <Footer/>
    {/**/}
    </div>
  );
};

export default Root;