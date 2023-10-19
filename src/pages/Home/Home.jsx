import { useLoaderData } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Reviews from './Home Components/Reviews';
import Banner from './Home Components/Banner';
import Brands from './Home Components/Brands';
import Featured from './Home Components/Featured';


const Home = () => {
     
//   const x = useLoaderData();


    return (
        <div className=''>
        <Banner></Banner>
        <Featured></Featured>
        <Brands></Brands>
            <div className=" bg-[#A1A1A1]">
            {/* <div className=' w-full mx-auto'><Services x={x}></Services></div> */}
            </div>
            <Reviews></Reviews>        
        </div>
    );
};

export default Home;