import React from "react";
import StarRating from "./StarRating";
import ScrollReactiveImage from "./ScrollReactiveImage";
import { RevealSection } from "./RevealSection";

export default function Signature() {
  return (
    <div className="relative w-full bg-beige flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-[100rem] py-10 overflow-clip">
        <div className="flex w-full items-center justify-center flex-wrap text-center xxs:gap-4 xs:gap-5">
          <RevealSection>
            <span className="font-family-Bebas-Neue text-3xl xs:text-5xl text-pizza-red">
              OUR SIGNATURE
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
              POPULAR PIZZA
            </span>
          </RevealSection>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-5">
          <RevealSection
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
              },
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2 rounded-sm hover:bg-white transition-colors ease-in-out duration-300 hover:shadow-2xl">
              <ScrollReactiveImage
                src="/pizza-1.png"
                className="w-[15rem]"
                scrollRange={[0, 1000]}
                offsetRange={[-50, 50]}
                rotate={true}
                rotationPerScroll={10}
                scrollDownRotationDirection="ccw"
                scrollUpRotationDirection="cw"
                duration={1}
                alt="Mexican Green Wave"
              />
              <div className="flex items-center justify-center gap-2 bg-yellow-500 mt-[3rem] pl-3 w-fit rounded-sm">
                <StarRating
                  rating={4.4}
                  outOf={5}
                  size={15}
                  gap="1px"
                  fillColor="#fff"
                  strokeColor="#fff"
                />
                <div className="px-2 py-1 h-full bg-black text-white rounded-r-sm font-family-Bebas-Neue flex items-center justify-center text-center">
                  4.3
                </div>
              </div>
              <span className="font-family-Bebas-Neue text-2xl mt-3 flex items-center justify-center text-center">
                Mexican Green Wave
              </span>
              <div className="w-full flex items-center justify-center gap-5 mb-5">
                <span className="font-family-Bebas-Neue line-through text-2xl text-pizza-red">
                  $25.00
                </span>
                <span className="font-family-Bebas-Neue text-2xl">$19.00</span>
              </div>
            </div>
          </RevealSection>
          <RevealSection
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.25 },
              },
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2 rounded-sm hover:bg-white transition-colors ease-in-out duration-300 hover:shadow-2xl">
              <ScrollReactiveImage
                src="/pizza-2.png"
                className="w-[15rem]"
                scrollRange={[0, 1000]}
                offsetRange={[-50, 50]}
                rotate={true}
                rotationPerScroll={10}
                scrollDownRotationDirection="cw"
                scrollUpRotationDirection="ccw"
                duration={1}
                alt="Mexican Green Wave"
              />
              <div className="flex items-center justify-center gap-2 bg-yellow-500 mt-[3rem] pl-3 w-fit rounded-sm">
                <StarRating
                  rating={5}
                  outOf={5}
                  size={15}
                  gap="1px"
                  fillColor="#fff"
                  strokeColor="#fff"
                />
                <div className="px-2 py-1 h-full bg-black text-white rounded-r-sm font-family-Bebas-Neue flex items-center justify-center text-center">
                  5.0
                </div>
              </div>
              <span className="font-family-Bebas-Neue text-2xl mt-3 flex items-center justify-center text-center">
                Indi Tandoori Paneer
              </span>
              <div className="w-full flex items-center justify-center gap-5 mb-5">
                <span className="font-family-Bebas-Neue line-through text-2xl text-pizza-red">
                  $24.00
                </span>
                <span className="font-family-Bebas-Neue text-2xl">$18.00</span>
              </div>
            </div>
          </RevealSection>
          <RevealSection
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.5 },
              },
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2 rounded-sm hover:bg-white transition-colors ease-in-out duration-300 hover:shadow-2xl">
              <ScrollReactiveImage
                src="/pizza-03.png"
                className="w-[15rem]"
                scrollRange={[0, 1000]}
                offsetRange={[-50, 50]}
                rotate={true}
                rotationPerScroll={10}
                scrollDownRotationDirection="ccw"
                scrollUpRotationDirection="cw"
                duration={1}
                alt="Mexican Green Wave"
              />
              <div className="flex items-center justify-center gap-2 bg-yellow-500 mt-[3rem] pl-3 w-fit rounded-sm">
                <StarRating
                  rating={4.0}
                  outOf={5}
                  size={15}
                  gap="1px"
                  fillColor="#fff"
                  strokeColor="#fff"
                />
                <div className="px-2 py-1 h-full bg-black text-white rounded-r-sm font-family-Bebas-Neue flex items-center justify-center text-center">
                  4.0
                </div>
              </div>
              <span className="font-family-Bebas-Neue text-2xl mt-3 flex items-center justify-center text-center">
                Double Chicken Sausage
              </span>
              <div className="w-full flex items-center justify-center gap-5 mb-5">
                <span className="font-family-Bebas-Neue line-through text-2xl text-pizza-red">
                  $22.00
                </span>
                <span className="font-family-Bebas-Neue text-2xl">$20.00</span>
              </div>
            </div>
          </RevealSection>
          <RevealSection
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.75 },
              },
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2 rounded-sm hover:bg-white transition-colors ease-in-out duration-300 hover:shadow-2xl">
              <ScrollReactiveImage
                src="/pizza-4.png"
                className="w-[15rem]"
                scrollRange={[0, 1000]}
                offsetRange={[-50, 50]}
                rotate={true}
                rotationPerScroll={10}
                scrollDownRotationDirection="ccw"
                scrollUpRotationDirection="cw"
                duration={1}
                alt="Mexican Green Wave"
              />
              <div className="flex items-center justify-center gap-2 bg-yellow-500 mt-[3rem] pl-3 w-fit rounded-sm">
                <StarRating
                  rating={4.4}
                  outOf={5}
                  size={15}
                  gap="1px"
                  fillColor="#fff"
                  strokeColor="#fff"
                />
                <div className="px-2 py-1 h-full bg-black text-white rounded-r-sm font-family-Bebas-Neue flex items-center justify-center text-center">
                  4.4
                </div>
              </div>
              <span className="font-family-Bebas-Neue text-2xl mt-3 flex items-center justify-center text-center">
                Grilled Veal Cooked
              </span>
              <div className="w-full flex items-center justify-center gap-5 mb-5">
                <span className="font-family-Bebas-Neue line-through text-2xl text-pizza-red">
                  $20.00
                </span>
                <span className="font-family-Bebas-Neue text-2xl">$16.00</span>
              </div>
            </div>
          </RevealSection>
        </div>
        <div className="hidden xs:block relative w-full h-[9rem]">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[55%] text-[8rem] md:text-[15rem] font-family-Bebas-Neue text-white">
            SIGNATURE
          </div>
        </div>
      </div>
      <div className="hidden xs:flex absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full aspect-square bg-black items-center justify-center h-24 md:h-36 w-24 md:w-36">
        <span className="font-family-Bebas-Neue flex items-center justify-center text-center text-white text-lg md:text-2xl ">
          EXPLORE
          <br />
          MENU
        </span>
      </div>
    </div>
  );
}
