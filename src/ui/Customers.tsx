import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";

export default function Customers() {
  const slides = [
    {
      id: 1,
      content: (
        <div className=" w-full xxs:px-4 grid grid-cols-10 grid-rows-[auto_auto_auto_auto_auto] md:grid-rows-2">
          <div className="col-span-10 md:col-span-4 row-span-5 md:row-span-2 order-1 w-full h-full flex items-center justify-center md:h-full">
            <img
              src="../customer1.webp"
              alt="Customer 1"
              className="w-full h-full object-contain max-w-[15rem] "
            ></img>
          </div>
          <div className="relative col-span-10 md:col-span-1 md:row-span-2 order-4 md:order-2 w-full h-full flex items-center justify-center md:border-r md:border-gray-300">
            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] font-family-Bebas-Neue text-pizza-red text-3xl whitespace-nowrap">
              Herman MILLER
            </div>
            <div className="flex md:hidden w-full h-full items-center justify-start py-3 leading-none font-family-Bebas-Neue text-pizza-red text-xl xxxs:text-2xl xxs:text-3xl whitespace-nowrap">
              HERMAN MILLER
            </div>
          </div>
          <div className="col-span-10 md:col-span-5 md:row-span-1 order-2 md:order-3 flex items-start justify-center w-full h-full">
            <div className="py-3 md:p-5 flex items-center justify-center text-sm xxs:text-xl font-family-Outfit font-light">
              Super easy to order and track my pizza in real time. The UI is
              clean and fast — love the customization options
            </div>
          </div>
          <div className="col-span-10 md:col-span-5 order-3 md:order-4 md:p-5 flex items-center justify-start">
            <div className="w-fit px-3 md:px-6 py-2 bg-pizza-red rounded-2xl">
              <div className="hidden md:block">
                <StarRating
                  rating={5}
                  outOf={5}
                  fillColor="#fff"
                  strokeColor="#fff"
                  size={24}
                  gap="0.25rem"
                />
              </div>
              <div className="block md:hidden">
                <StarRating
                  rating={5}
                  outOf={5}
                  fillColor="#fff"
                  strokeColor="#fff"
                  size={15}
                  gap="0.1rem"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className=" w-full xxs:px-4 grid grid-cols-10 grid-rows-[auto_auto_auto_auto_auto] md:grid-rows-2">
          <div className="col-span-10 md:col-span-4 row-span-5 md:row-span-2 order-1 w-full h-full flex items-center justify-center md:h-full">
            <img
              src="../customer2.webp"
              alt="Customer 2"
              className="w-full h-full object-contain max-w-[15rem] "
            ></img>
          </div>
          <div className="relative col-span-10 md:col-span-1 md:row-span-2 order-4 md:order-2 w-full h-full flex items-center justify-center md:border-r md:border-gray-300">
            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] font-family-Bebas-Neue text-pizza-red text-3xl whitespace-nowrap">
              Alexander Moore
            </div>
            <div className="flex md:hidden w-full h-full items-center justify-start py-3 leading-none font-family-Bebas-Neue text-pizza-red text-xl xxxs:text-2xl xxs:text-3xl whitespace-nowrap">
              Alexander Moore
            </div>
          </div>
          <div className="col-span-10 md:col-span-5 md:row-span-1 order-2 md:order-3 flex items-start justify-center w-full h-full">
            <div className="py-3 md:p-5 flex items-center justify-center text-sm xxs:text-xl font-family-Outfit font-light">
              Great deals and fast delivery every time. The app makes reordering
              my favorites a breeze!
            </div>
          </div>
          <div className="col-span-10 md:col-span-5 order-3 md:order-4 md:p-5 flex items-center justify-start">
            <div className="w-fit px-3 md:px-6 py-2 bg-pizza-red rounded-2xl">
              <div className="hidden md:block">
                <StarRating
                  rating={5}
                  outOf={5}
                  fillColor="#fff"
                  strokeColor="#fff"
                  size={24}
                  gap="0.25rem"
                />
              </div>
              <div className="block md:hidden">
                <StarRating
                  rating={5}
                  outOf={5}
                  fillColor="#fff"
                  strokeColor="#fff"
                  size={15}
                  gap="0.1rem"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className=" w-full xxs:px-4 grid grid-cols-10 grid-rows-[auto_auto_auto_auto_auto] md:grid-rows-2">
          <div className="col-span-10 md:col-span-4 row-span-5 md:row-span-2 order-1 w-full h-full flex items-center justify-center md:h-full">
            <img
              src="../customer3.webp"
              alt="Customer 3"
              className="w-full h-full object-contain max-w-[15rem] "
            ></img>
          </div>
          <div className="relative col-span-10 md:col-span-1 md:row-span-2 order-4 md:order-2 w-full h-full flex items-center justify-center md:border-r md:border-gray-300">
            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] font-family-Bebas-Neue text-pizza-red text-3xl whitespace-nowrap">
              Mathew Taylor
            </div>
            <div className="flex md:hidden w-full h-full items-center justify-start py-3 leading-none font-family-Bebas-Neue text-pizza-red text-xl xxxs:text-2xl xxs:text-3xl whitespace-nowrap">
              Mathew Taylor
            </div>
          </div>
          <div className="col-span-10 md:col-span-5 md:row-span-1 order-2 md:order-3 flex items-start justify-center w-full h-full">
            <div className="py-3 md:p-5 flex items-center justify-center text-sm xxs:text-xl font-family-Outfit font-light">
              Smooth experience from browsing to checkout. Only wish they added
              more payment methods.
            </div>
          </div>
          <div className="col-span-10 md:col-span-5 order-3 md:order-4 md:p-5 flex items-center justify-start">
            <div className="w-fit px-3 md:px-6 py-2 bg-pizza-red rounded-2xl">
              <div className="hidden md:block">
                <StarRating
                  rating={5}
                  outOf={5}
                  fillColor="#fff"
                  strokeColor="#fff"
                  size={24}
                  gap="0.25rem"
                />
              </div>
              <div className="block md:hidden">
                <StarRating
                  rating={5}
                  outOf={5}
                  fillColor="#fff"
                  strokeColor="#fff"
                  size={15}
                  gap="0.1rem"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);
  return (
    <div className="w-full bg-beige overflow-clip">
      <div className="w-full xxs:mt-10 pt-10 flex items-center justify-center">
        <div className="w-full max-w-[100rem] grid grid-cols-3 px-5 md:px-20">
          <div className="col-span-3 md:col-span-1 flex flex-col items-start justify-center">
            <div className="font-family-Bebas-Neue text-xl xxxs:text-3xl xs:text-5xl text-pizza-red">
              FOOD LOVERS
            </div>
            <div className="font-family-Bebas-Neue text-2xl xxxs:text-5xl">
              Satisfied Customers
            </div>
            <div className="hidden xxxs:flex items-start justify-start gap-4 my-5">
              <div
                className="h-16 w-16 xxs:h-20 xxs:w-20 rounded-full shadow-2xl flex items-center justify-center hover:cursor-pointer group"
                onClick={prevSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 xxs:size-5 group-hover:stroke-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </div>
              <div
                className="h-16 w-16 xxs:h-20 xxs:w-20 rounded-full shadow-2xl flex items-center justify-center hover:cursor-pointer group"
                onClick={nextSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 xxs:size-5 group-hover:stroke-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative col-span-3 md:col-span-2  w-full flex items-center justify-center">
            <div className="invisible">{slides[0].content}</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[index].id}
                className={`absolute inset-0 flex items-center justify-center`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {slides[index].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="hidden xs:block relative w-full h-[12rem]">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[45%] text-[8rem] md:text-[15rem] font-family-Bebas-Neue text-white">
          SATISFIED
        </div>
      </div>
    </div>
  );
}
