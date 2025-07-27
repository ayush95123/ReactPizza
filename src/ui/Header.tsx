import React, { type JSX } from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import MobileNavMenu from "./MobileNavMenu";

/**
 * Renders the header component of the application with a responsive
 * navigation bar. Includes a mobile hamburger menu, a logo, links to
 * various sections of the application, and a cart button.
 *
 * - Mobile view includes a hamburger menu icon, a central logo, and a cart icon.
 * - Desktop view includes a phone number, navigation links, and a cart button.
 *
 * The header is styled with a gradient background and various icons
 * and links are displayed conditionally based on screen size.
 */

export default function Header(): JSX.Element {
  return (
    <header className="w-full bg-gradient-to-br from-pizza-red to-pizza-dark py-1 xxxs:py-4 relative z-50">
      <div className=" mx-auto flex items-center justify-between">
        {/*         <!-- Mobile Navigation */}
        {/*         Hamburger Menu */}
        <div className="md:hidden ml-3">
          <MobileNavMenu />
        </div>

        {/*         <!-- Logo */}
        <div className="md:hidden absolute left-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 xxxs:size-9 xxs:size-10 xs:size-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
            />
          </svg>
        </div>
        {/*         <!-- Cart */}
        <div className="flex items-center justify-center md:hidden mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 xxxs:size-6 xxs:size-7  text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>

        {/*         <!-- Desktop Navigation */}
        {/*         <!-- Phone */}
        <div className="text-white text-sm hidden md:flex items-center ml-3">
          <p className="mr-2 bg-pizza-dark rounded-full p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </p>
          <p className="font-family-Bebas-Neue ">1 800 222 000</p>
        </div>

        {/*         <!-- Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#home"
                className="text-white  uppercase tracking-wide hover:text-gray-300 transition-colors font-family-Bebas-Neue text-xl"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white  font-family-Bebas-Neue text-xl uppercase tracking-wide hover:text-gray-300 transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="text-white  font-family-Bebas-Neue text-xl uppercase tracking-wide hover:text-gray-300 transition-colors"
              >
                MENU
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-9 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    />
                  </svg>
                </p>
                {/* <p className="ml-2 text-white text-xl">Crusto</p> */}
              </div>
            </li>
            <li>
              <a
                href="#chefs"
                className="text-white  font-family-Bebas-Neue text-xl uppercase tracking-wide hover:text-gray-300 transition-colors"
              >
                CHEFS
              </a>
            </li>
            <li>
              <a
                href="#franchise"
                className="text-white  font-family-Bebas-Neue text-xl uppercase tracking-wide hover:text-gray-300 transition-colors"
              >
                FRANCHISE
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white  text-xl font-family-Bebas-Neue uppercase tracking-wide hover:text-gray-300 transition-colors"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        {/*         <!-- Cart Button */}
        <div className="hidden md:flex items-center justify-center gap-4 bg-pizza-dark rounded-full p-2 mr-3">
          <button className="order-btn text-white text-sm px-3 flex items-center justify-center gap-2 group relative overflow-hidden">
            {/* Incoming icon from left (visually balanced padding) */}
            <span className="absolute left-0 flex items-center h-full">
              <span className="pl-2 opacity-0 -translate-x-5 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </span>
            </span>

            {/* Button Text */}
            <p className=" transform transition-transform duration-500 ease-in-out group-hover:translate-x-6 font-family-Bebas-Neue text-sm">
              CART
            </p>

            {/* Outgoing icon */}
            <span className="transition-all duration-500 ease-in-out group-hover:translate-x-20 group-hover:opacity-0 pr-">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
