import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BrandInfo = () => {
  // Get the brandName parameter from the URL
  const { brandName } = useParams();

  // Sample data structure for brand information
  const brands = [
    {
      name: "Gucci",
      image: "https://i.ibb.co/1J53b36/max-anderson-gmx-Tz-ER0ih8-unsplash.jpg",
    },
    {
      name: "Adidas",
      image: "https://i.ibb.co/SPD08mz/leon-skibitzki-m-HUk4-Se7pe-Y-unsplash.jpg",
    },
    {
      name: "Jordan",
      image: "https://i.ibb.co/2qFTdH2/xavier-teo-Sx-AXph-IPWeg-unsplash.jpg",
    },
    {
      name: "H&M",
      image: "https://i.ibb.co/0cr4f6h/dmitry-spravko-2cm-LR-I-hn0-unsplash.jpg",
    },
    {
      name: "Lui Vuitton",
      image: "https://i.ibb.co/ThMQfMh/dom-hill-nim-El-Tc-TNy-Y-unsplash-1.jpg",
    },
    {
      name: "Levis",
      image: "https://i.ibb.co/SnG2gjy/atharva-tulsi-Gqv-Hcl2-IKVU-unsplash.jpg",
    },
  ];

  // State to store the brand data
  const [brandData, setBrandData] = useState(null);

  useEffect(() => {
    // Find the brand information based on the brandName
    const brand = brands.find((brand) => brand.name === brandName);

    if (brand) {
      setBrandData(brand);
    }
  }, [brandName]);

  if (!brandData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{brandData.name}</h2>
      <p>{brandData.description}</p>
    </div>
  );
};

export default BrandInfo;
