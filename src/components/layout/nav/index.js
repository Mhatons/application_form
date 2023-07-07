import React from "react";
import logo from "../../assets/Kogi-State-University.webp";
import { IoSearchCircle } from "react-icons/io5";
import { BiGlobe, BiMenu, BiSearch } from "react-icons/bi";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import DropList from "../../features/dropdown";

export default function Nav() {

   const menuList = [
     {
       id: 1,
       title: "View LockBook",
       link: "/",
     },
     {
       id: 2,
       title: "Contact Supervisor",
       link: "/",
     },
     {
       id: 3,
       title: "Change password",
       link: "/",
     },
     {
       id: 4,
       title: "Sign out",
       link: "/login",
     },
   ];
  const navigate = useNavigate()
  return (
    <div className="">
      <div className="flex items-center justify-between w-[90%] pt-3 m-auto pb-4">
        <div className="w-[7%]">
          <img
            src={logo}
            alt=""
            className="cursor-pointer sm:h-12 h-7"
            onClick={() => navigate("/")}
          />
        </div>
        <div className=" rounded-3xl ps-5 border shadow-md whitespace-nowrap  hover:shadow-slate-300 sm:ms-20 ms-5 lg:w-[28%] w-[60%] p-2">
          <div className="text-center font-bold text-yellow-800">
            IT Online Supervision System
          </div>
        </div>
        <div className="flex items-center justify-between w-[21%] ">
          <div className="font-semibold text-[0.9em] 2xl:block hidden hover:bg-[#F7F7F7] cursor-pointer rounded-3xl py-2 px-3">
            Kogi State University
          </div>
          <Link to="https://goo.gl/maps/McyqQtakFscxfsT37">
            <BiGlobe
              className=" 2xl:visible invisible text-[2.6em] hover:bg-[#F7F7F7] rounded-3xl cursor-pointer p-3"
            />
          </Link>
          <div className="border rounded-3xl flex xl:w-[30%] lg:w-[45%] md:w-[50%] w-[90%] sm:w-[60%] items-center p-1 gap-2 ps-3 hover:shadow-md cursor-pointer">
            <DropList
              menu={menuList}
              icon={<BiMenu className="text-[1.5em] pt-1" />}
            />
            {/* <BiMenu className="text-[1.5em]" /> */}
            <FaUserCircle className=" text-zinc-500 xl:text-[2em] text-[2.5em]" />
          </div>
        </div>
      </div>
    </div>
  );
}
