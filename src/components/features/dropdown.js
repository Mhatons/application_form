import React from 'react'
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropList({icon, menu}) {

  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button className="">
          {icon}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {
             menu?.length >= 1 ? (
              menu.map((menuList) => (
               <Menu.Item>
              {({ active }) => (
                <Link to={menuList.link}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {menuList.title}
                </Link>
              )}
            </Menu.Item>
              ))
             ): null
            }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

  )
}
