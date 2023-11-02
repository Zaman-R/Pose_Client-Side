import Swal from 'sweetalert2';

const AddProducts = () => {
  const handleAddProducts = (event) => {
    event.preventDefault();

    const form = event.target;

    const Name = form.name.value;
    const Type = form.type.value;
    const Price = form.Price.value;
    const Brand_Name = form.Brand_Name.value;
    const Rating = form.Rating.value;
    const Short_description = form.Short_description.value;
    const image = form.photo.value;

    const newProduct = { Name, Type, Price, Brand_Name, Rating, Short_description, image };

     console.log(newProduct);
    // send data to the server

    fetch('https://server-side-zeta-ochre.vercel.app/products',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
      .then((res) => res.json())
      .then((data) => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
      .catch((err) => console.log(err));
   
  };

  return (
    <div className="bg-[#F4F3F0] p-4 sm:p-8 md:p-12 lg:p-16">
      <h2 className="text-3xl font-extrabold text-center mb-6">Add a Product</h2>
      <form onSubmit={handleAddProducts} className="space-y-4">
        {/* Form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Type of Product</span>
            </label>
            <input type="text" name="type" placeholder="Product Type" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="Price" placeholder="Price" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input type="text" name="Brand_Name" placeholder="Brand Name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" name="Rating" placeholder="Out of 10" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <input type="text" name="Short_description" placeholder="Details" className="input input-bordered" />
          </div>
        </div>
        {/* Photo URL input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
        </div>
        {/* Submit button */}

        <input type="submit" value="Add Product" className="btn btn-block" />



      </form>
    </div>
  );
};

export default AddProducts;
