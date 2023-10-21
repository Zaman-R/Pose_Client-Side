import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details based on the ID
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data); // Update the product state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message.
  }

  const { Name, Price, Short_description, image } = product;

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="container mx-auto text-center lg:text-left xl:px-32">
          <div className="flex grid items-center lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                <h2 className="mb-8 text-5xl font-bold">{Name}</h2>
                <p className="mb-4 text-2xl font-bold text-gray-800 ">${Price}</p>
                <p className="mb-8 pb-2 font-medium text-neutral-500 dark:text-neutral-300 lg:pb-0">{Short_description}</p>

                <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-2 h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Best iteam
                  </p>

                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-2 h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Best quality
                  </p>

                  <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-2 h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Best experience
                  </p>
                </div>


              </div>
            </div>

            <div>
              <img src={image} className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt={Name} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
