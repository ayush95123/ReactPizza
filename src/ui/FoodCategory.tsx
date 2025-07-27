import React, { useRef } from "react";
import "../css/foodCategory.css";
import ScrollReactiveImage from "./ScrollReactiveImage";
import { RevealSection } from "./RevealSection";

function FoodCategory() {
  return (
    <div className="box-with-bottom-shadow relative w-full pb-10 overflow-clip">
      <div className="absolute left-0 top-0 hidden md:block -z-10">
        <ScrollReactiveImage
          src="../capsicum-category.jpg"
          alt="capsicum"
          className="size-[20vw] 2xl:size-[10vw] object-cover"
          scrollRange={[0, 2000]}
          offsetRange={[0, 90]}
          rotate={false}
        />
      </div>
      <div className="relative -mt-px flex flex-col items-center justify-center w-full space-y-10 xxs:py-10 2xl:pt-0 z-10">
        <div className="relative flex w-full items-center justify-center xxxs:py-5 xxs:py-10">
          <RevealSection>
            <p className="text-2xl xxxs:text-3xl xxs:text-5xl 2xl:text-7xl font-family-Bebas-Neue text-center">
              THE TRUE TASTE OF ITALY
            </p>
          </RevealSection>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] xxxs:grid-cols-2 xxs:grid-cols-3 md:grid-cols-6 place-items-center justify-items-center gap-y-2 xxs:gap-y-6 w-full xxxs:w-fit">
            {/* Pizza Category */}
            <RevealSection
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0, transition: { duration: 1 } },
              }}
            >
              <div className="group h-19 w-28 xxs:h-24 xxs:w-36 md:h-28 md:w-32 2xl:w-40 2xl:h-32 transition-transform duration-300 ease-out hover:-translate-y-1 xs:border-r xs:border-r-gray-100 flex flex-col">
                <div className="absolute top-3 right-8 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  25
                </div>
                <div className="flex-7 flex items-center justify-center">
                  <img
                    src="../pizzaCategory.svg"
                    alt=""
                    className="transition duration-300 group-hover:opacity-70 size-10 xxs:size-16 md:size-11 2xl:size-15"
                  />
                </div>
                <div className="flex-3 flex items-center justify-center">
                  <span className="relative text-md xxxs:text-xl 2xl:text-2xl uppercase font-family-Bebas-Neue">
                    Pizza
                    <span className="absolute bottom-0 left-0 h-[2px] bg-black w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600 ease-in-out group-hover:origin-left" />
                  </span>
                </div>
              </div>
            </RevealSection>
            {/* Burger Category */}
            <RevealSection
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.25},
                },
              }}
            >
              <div className="group h-19 w-28 xxs:h-24 xxs:w-36 md:h-28 md:w-32 2xl:w-40 2xl:h-32 transition-transform duration-300 ease-out hover:-translate-y-1 xs:border-r xs:border-r-gray-100 flex flex-col">
                <div className="absolute top-3 right-8 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  20
                </div>
                <div className="flex-7 flex items-center justify-center">
                  <img
                    src="../burgerCategory.svg"
                    alt=""
                    className="transition duration-300 group-hover:opacity-70 size-10 xxs:size-16 md:size-11 2xl:size-15"
                  />
                </div>
                <div className="flex-3 flex items-center justify-center">
                  <span className="relative text-md xxxs:text-xl 2xl:text-2xl uppercase font-family-Bebas-Neue">
                    Burger
                    <span className="absolute bottom-0 left-0 h-[2px] bg-black w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600 ease-in-out group-hover:origin-left" />
                  </span>
                </div>
              </div>
            </RevealSection>
            {/* Salad Category */}
            <RevealSection
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.5 },
                },
              }}
            >
              <div className="group h-19 w-28 xxs:h-24 xxs:w-36 md:h-28 md:w-32 2xl:w-40 2xl:h-32 transition-transform duration-300 ease-out hover:-translate-y-1 md:border-r  md:border-r-gray-100 flex flex-col">
                <div className="absolute top-3 right-8 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  35
                </div>
                <div className="flex-7 flex items-center justify-center">
                  <img
                    src="../saladCategory.svg"
                    alt=""
                    className="transition duration-300 group-hover:opacity-70 size-10 xxs:size-16 md:size-11 2xl:size-15"
                  />
                </div>
                <div className="flex-3 flex items-center justify-center">
                  <span className="relative text-md xxxs:text-xl 2xl:text-2xl uppercase font-family-Bebas-Neue">
                    Salad
                    <span className="absolute bottom-0 left-0 h-[2px] bg-black w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600 ease-in-out group-hover:origin-left" />
                  </span>
                </div>
              </div>
            </RevealSection>
            {/* Fries Category */}
            <RevealSection
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.75 },
                },
              }}
            >
              <div className="group h-19 w-28 xxs:h-24 xxs:w-36 md:h-28 md:w-32 2xl:w-40 2xl:h-32 transition-transform duration-300 ease-out hover:-translate-y-1 xs:border-r xs:border-r-gray-100 flex flex-col">
                <div className="absolute top-3 right-8 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  8
                </div>
                <div className="flex-7 flex items-center justify-center">
                  <img
                    src="../friesCategory.svg"
                    alt=""
                    className="transition duration-300 group-hover:opacity-70 size-10 xxs:size-16 md:size-11 2xl:size-15"
                  />
                </div>
                <div className="flex-3 flex items-center justify-center">
                  <span className="relative text-md xxxs:text-xl 2xl:text-2xl uppercase font-family-Bebas-Neue">
                    Fries
                    <span className="absolute bottom-0 left-0 h-[2px] bg-black w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600 ease-in-out group-hover:origin-left" />
                  </span>
                </div>
              </div>
            </RevealSection>
            {/* Drinks Category */}
            <RevealSection
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 1 },
                },
              }}
            >
              <div className="group h-19 w-28 xxs:h-24 xxs:w-36 md:h-28 md:w-32 2xl:w-40 2xl:h-32 transition-transform duration-300 ease-out hover:-translate-y-1 xs:border-r xs:border-r-gray-100 flex flex-col">
                <div className="absolute top-3 right-8 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  10
                </div>
                <div className="flex-7 flex items-center justify-center">
                  <img
                    src="../drinksCategory.svg"
                    alt=""
                    className="transition duration-300 group-hover:opacity-70 size-10 xxs:size-16 md:size-11 2xl:size-15"
                  />
                </div>
                <div className="flex-3 flex items-center justify-center">
                  <span className="relative text-md xxxs:text-xl 2xl:text-2xl uppercase font-family-Bebas-Neue">
                    Drinks
                    <span className="absolute bottom-0 left-0 h-[2px] bg-black w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600 ease-in-out group-hover:origin-left" />
                  </span>
                </div>
              </div>
            </RevealSection>
            {/* Chicken Category */}
            <RevealSection
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 1.25 },
                },
              }}
            >
              <div className="group h-19 w-28 xxs:h-24 xxs:w-36 md:h-28 md:w-32 2xl:w-40 2xl:h-32 transition-transform duration-300 ease-out hover:-translate-y-1 flex flex-col">
                <div className="absolute top-3 right-8 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  20
                </div>
                <div className="flex-7 flex items-center justify-center">
                  <img
                    src="../chickenCategory.svg"
                    alt=""
                    className="transition duration-300 group-hover:opacity-70 size-10 xxs:size-16 md:size-11 2xl:size-15"
                  />
                </div>
                <div className="flex-3 flex items-center justify-center">
                  <span className="relative text-md xxxs:text-xl 2xl:text-2xl uppercase font-family-Bebas-Neue">
                    Chicken
                    <span className="absolute bottom-0 left-0 h-[2px] bg-black w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600 ease-in-out group-hover:origin-left" />
                  </span>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCategory;
