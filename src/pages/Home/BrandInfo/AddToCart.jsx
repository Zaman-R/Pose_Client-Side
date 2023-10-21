// AddToCart.js


const AddToCart = ({ shoppingCart }) => {
  return (
    <div>
      <h2>Add To Cart</h2>
      {shoppingCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {shoppingCart.map((item) => (
            <li key={item._id}>
              {item.Name} - ${item.Price}
            </li>
          ))}
        </ul>
      )}
      {/* Add functionality for checkout and total price here */}
    </div>
  );
};

export default AddToCart;
