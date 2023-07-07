import React from "react";
import { MdEditAttributes } from "react-icons/md";

export default function Footer() {
  const listContent = [
    {
      id: 1,
      content: "© 2023 Airbnb, Inc",
      icon: null,
    },
    {
      id: 2,
      content: "Terms",
      icon: null,
    },
    {
      id: 3,
      content: "Sitemap",
      icon: null,
    },
    {
      id: 4,
      content: "Privacy",
      icon: null,
    },
    {
      id: 5,
      content: "Your Privacy Choices",
      icon: <MdEditAttributes />,
    },
    {
      id: 6,
      content: "Destinations",
      icon: null,
    },
  ];
  return (
    <div className="">
      <div className="w-[90%] m-auto p-2">
        <div>
          <ul className="flex gap-2 text-sm items-center">
            {listContent.map((content) => (
              <li
                className=" before:bg-black before:h-[1.6px] before:w-[1.6px] before:absolute before:me-9 flex items-center "
                key={content.id}
              >
                {content.content}
                <span className=" text-[#0066FF] text-3xl ps-2">
                  {content.icon}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
