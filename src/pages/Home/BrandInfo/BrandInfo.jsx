import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandInfo = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all products
    fetch("http://localhost:5000/products")
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
          <ProductCard key={index} product={product} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default BrandInfo;
