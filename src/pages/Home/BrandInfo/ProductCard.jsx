
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="overflow-hidden shadow-2xl border-2 border-slate-100">
      <img className="w-80" src={product.image} alt={product.Name} />
      {/* Badge Section */}
      <div className="flex items-center justify-center gap-10 mt-2 mb-4">
        <span className="bg-gray-400 px-3 py-1 rounded-full text-black font-bold mt-2">stock ready</span>
        <span className="bg-gray-400 px-3 py-1 rounded-full text-black font-bold mt-2">official store</span>
      </div>
      {/* Product Title & Price Section */}
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-4">{product.Name}</h2>
        <h3 className="text-2xl font-bold mb-2">Price: ${product.Price}</h3>
        {/* Discounted Price Section */}
        <div className="flex gap-5 items-center">
          <h4 className="text-gray-600 font-bold line-through text-base">Price: $185.00</h4>
          <p className="bg-green-500 px-3 py-1 rounded-full font-bold text-white">save 20%</p>
        </div>
      </div>
      {/* Rating Section */}
      <div className="flex gap-6 mb-5 p-4">
        <div className="text-yellow-500 text-base">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star-half-stroke"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <h3 className="font-bold text-gray-500">20k reviews</h3>
      </div>
      {/* Add To Cart Section */}
      <div className="flex gap-3 items-center p-4">
        {/* Cart Button */}
        <div>
          <button className="font-bold bg-orange-400 px-10 py-2 mr-3 rounded-lg text-white">Add to cart</button>
        </div>
        {/* Love Icon */}
        <div className="bg-gray-400 px-2 py-1 rounded-full">
          <i className="fa-solid fa-heart"></i>
        </div>
        {/* Eye Icon */}
        <div className="bg-gray-400 px-2 py-1 rounded-full">
          <i className="fa-solid fa-eye"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
