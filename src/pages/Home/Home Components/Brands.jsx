
const Brands = () => {
    return (
        <div className="px-5 " data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1800">
  <div className="container py-16 mx-auto">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Brands by category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="relative rounded-sm overflow-hidden group">
                <img src="https://i.ibb.co/1J53b36/max-anderson-gmx-Tz-ER0ih8-unsplash.jpg" alt="category 1" className="w-full h-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Gucci</a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src="https://i.ibb.co/SPD08mz/leon-skibitzki-m-HUk4-Se7pe-Y-unsplash.jpg" alt="category 1" className="w-full h-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Adidas</a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src="https://i.ibb.co/2qFTdH2/xavier-teo-Sx-AXph-IPWeg-unsplash.jpg" alt="category 1" className="w-full h-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Jordan
                </a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img  src="https://i.ibb.co/0cr4f6h/dmitry-spravko-2cm-LR-I-hn0-unsplash.jpg" alt="dmitry-spravko-2cm-LR-I-hn0-unsplash"  className="w-full h-full"/>
                <a href="#"
                    className=" absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">H&M</a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src="https://i.ibb.co/ThMQfMh/dom-hill-nim-El-Tc-TNy-Y-unsplash-1.jpg" alt="category 1" className="w-full h-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Lui Vuitton</a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src="https://i.ibb.co/SnG2gjy/atharva-tulsi-Gqv-Hcl2-IKVU-unsplash.jpg" alt="category 1" className="w-full h-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Levis</a>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Brands;