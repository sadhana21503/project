import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/cngenlogo.png";
import { Link } from "react-router-dom";
import { MdVisibilityOff, MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { login } from "../redux/authSlice";

const Login = () => {
  const [fields, setFields] = useState({
    username: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem('registeredUsername') || '';
    const savedPassword = localStorage.getItem('registeredPassword') || '';

    setFields({ username: savedUsername, password: savedPassword });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username: fields.username, password: fields.password }));

    if (fields.username === localStorage.getItem('registeredUsername') && fields.password === localStorage.getItem('registeredPassword')) {
      navigate('/home');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <img src={logo} alt="logo" className="w-1/3 mb-10" />
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-left mb-1 ml-2">Login</h2>
        <h3 className="text-md font-normal text-green-900 text-left mb-8 ml-2">Please sign in to Continue</h3>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={fields.username}
          onChange={handleChange}
          className="w-full mb-4 p-4 bg-gray-800 text-white rounded-full placeholder-gray-400 focus:outline-none"
        />
        
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
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-200"
          >
            {passwordVisible ? <MdVisibilityOff /> : <MdOutlineRemoveRedEye />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors mb-4"
        >
         Sign In
        </button>
        <div className="text-center">
          <p className="text-md font-light text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-green-800 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
