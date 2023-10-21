import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEdit,
  faTrash,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const ProductCard = ({ product, onDelete }) => {
  const { user } = useContext(AuthContext);
  const { _id, Name, Price, image } = product;

  // fetch and Get user information from server http://localhost:5000/user
  const [createUser, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/user")
    .then((response) => response.json())
    .then((data) => {
        setUser(data);
        setLoading(false);
        
      })
    .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);


  const email = user.email;
  // filter out from createUser by email address
  const filteredUser = createUser.filter((user) => user.email === email);
  
  const fuser = filteredUser[0]; 
  







  const handleAddToCart = (id) => {
    console.log(id);
    // add id to the array of user
    const addToCart = [...fuser.cart];
    addToCart.push(id);
    console.log(fuser.cart);
    // update cart of user in server 
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: addToCart,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      })
    .catch((error) => {
        console.error("Error fetching data:", error);
      });
   


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
              <Link to={`/details/${_id}`} className="btn mb-2 md:mb-2 md:mr-2">
                <FontAwesomeIcon icon={faEye} />
              </Link>
              <button onClick={()=>handleAddToCart(product._id)}  className="btn bg-stone-400 mb-2 md:mb-2 md:mr-2">
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
