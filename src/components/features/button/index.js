import React from "react";


export default function Button({ styles, text, fn, status }) {
  return (
    <button
      onClick={fn}
      className={`text-[12px] 
          font-bold py-[10px] px-[6%] 
          ${styles} border
          rounded-md mt-4
          bg-[#FFF5D9]`}
      disabled={status}
    >
      {text}
    </button>
  );
}
