import React, { useEffect, useState } from "react";
import Image from "../assets/auth.png";
import { postWithoutToken } from "../api/fetch";
import { endPoint } from "./utils/endpoint.js";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const data = { name, email, password };
      const resp = await postWithoutToken(data, endPoint.register);

      if (resp?.accessToken) {
        localStorage.setItem("accessToken", resp.accessToken);
        alert(resp.message);
        navigate("/profile");
      } else {
        alert(resp?.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        navigate("/");
      }
    };
    checkToken();
  }, [navigate]);

  return (
    <div className="flex justify-center items-center bg-slate-100 min-h-screen">
      <div className="flex w-[90%] max-w-5xl shadow-lg rounded-2xl overflow-hidden bg-white">
        {/* Left Side Image */}
        <div className="w-1/2">
          <img
            src={Image}
            alt="register-pics"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center mb-6 text-green-600">
            Sign Up
          </h1>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Name*</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium mb-1">Email*</label>
              <p className="font-medium text-xs text-green-500">
                Use Phone Instead
              </p>
            </div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Password*</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*********"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex justify-between items-center mt-2">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2">Remember me</label>
            </div>
            <p className="font-medium text-xs text-green-500">
              Forgot Password
            </p>
          </div>

          <button
            onClick={handleRegister}
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded shadow-md transition duration-300"
          >
            Sign Up
          </button>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-green-600 font-semibold cursor-pointer hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
