import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEdit,
  faTrash,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product, onDelete, onAddToCart }) => {
  const { _id, Name, Price, image } = product;

  console.log(_id);

  const handleAddToCart = () => {
    onAddToCart(product); // Call the onAddToCart prop with the product
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms the deletion, trigger the onDelete function
        onDelete(_id);
      }
    });
  };

  return (
    <div className="flex">
      <div>
        <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow mb-4 dark:bg-gray-800">
          <img
            className="object-cover w-48 h-48 md:w-48 md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={image}
            alt={Name}
          />
          <div className="p-4 flex-grow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {Name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Price: ${Price}
            </p>
          </div>
          <div>
            <div className="flex flex-col md:flex-col md:items-center md:justify-end">

              <Link to={`/updateProduct/${_id}`} className="btn mb-2 md:mb-2 md:mr-2">
                <FontAwesomeIcon icon={faEdit} />
              </Link>
              <button onClick={handleDelete} className="btn bg-stone-400 mb-2 md:mb-2 md:mr-2">
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <a href="#" className="btn mb-2 md:mb-2 md:mr-2">
                <FontAwesomeIcon icon={faEye} />
              </a>
              <button onClick={handleAddToCart} className="btn bg-stone-400 mb-2 md:mb-2 md:mr-2">
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
