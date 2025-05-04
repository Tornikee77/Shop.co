import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const SuccessfullyLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="flex flex-col justify-center items-center bg-white shadow-md p-6 rounded w-[554px] h-[1024px] gap">
        <img
          className="mb-[20px] w-[100px] h-[100px]"
          src="images/svg/successfully.svg"
          alt="login"
        />
        <p className="mb-[30px] font-[600] text-[20px]">Sign Up successfully</p>
        <button className="flex justify-center items-center gap-2 bg-transparent border border-black w-full h-[49px]">
          <img src="images/svg/appleLogo.svg" alt="apple" /> Login
        </button>
      </div>
    </div>
  );
};

export default SuccessfullyLogin;
