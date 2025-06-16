import React, { useEffect, useState } from "react";
import Image from "../assets/auth.png";
import { useNavigate, Link } from "react-router-dom";
import { endPoint } from "./utils/endpoint";
import { postWithoutToken } from "../api/fetch";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        navigate("/");
      }
    };
    checkToken();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postWithoutToken({ email, password }, endPoint.login);

      if (res?.status) {
        localStorage.setItem("accessToken", res.token);
        navigate("/");
      } else {
        alert(res?.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong during login.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-slate-100 min-h-screen">
      <div className="flex w-[90%] max-w-5xl shadow-lg rounded-2xl overflow-hidden bg-white">
        {/* Left Side Image */}
        <div className="w-1/2">
          <img
            src={Image}
            alt="login-pics"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center mb-6 text-green-600">
            Sign In
          </h1>
          <p className="text-center font-medium">
            Sign in to continue shopping
          </p>

          <form className="space-y-4 mt-10" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium mb-1">Email*</label>
                <p className="font-medium text-xs text-green-500">
                  Use Phone Instead
                </p>
              </div>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Password*
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <div>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="ml-2">Remember me</label>
              </div>
              <p className="font-medium text-xs text-green-500">
                Forgot Password
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-3xl bg-green-500 hover:bg-green-600 text-white font-semibold py-2 shadow-md transition duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>

          <p className="text-center font-medium my-5">
            For quick demo login click below
          </p>

          <div className="flex justify-start gap-3 flex-wrap">
            <button className="w-[45%] rounded-md bg-orange-500 hover:bg-green-600 text-white font-semibold py-2 shadow-md transition duration-300">
              Admin
            </button>
            <button className="w-[45%] rounded-md bg-green-700 hover:bg-green-600 text-white font-semibold py-2 shadow-md transition duration-300">
              Customer
            </button>
            <button className="w-[45%] rounded-md bg-blue-500 hover:bg-green-600 text-white font-semibold py-2 shadow-md transition duration-300">
              Manager
            </button>
            <button className="w-[45%] rounded-md bg-violet-500 hover:bg-green-600 text-white font-semibold py-2 shadow-md transition duration-300">
              POS Operator
            </button>
            <button className="w-[45%] rounded-md bg-pink-500 hover:bg-green-600 text-white font-semibold py-2 shadow-md transition duration-300">
              Delivery Boy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
