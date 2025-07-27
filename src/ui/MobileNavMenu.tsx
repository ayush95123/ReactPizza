import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

// https://headlessui.com/react/menu docs
export default function MobileNavMenu() {
  return (
    <Menu>
      <MenuButton className="focus:outline-none focus-visible:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 26 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4 xxxs:size-6  xxs:size-7 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5 M2.25 12h21.5 M3.75 17.25h16.5"
          />
        </svg>
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="[--anchor-gap:20px] w-full h-fit backdrop-blur-xl shadow-xl outline-none rounded-b-md z-50"
      >
        <MenuItem>
          <a
            className="block data-focus:bg-pizza-dark rounded-2xl text-center p-1 text-white"
            href="/settings"
          >
            <p className="font-family-Bebas-Neue text-xl">Home</p>
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="block data-focus:bg-pizza-dark rounded-2xl text-center p-1 text-white"
            href="/support"
          >
            <p className="font-family-Bebas-Neue text-xl">About</p>
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="block data-focus:bg-pizza-dark rounded-2xl text-center p-1 text-white"
            href="/license"
          >
            <p className="font-family-Bebas-Neue text-xl">Menu</p>
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="block data-focus:bg-pizza-dark rounded-2xl text-center p-1 text-white"
            href="/license"
          >
            <p className="font-family-Bebas-Neue text-xl">Chefs</p>
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="block data-focus:bg-pizza-dark rounded-2xl text-center p-1 text-white"
            href="/license"
          >
            <p className="font-family-Bebas-Neue text-xl">Franchise</p>
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="block data-focus:bg-pizza-dark rounded-2xl text-center p-1 text-white"
            href="/license"
          >
            <p className="font-family-Bebas-Neue text-xl">Contact</p>{" "}
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
