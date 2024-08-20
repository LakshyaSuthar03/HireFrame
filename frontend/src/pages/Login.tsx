import { IoIosBriefcase } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { backend } from "../../config.json";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/Slices/authSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    axios
      .post(`${backend}/auth/login`, { email, password })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch(login(res.data));
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-svw h-dvh flex">
      <div className="w-1/2 h-full  flex items-center justify-center">
        <div className="w-max min-h-80 ">
          <div>
            <div className="flex items-center gap-1 bg-[var(--secondary)] w-full">
              <IoIosBriefcase />
              HIREFRAME
            </div>
            <div className="mt-5">
              <p className="font-bold text-xl">Log in to your Account</p>
              <p className="font-light text-xs mt-1">
                Welcome back select method to log in:
              </p>
            </div>
            <div className="flex mt-5 gap-2">
              <button className="flex items-center gap-1 border-2 border-[var(--tertiary)] px-5 py-2 rounded-md text-xs w-1/2">
                <FaGoogle />
                Google
              </button>
              <button className="flex items-center gap-1 border-2 border-[var(--tertiary)] px-5 py-2 rounded-md text-xs w-1/2">
                <FaFacebook />
                Facebook
              </button>
            </div>
          </div>
          <div className="relative">
            <p className="text-xs absolute left-1/2 top1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--secondary)] z-10 font-thin px-1">
              or continue with email
            </p>
            <hr className="w-4/5 h-px bg-black my-5 mx-auto opacity-15 " />
          </div>
          <div>
            <div className="relative w-full">
              <MdOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full border-2 pl-10 pr-3 py-1 rounded-md focus:outline-none placeholder:text-sm "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative w-full mt-2">
              <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full border-2 pl-10 pr-3 py-1 rounded-md focus:outline-none placeholder:text-sm "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5">
            <button
              className="w-full bg-[var(--tertiary)] text-[var(--secondary)] py-2 rounded-md hover:text-[var(--textLight)] text-xs transition duration-150 ease-out"
              onClick={handleLogin}
            >
              Log in
            </button>
            <div className="mt-5">
              <p className="text-xs mt-2 text-center">
                Don't have an account?{" "}
                <span className="text-[var(--textDark)] cursor-pointer hover:text-[var(--tertiary)] transition duration-150 ease-out">
                  <Link to={"/register"}>Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-gradient-to-r from-slate-900 to-slate-700"></div>
    </div>
  );
};

export default Login;
