import React, { useEffect, useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";


export default function PasswordInput({ title, fn, value, text }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <header className="text-[12px] pb-1 pt-5 text-left">{title}</header>
      <div
        className="bg-[#F9F9F9] w-full flex justify-between items-center
     rounded-md font-semibold border pr-4"
      >
        <input
          className={` text-[14px] border-1 w-[90%]
     h-11 outline-none  bg-transparent focus:border focus:border-r-0 ps-4 rounded-md focus:bg-white focus:border-green-500  text-[#424242]`}
          type={!showPassword ? "password" : "text"}
          onChange={fn}
          value={value}
          placeholder={text}
        />
        <div>
          {!showPassword && (
            <span
              className={`cursor-pointer `}
              onClick={() => setShowPassword(true)}
            >
              <BsEye />
            </span>
          )}
          {showPassword && (
            <span
              className={`cursor-pointer `}
              onClick={() => setShowPassword(false)}
            >
              <BsEyeSlash />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
