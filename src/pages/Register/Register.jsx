import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    let passwordError = "";

    // Password validation
    if (password.length < 6) {
      passwordError = "Password must be at least 6 characters long";
    } else if (!/[A-Z]/.test(password)) {
      passwordError = "Password must contain at least one capital letter";
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      passwordError = "Password must contain at least one special character";
    }

    if (passwordError) {
      // Display password error as a toast notification
      toast.error(passwordError);
    } else {
      // Create the user if password validation passes
      // 
      createUser(email, password)
        .then((res) => {
          // Registration successful
          toast.success("Registration successful....");

          // post userdata to server at /user
          // also send an empty array to the server

          const userData = {
            name: name,
            photo: photo,
            email: email,
            password: password,
            cart: [],
          };
          fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          })




          setTimeout(() => {
            window.location.href = "/login"; // Redirect to login page
          }, 1000);
          
        })
        .catch((err) => {
          // Registration unsuccessful, display the error message
          toast.error(err.message);
        });
    }
  };




  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl my-10 text-center">Please Register</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name ="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name ="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name = "email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name = "password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an Account ?{" "}
          <Link className="text-blue-600 font-bold" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Register;