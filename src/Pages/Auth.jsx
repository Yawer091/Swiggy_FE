import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import rect from "../assets/rect.svg";
import avtr from "../assets/avtr.svg";
import Google from "../assets/Google.svg";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://swiggy-be.onrender.com/api/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      navigate("/feed");
    } catch (error) {
      console.error(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex w-[60%] m-auto">
        <img src={rect} alt="ICON" className="h-[600px] w-[600px]" />
        <div className="p-[20px]">
          <div className="w-[400px]">
            <div className=" flex my-[30px] ">
              <img src={avtr} alt="" />
              <h2 className="text-[32px] ml-[30px] font-semibold">
                MASAI FORUM
              </h2>
            </div>
            <div className=" border-b-[2px] w-full m-auto">
              <h1 className="font-bold text-[26px]">Nice to See you again</h1>
              <div className="flex flex-col py-[30px] gap-[20px]">
                <div htmlFor="">
                  Login
                  <br />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-[2px] pl-[5px]  py-[5px] bg-gray-200 rounded-md"
                  />
                </div>
                <div>
                  Password
                  <br />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-[2px] pl-[5px]   py-[5px] bg-gray-200 rounded-md"
                  />
                </div>
              </div>

              <button
                onClick={handleLogin}
                className=" bg-blue-500 mb-[30px] my-[20px] py-[10px] w-full font-semibold text-white text-[20px] hover:bg-blue-600"
              >
                Sign in
              </button>
            </div>
            <button className="bg-black my-[30px] py-[10px] w-full text-white text-[20px] hover:bg-slate-900">
              <img src={Google} alt="" className="inline" /> Or Sign in with
              google
            </button>
          </div>

          <p className="text-center">
            Dont have Account?{" "}
            <a href="#" className=" text-blue-500 hover:text-blue-700">
              Sign Up now
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
