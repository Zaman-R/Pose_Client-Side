import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const AddToCart = () => {
  const { user } = useContext(AuthContext);
  const [createUser, setUser] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);

  // Fetch user data
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoadingUser(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoadingUser(false);
      });
  }, []);

  const email = user.email;

  // Filter out user data by email address
  const filteredUser = createUser.find((user) => user.email === email);

  // Get the user's cart items
  const cartItems = filteredUser ? filteredUser.cart : [];

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  // Fetch product data
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoadingProducts(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoadingProducts(false);
      });
  }, []);

  // Filter products by the items in the user's cart
  const filteredProducts = products.filter((product) => cartItems.includes(product._id));
  console.log(filteredProducts.length);

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((productList) => {
              return productList.map((product) => (
                <div key={product._id} className="product-card">
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  {/* Add more details as needed */}
                </div>
              ));
            })
          ) : (
            <div>Your cart is empty.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
