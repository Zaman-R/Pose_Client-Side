import Swal from 'sweetalert2';
import { useState, useEffect } from 'react'; // Import `useState` and `useEffect`
import { useParams } from 'react-router-dom';

const UpdateProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fetch the specific product based on the id
    fetch(`https://server-side-zeta-ochre.vercel.app/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoaded(true);
      });
  }, [id]);

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    // Get the updated product data from the form
    const form = event.target;
    const updatedProduct = {
      Name: form.name.value,
      Type: form.type.value,
      Price: form.Price.value,
      Brand_Name: form.Brand_Name.value,
      Rating: form.Rating.value,
      Short_description: form.Short_description.value,
      image: form.photo.value,
    };

    // Send a PUT request to update the product on the server
    fetch(`https://server-side-zeta-ochre.vercel.app/products/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Product Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#F4F3F0] p-4 sm:p-8 md:p-12 lg:p-16">
      <h2 className="text-3xl font-extrabold text-center mb-6">
        Update Product: {product.Name}
      </h2>
      <form onSubmit={handleUpdateProduct} className="space-y-4">
        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              defaultValue={product.Name} // Populate the input with the product's name
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Type of Product</span>
            </label>
            <input
              type="text"
              name="type"
              placeholder="Product Type"
              className="input input-bordered"
              defaultValue={product.Type} // Populate the input with the product's type
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="Price"
              placeholder="Price"
              className="input input-bordered"
              defaultValue={product.Price} // Populate the input with the product's price
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              name="Brand_Name"
              placeholder="Brand Name"
              className="input input-bordered"
              defaultValue={product.Brand_Name} // Populate the input with the product's brand name
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="Rating"
              placeholder="Out of 10"
              className="input input-bordered"
              defaultValue={product.Rating} // Populate the input with the product's rating
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <input
              type="text"
              name="Short_description"
              placeholder="Details"
              className="input input-bordered"
              defaultValue={product.Short_description} // Populate the input with the product's short description
            />
          </div>
        </div>
        {/* Photo URL input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
            defaultValue={product.image} // Populate the input with the product's image
          />
        </div>
        {/* Submit button */}
        <input type="submit" value="Update Product" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateProducts;
