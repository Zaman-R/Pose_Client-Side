import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./BrandInfo/ProductCard";

const BrandInfo = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shoppingCart, setShoppingCart] = useState([]);

  const fetchProducts = () => {
    // Fetch all products
    fetch("https://server-side-na1cbme1c-zaman-r.vercel.app/products")
      .then((response) => response.json())
      .then((data) => {
        // Filter products based on the brandName
        const filteredProducts = data.filter((product) => product.Brand_Name === brandName);
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const addToCart = (product) => {
    setShoppingCart([...shoppingCart, product]);
  };


  const handleProductDelete = (productId) => {
    // Send a DELETE request to the server to delete the product
    fetch(`https://server-side-na1cbme1c-zaman-r.vercel.app/products/${productId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          // If the deletion was successful, update the UI by removing the deleted product from the state
          setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
        }
      });
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts or when brandName changes
  }, [brandName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{brandName}</h2>
      <div className="flex justify-center w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} onDelete={handleProductDelete} onAddToCart={addToCart}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandInfo;
