import { pizzaMenu } from "../data/pizzaMenu-v1";
import React, { useState } from "react";
import { RevealSection } from "./RevealSection";

export default function ExclusiveMenu() {
  return (
    <div className="flex flex-col items-center justify-center w-full xs:mt-10 md:mt-20 px-4 py-10 overflow-clip max-w-[100rem]">
      <div className="flex w-full items-center justify-center flex-wrap text-center xxs:gap-4 xs:gap-5">
        <RevealSection>
          <span className="font-family-Bebas-Neue text-3xl xs:text-5xl text-pizza-red">
            Delicious Meals
          </span>
        </RevealSection>
        <span className="hidden sm:block w-px h-14 bg-gray-400"></span>
        <RevealSection
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.25 },
            },
          }}
        >
          <span className="font-family-Bebas-Neue text-5xl xs:text-7xl">
            Exclusive Menu
          </span>
        </RevealSection>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5 mt-10 ">
        {pizzaMenu.map((pizza) => (
          <RevealSection variants={{hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 , delay: 0.5} }}} key={pizza.name}>
          <div
            key={pizza.name}
            className="grid grid-cols-1 sm:grid-cols-10 transition-transform duration-300 hover:scale-105"
          >
            <div className="col-span-1 sm:col-span-3 flex items-center justify-center ">
              <div className="relative">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className=" max-w-[5rem]"
                />
                {pizza.overlay && (
                  <div
                    className={`absolute -top-2 -left-2 h-8 w-8 aspect-square rounded-full flex items-center justify-center ${
                      pizza.overlay.color === "red"
                        ? "bg-red-600"
                        : "bg-green-600"
                    } text-white font-family-Bebas-Neue text-sm`}
                  >
                    {pizza.overlay.label}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start justify-center text-center col-span-1 sm:col-span-6 px-4">
              <div className="flex items-center justify-center sm:justify-start">
                <span className="font-family-Bebas-Neue w-full text-lg flex items-center justify-center sm:justify-start text-center">
                  {pizza.name}
                </span>

                {pizza.tag && (
                  <div className="hidden xxxs:flex items-center justify-center text-center w-32 px-2 h-6 gap-2 rounded-2xl bg-gray-200">
                    {pizza.tag === "MUST TRY" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    )}
                    <div className="text-xs h-full font-family-Bebas-Neue flex items-center justify-center text-center leading-none py-1">
                      {pizza.tag}
                    </div>
                  </div>
                )}
              </div>
              <span className="w-full text-sm text-gray-500 flex items-center justify-center sm:justify-start sm:text-left">
                {pizza.description}
              </span>
            </div>
            <p className="col-span-1 sm:col-span-1 flex items-center justify-center font-family-Bebas-Neue">
              {pizza.price}$
            </p>
          </div>
          </RevealSection>
        ))}
      </div>
    </div>
  );
}
