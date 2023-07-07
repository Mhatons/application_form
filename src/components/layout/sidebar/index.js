import React from 'react'
import image from "../../assets/graduate-wage-gap.webp";

export default function Sidebar() {
  return (
    <div>
      <div className=" bg-zinc-600">
        <img
          src={image}
          alt=""
          className=" opacity-20 sm:h-[88vh] h-[38vh]  object-cover"
        />
      </div>
    </div>
  );
}
