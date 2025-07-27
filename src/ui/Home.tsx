import React, { useEffect, useRef, useState, type JSX } from "react";
import { motion } from "motion/react";
import "../css/home.css";
import FoodCategory from "./FoodCategory";
import AboutRestaurant from "./AboutRestaurant";
import Signature from "./Signature";
import ExclusiveMenu from "./ExclusiveMenu";
import Customers from "./Customers";
import ChooseUs from "./ChooseUs";
import Footer from "./Footer";
function Home(): JSX.Element {
  const pizzaRef = useRef<HTMLImageElement>(null);
  // const [pizzaTop, setPizzaTop] = useState(0);
  // const [pizzaMidY, setPizzaMidY] = useState(0);

  // const measurePizzaPosition = () => {
  //   if (pizzaRef.current) {
  //     const rect = pizzaRef.current.getBoundingClientRect();
  //     const midY = rect.top + window.scrollY + rect.height / 2;
  //     // setPizzaTop(rect.top + window.scrollY);
  //     setPizzaMidY(midY);
  //   }
  // };

  // useEffect(() => {
  //   measurePizzaPosition();
  //   window.addEventListener("resize", measurePizzaPosition);
  //   window.addEventListener("scroll", measurePizzaPosition);
  //   return () => {
  //     window.removeEventListener("resize", measurePizzaPosition);
  //     window.removeEventListener("scroll", measurePizzaPosition);
  //   };
  // }, []);

  // const handlePizzaLoad = () => {
  //   measurePizzaPosition();
  // };

  return (
    <div className="relative w-full h-full min-h-dvh items-center">
      {/* background red */}
      <img
        src="../redBg.webp"
        className="absolute inset-0 w-full h-full object-cover -z-10 "
      />
      {/* background stripe */}
      <img
        src="../blStripebg.webp"
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-5 md:opacity-15 -z-10"
      />
      {/* div wrappin typo+pizza */}
      <div className=" relative h-full w-full ">
        {/* div wrapping both original & italian */}
        <div className="relative h-full w-full z-10">
          {/* div for original typo img */}
          <div className="flex items-center justify-center pt-2 xxxs:pt-3 xxs:pt-4 xs:pt-5 sm:pt-6 md:pt-7 lg:pt-12 xl:pt-20">
            <img
              src="/originaltypo.png"
              alt="Original"
              className="w-25 xxxs:w-30 xxs:w-56 xs:w-60 sm:w-70 md:w-80 "
            />
          </div>
          {/* div for italian typo img */}
          <div className=" flex items-center justify-center ">
            <img
              src="/italianTypo1.png"
              alt="Italian"
              className="w-50 xxxs:w-60 xxs:w-[25rem] xs:w-[30rem] sm:w-[35rem] lg:w-[45rem] xl:w-[55rem] -mt-2 xxxs:-mt-3 xxs:-mt-4"
            />
          </div>
        </div>
        <div className="-mt-10 xxxs:-mt-12 xxs:-mt-20 md:-mt-36 lg:-mt-60 xl:-mt-80 relative h-[12rem] xxxs:h-[14rem] xxs:h-[25rem] xs:h-[30rem] sm:h-[32rem] md:h-[40rem] lg:h-[55rem] xl:h-[60rem] w-full flex flex-col items-center justify-start overflow-hidden ">
          {/* tomato img */}
          <div className="hidden md:block absolute -left-[5rem] top-[20%] z-50">
            <img
              src="../tomato.webp"
              alt="tomato"
              className="w-[12rem] xl:w-[15rem] 2xl:w-[18vw]"
            />
          </div>
          {/* capsicum img */}
          <div className="hidden md:block absolute -right-[5rem] -top-[10%] lg:-top-[0%] z-50">
            <img
              src="../capsicum.webp"
              alt="capsicum"
              className="w-[12rem] xl:w-[16rem] 2xl:w-[20vw]"
            />
          </div>
          {/* added div to cover pizza image so that we set today offer relatively */}
          <div className="relative h-full w-full md:w-[52rem] lg:w-[68rem] xl:w-[80rem]">
            {/* today offer */}
            <div className="hidden xs:block absolute right-0 top-[20%] lg:top-[30%] z-10">
              <div className="relative w-fit h-fit">
                <div className="absolute z-20 top-[2rem] right-[3.3rem] font-family-Bebas-Neue text-center text-3xl tracking-tight">
                  <span className="block">Today</span>
                  <span className="block">Offer</span>
                </div>
                <div className="bg-pink-300">
                  <motion.img
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    src="../yellow-offer.png"
                    alt="offer"
                    className="absolute w-[18rem] z-10 translate-x-[4rem] -translate-y-[5rem]"
                  ></motion.img>
                </div>

                <img
                  src="../leaf.png"
                  alt="leaf"
                  className="w-[18rem] translate-x-[5rem]"
                />
              </div>
            </div>
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              src="../pizza.webp"
              className="absolute top-0 left-1/2 translate-x-[-50%] w-[15rem] xxxs:w-[24rem] xxs:w-[36rem] xs:w-[50rem] md:w-[60rem] lg:w-[90rem] xl:w-[100rem] max-w-[100rem] -translate-y-4"
            ></motion.img>
          </div>
          {/* Curved SVG with Order Button */}
          <div className=" absolute h-fit bottom-0 w-full overflow-visible">
            <div className="h-[5rem] xxxs:h-[6rem] xxs:h-[10rem] md:h-[12rem] lg:h-[16rem] 2xl:h-[20rem] w-full">
              <div className="mask-[url(#concave-mask)] w-full h-full relative">
                <img
                  src="../curvedBG.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute w-[5rem] h-[5rem] xxxs:w-[6rem] xxxs:h-[6rem] xxs:w-[10rem] xxs:h-[10rem] lg:h-[14rem] lg:w-[14rem] 2xl:w-[16rem] 2xl:h-[16rem] rounded-full bg-yellow-500 -top-4 left-1/2 -translate-x-1/2 " />
              </div>
              {/* Order button */}
              <div className="absolute z-10 w-[4rem] h-[4rem] xxxs:h-[5rem] xxxs:w-[5rem] xxs:h-[8.5rem] xxs:w-[8.5rem] lg:w-[12rem] lg:h-[12rem] 2xl:w-[14rem] 2xl:h-[14rem] bg-white rounded-full left-1/2 top-0 -translate-x-1/2 -translate-y-[10px] flex items-center justify-center shadow-lg">
                <div className="text-[14px] xxxs:text-[20px] xxs:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-center font-family-Bebas-Neue uppercases flex flex-col items-center -space-y-2 xxxs:-space-y-3 lg:-space-y-6 xl:-space-y-8">
                  <span className="tracking-wide xxxs:tracking-normal xxs:tracking-tight">
                    ORDER
                  </span>
                  <span className="tracking-wide xxxs:tracking-normal xxs:tracking-tight">
                    PIZZA
                  </span>
                </div>
                <div className="absolute h-5 w-5 xxxs:h-7 xxxs:w-7 xxs:h-12 xxs:w-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 bg-pizza-red top-0 rounded-full -translate-y-[50%] flex items-center justify-center hover:scale-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-[50%] h-[50%] xxxs:w-[50%] xxxs:h-[50%]"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
              <svg className="w-0 h-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <mask
                    id="concave-mask"
                    maskUnits="objectBoundingBox"
                    maskContentUnits="objectBoundingBox"
                  >
                    <rect x="0" y="0" width="1" height="1" fill="white" />
                    <path
                      d="M0,0 C0.25,0.6 0.75,0.6 1,0 L1,0 L0,0 Z"
                      fill="black"
                      // shape-rendering="crispEdges"
                    />
                  </mask>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="relative  -mt-px flex flex-col items-center justify-start bg-white">
          <FoodCategory />
          <AboutRestaurant />
          <Signature />
          <ExclusiveMenu />
          <Customers />
          <ChooseUs />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
