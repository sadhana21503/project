import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/cngenlogo.png";
import { Link } from "react-router-dom";
import { MdVisibilityOff, MdOutlineRemoveRedEye } from "react-icons/md";

const Register = () => {
  const [fields, setFields] = useState({
    username: "",
    email: "",
    phone: "",
    vehicleNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    vehicleNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const validateFields = () => {
    const usernameRegex = /^[A-Za-z]+$/;
    const vehicleNumberRegex = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/; 
    const passwordErrors = {};

    if (!usernameRegex.test(fields.username)) {
      setErrors((prevErrors) => ({ ...prevErrors, username: "Username should contain only letters." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
    }

    if (!vehicleNumberRegex.test(fields.vehicleNumber)) {
      setErrors((prevErrors) => ({ ...prevErrors, vehicleNumber: "Vehicle number is invalid. Example: MH12AB1234." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, vehicleNumber: "" }));
    }

    if (fields.password !== fields.confirmPassword) {
      passwordErrors.confirmPassword = "Passwords do not match.";
    } else {
      passwordErrors.confirmPassword = "";
    }

    if (!fields.email.includes('@') || !fields.email.includes('.')) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Email is invalid." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (fields.password.length < 8 || !/[A-Z]/.test(fields.password) || !/[0-9]/.test(fields.password) || !/[!@#$%^&*()_+{}\[\]:;"'<>,.?~`]/.test(fields.password)) {
      passwordErrors.password = "Password must be 8 characters long, include at least one uppercase letter, one number, and one special character.";
    } else {
      passwordErrors.password = "";
    }

    setErrors((prevErrors) => ({ ...prevErrors, ...passwordErrors }));
    return passwordErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).some(key => validationErrors[key])) {
      return;
    }

   
    localStorage.setItem('registeredUsername', fields.username);
    localStorage.setItem('registeredPassword', fields.password);

    
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <img src={logo} alt="logo" className="w-1/3 mb-8" />
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-left mb-1 ml-2">Register</h2>
        <h3 className="text-md font-normal text-green-900 text-left mb-8 ml-2">Please Register to Sign In</h3>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={fields.username}
          onChange={handleChange}
          className="w-full mb-4 p-4 bg-gray-800 text-white rounded-full placeholder-gray-400 focus:outline-none"
        />
        {errors.username && <p className="text-red-500 text-sm mb-4">{errors.username}</p>}

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          value={fields.phone}
          onChange={handleChange}
          className="w-full mb-4 p-4 bg-gray-800 text-white rounded-full placeholder-gray-400 focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={fields.email}
          onChange={handleChange}
          className="w-full mb-4 p-4 bg-gray-800 text-white rounded-full placeholder-gray-400 focus:outline-none"
        />
        {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}

        <input
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          required
          value={fields.vehicleNumber}
          onChange={handleChange}
          className="w-full mb-4 p-4 bg-gray-800 text-white rounded-full placeholder-gray-400 focus:outline-none"
        />
        {errors.vehicleNumber && <p className="text-red-500 text-sm mb-4">{errors.vehicleNumber}</p>}

        <div className="relative mb-6">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            value={fields.password}
            onChange={handleChange}
            className="w-full p-4 bg-gray-800 text-white rounded-full placeholder-gray-400 focus:outline-none"
          />
          
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-100"
          >
            {passwordVisible ? <MdVisibilityOff /> : <MdOutlineRemoveRedEye />}
          </button>
        </div>

        <div className="relative mb-6">
          <input
            type={passwordVisible ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={fields.confirmPassword}
            onChange={handleChange}
            className="w-full p-4 bg-gray-800 text-white rounded-full placeholder-gray-400 focus:outline-none"
          />
          {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}
          {errors.confirmPassword && <p className="text-red-500 text-sm mb-4">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors mb-4"
        >
          Register
        </button>
        <div className="text-center">
          <p className="text-md font-light text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-green-800 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
