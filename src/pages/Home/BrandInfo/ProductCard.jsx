import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faEdit,
  faTrash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  // Function to generate star icons based on the rating
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalf} />);
    }

    return stars;
  };

  return (
    <div className="overflow-hidden shadow-2xl border-2 border-slate-100 md:w-80 mx-auto">
      <img className="w-full" src={product.image} alt={product.Name} />
      {/* Badge Section */}
      <div className="flex items-center justify-center gap-2 mt-2 mb-4">
        <span className="bg-gray-400 px-2 py-1 rounded-full text-black font-bold">
          stock ready
        </span>
        <span className="bg-gray-400 px-2 py-1 rounded-full text-black font-bold">
          official store
        </span>
      </div>
      {/* Product Title & Price Section */}
      <div className="p-4">
        <h2 className="text-3xl font-bold text-center mb-4">{product.Name}</h2>
        <h3 className="text-2xl font-bold text-center mb-2">
          Price: ${product.Price}
        </h3>

      </div>
      {/* Rating Section */}
      <div className="flex gap-2 mb-4 p-4 items-center justify-center">
        <div className="text-yellow-500 text-base">
          {renderRatingStars(product.Rating)}
        </div>
        <div className="text-yellow-500 text-base font-bold">
          {product.Rating} <span className="text-gray-500">(Review)</span>
        </div>
      </div>
      {/* Add To Cart Section */}
      <div className="flex gap-3 items-center p-4 justify-center">
        {/* Cart Button */}
        <div>
          <button className="font-bold bg-orange-400 px-4 py-2 rounded-lg text-white">
            Add to cart
          </button>
        </div>
        {/* Edit Icon */}
        <div className="bg-gray-400 px-2 py-1 rounded-full">
          <FontAwesomeIcon icon={faEdit} />
        </div>
        {/* Delete Icon */}
        <div className="bg-gray-400 px-2 py-1 rounded-full">
          <FontAwesomeIcon icon={faTrash} />
        </div>
        {/* Eye Icon */}
        <div className="bg-gray-400 px-2 py-1 rounded-full">
          <FontAwesomeIcon icon={faEye} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
