import React, { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../../features/button";
import { Link, useNavigate } from "react-router-dom";

export default function Modal({
  children,
  header,
  titlePosition,
  height,
  width,
  handleCloseModal,
}) {
 const [otp, setOtp] = useState(new Array(6).fill(""));
  const code = useRef("");

     function handleChange(e, index) {
       if (isNaN(e.value)) return false;
       setOtp([...otp.map((data, i) => (i === index ? e.value : data))]);

       if (e.nextSibling) e.nextSibling.focus();
       if (otp !== "") {
       }
     }

     function handleDelete(e, index) {
       if (e.key === "Backspace" && e.target.previousSibling) {
         e.preventDefault();
         e.target.previousSibling.focus();

         setOtp([...otp.map((data, i) => (i !== index ? data : ""))]);
       } else if (
         e.key === "Backspace" &&
         !e.target.previousSibling &&
         e.target.nextSibling
       ) {
         e.preventDefault();
         setOtp([...otp.map((data, i) => (i !== index ? data : ""))]);
       }
     }

     useEffect(() => {
       code.current = otp.join("");
       // verifyUser(code.current);
     }, [otp]);

     function handlePaste(e) {
       const value = e.clipboardData.getData("text");
       // if(isNaN(value)) return false
       // console.log(value.toString().split(""))
       setOtp(value.toString().split(""));
       e.target.lastSibling.focus();
       // console.log(otp)
       // console.log(e.clipboardData.getData("text"))
     }

 const navigate = useNavigate()

  return (
    <>
      <div className="fixed inset-0 z-10 bg-[#000000cf] bg-opacity-90 overflow-y-auto flex items-center justify-center h-full w-full">
        <div
          className={` absolute ${height} ${width}
        pb-10 sm:top-[15%] top-[10%] border border-black
        shadow-lg rounded-md overflow-hidden xl:w-[40%] lg:w-[50%] w-[90%]
        bg-white`}
        >
          <header className={`w-full ${titlePosition} bg-[#EBF0F0] py-5 px-12`}>
            <b>Account verification</b>
            <span
              onClick={() => {
                handleCloseModal();
              }}
              className="text-[25px] float-right cursor-pointer"
            >
              <IoCloseOutline />
            </span>
          </header>
          <div className="w-[80%] m-auto text-center">
            <h1 className="text-[20px] font-semibold pt-2">
              Hello Onaji Grace Ojoma (12ms1147)
            </h1>
            <p className="text-sm py-3">
              Enter the verification code sent to your phone
            </p>
            <div>
              <div className="flex justify-between sm:w-[68%] w-full m-auto">
                {otp.map((data, index) => {
                  return (
                    <input
                      className="border h-10 shadow-md text-center outline-none focus:border-b-gray-500 w-12 rounded-md"
                      key={index}
                      type="text"
                      onPaste={(e) => handlePaste(e)}
                      value={data}
                      maxLength={1}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowLeft" && e.target.previousSibling) {
                          e.target.previousSibling.focus();
                        } else if (
                          e.key === "ArrowRight" &&
                          e.target.nextSibling
                        ) {
                          e.target.nextSibling.focus();
                        }

                        handleDelete(e, index);
                      }}
                    />
                  );
                })}
              </div>

              <div className="flex justify-between w-1/2 m-auto pt-3 pb-4">
                <Button text="Verify code" />
                <Button text="Reset" />
              </div>
              <Link
                onClick={() => navigate("/")}
                className="text-[12px] font-semibold hover:text-blue-700"
              >
                <u>GO BACK HOME</u>
              </Link>
            </div>
          </div>
          {/* <body>{children}</body> */}
        </div>
      </div>
    </>
  );
}
