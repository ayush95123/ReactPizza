import React from "react";
import ScrollReactiveImage from "./ScrollReactiveImage";
import "../css/aboutRestaurant.css";
import BouncingCircles from "./BouncingCircles";
import { RevealSection } from "./RevealSection";

export default function AboutRestaurant() {
  return (
    <div className="relative w-full h-full py-10 flex items-center justify-center">
      <BouncingCircles />
      <div className="hidden absolute right-0 top-[8%] z-10 lg:block">
        <ScrollReactiveImage
          src="/tomato-about.webp"
          alt="Tomato"
          className="size-[20vw] object-right object-contain"
          direction="vertical"
          offsetRange={[-50, 10]}
          scrollRange={[0, 2000]}
          rotate={false}
        />
      </div>
      <div className="relative z-20 h-full w-full max-w-[100rem] p-1 grid grid-cols-1 lg:grid-cols-6 gap-4 justify-items-center">
        <div className="flex items-center justify-center w-full h-full lg:col-span-4">
          <div className="flex items-center justify-center w-full">
            <ScrollReactiveImage
              src="/deliciousPizza.jpg"
              alt="Delicious Pizza"
              className=" w-full object-fill"
              offsetRange={[-50, 10]}
              scrollRange={[0, 2000]}
              direction="horizontal"
              rotate={false}
            />
          </div>
        </div>

        <div className="h-full flex flex-col items-start justify-center gap-5 lg:col-span-2 px-3 sm:px-7 py-2 ">
          <div>
            <RevealSection
              variants={{
                hidden: {
                  opacity: 0,
                  rotateY: -135,
                  y:50
                },
                visible: {
                  opacity: 1,
                  rotateY: 0,
                  y:0,
                  transition: { duration: 1 },
                },
              }}
            >
              <span className="text-2xl font-family-Bebas-Neue text-pizza-red">
                ____ BEST ITALIAN FOOD FOR YOUR FAMILY
              </span>
            </RevealSection>
          </div>
          <div>
            <RevealSection
              variants={{
                hidden: {
                  opacity: 0,
                  rotateY: -135,
                  y:50
                },
                visible: {
                  opacity: 1,
                  rotateY: 0,
                  y:0,
                  transition: { duration: 1, delay: 0.25 },
                },
              }}
            >
              <span className="text-6xl xxxs:text-7xl font-family-Bebas-Neue uppercase">
                The Amazing Pizza Parlor
              </span>
            </RevealSection>
          </div>
          <div>
            <RevealSection
              variants={{
                hidden: {
                  opacity: 0,
                  rotateY: -135,
                  y:50
                },
                visible: {
                  opacity: 1,
                  rotateY: 0,
                  y:0,
                  transition: { duration: 1, delay: 0.5 },
                },
              }}
            >
              <span className="text-gray-500">
                All about quality you can trust. As one of the original founding
                pizza brands and the 3rd largest pizza chain, our sole mission
                is making the freshest, tastiest.
              </span>
            </RevealSection>
          </div>
          <RevealSection
            variants={{
              hidden: {
                opacity: 0,
                rotateY: -135,
                y:50
              },
              visible: {
                opacity: 1,
                rotateY: 0,
                y:0,
                transition: { duration: 1, delay: 0.75 },
              },
            }}
          >
            <div className="relative overflow-hidden flex flex-wrap items-start justify-between gap-2">
              <div className="btn-fade-bg relative  rounded-sm px-5 py-2 bg-black text-white font-bebas transition-colors duration-500 hover:text-black z-10">
                <span className="relative z-20 flex items-center justify-center text-center font-family-Bebas-Neue uppercase">
                  About Restaurant
                </span>
              </div>
              <div className="flex items-center justify-center pl-2 py-1 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-pizza-red"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                  />
                </svg>
                <span className="font-family-Bebas-Neue text-xl">
                  1 800 222 000
                </span>
              </div>
            </div>
          </RevealSection>
        </div>

        <div className="w-full h-full lg:col-span-6 flex flex-wrap items-center justify-center gap-4">
          <div className="flex px-3 py-5 w-1/4 min-w-[10rem] gap-4 md:gap-10 items-center justify-center">
            <div className="group flex-1/3 aspect-square min-w-[3rem] rounded-full flex items-center justify-center shadow-2xl bg-white hover:bg-black transition-colors duration-500 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="size-8 group-hover:fill-white"
                viewBox="0 0 128 128"
              >
                <path d="M125,28.7l-33.8-12c-0.8-0.3-1.6-0.2-2.3,0.1C87.8,17.3,29,38.1,29,38.1c-1.5,0.5-2.5,1.9-2.5,3.5v14c0,1.3,0.8,2.4,2,2.8 l7.8,2.8c2,0.7,4-0.7,4-2.8V46.7c0-1.6,1-3,2.5-3.5l53.1-18.4l19.2,6.8L63,49.9c0,0,0,0,0,0c-1.1,0.4-2,1.5-2,2.8v60.8L7,94.4V33.6 l58-20.5c1.6-0.6,2.4-2.3,1.8-3.8c-0.6-1.6-2.3-2.4-3.8-1.8L3,28.7c-1.2,0.4-2,1.6-2,2.8v65c0,1.3,0.8,2.4,2,2.8l60,21.2 c0.3,0.1,0.7,0.2,1,0.2c0.2,0,0.3,0,0.5,0c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.4-0.1c0,0,0,0,0,0l60-21.2c1.2-0.4,2-1.6,2-2.8v-65 c0,0,0,0,0,0C127,30.2,126.2,29.1,125,28.7z"></path>
              </svg>
            </div>
            <div className="flex-2/3 flex flex-col">
              <div className="font-family-Bebas-Neue text-xl">
                Fast Delivery
              </div>
              <div className="text-gray-500 text-sm font-sans">
                Within 30 minutes
              </div>
            </div>
          </div>
          <div className="flex px-3 py-5 w-1/4 min-w-[10rem] gap-4 md:gap-10 items-center justify-center">
            <div className="group flex-1/3 aspect-square min-w-[3rem] rounded-full flex items-center justify-center shadow-2xl bg-white hover:bg-black  transition-colors duration-500 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-8 group-hover:stroke-white transition-colors duration-500 ease-in-out"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <div className="flex-2/3 flex flex-col">
              <div className="font-family-Bebas-Neue text-xl">
                Pickup Delivery
              </div>
              <div className="text-gray-500 text-sm font-sans">
                Grab your food order
              </div>
            </div>
          </div>
          <div className="flex px-3 py-5 w-1/4 min-w-[10rem] gap-4 md:gap-10 items-center justify-center">
            <div className="group flex-1/3 aspect-square min-w-[3rem] rounded-full flex items-center justify-center shadow-2xl bg-white hover:bg-black transition-colors duration-500 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="size-8 group-hover:stroke-white transition-colors duration-500 ease-in-out"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div className="flex-2/3 flex flex-col">
              <div className="font-family-Bebas-Neue text-xl">
                Absolute Dining
              </div>
              <div className="text-gray-500 text-sm font-sans">
                Best buffet Restaurant
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
