import React from "react";

export default function Input({ title, type, fn, value, text }) {
  return (
    <div>
      <header className="text-[14px] pb-1 pt-5 text-left">{title}</header>
      <input
        className={`bg-[#F9F9F9] focus:bg-white ps-4 w-full
        rounded-md text-[14px] 
        h-11 outline-none focus:border-green-500 border text-[#424242]`}
        type={type}
        onChange={fn}
        placeholder={text}
        value={value}
      />
    </div>
  );
}
