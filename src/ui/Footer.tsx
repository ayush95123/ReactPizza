import React from "react";

export default function Footer() {
  return (
    <div className="relative w-full h-fit bg-neutral-800 bg-[url('../dark-grunge-bg.png')] md:mt-48">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="hidden md:block scale-y-[-1] fill-white -translate-y-px"
      >
        <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
      </svg>
      <div className="md:absolute left-1/2 top-0 transform md:-translate-x-1/2 md:-translate-y-[5rem] w-full h-fit max-w-[100rem] flex flex-col md:flex-row gap-10 items-center justify-evenly mt-10 md:mt-0">
        <div className="h-[10rem] w-[90%] md:w-[40%] max-w-[26rem] flex items-center justify-center bg-gray-200 rounded-sm overflow-clip">
          <div className="flex-2/5 w-full h-full flex items-center justify-center pl-3">
            <div className="flex flex-col w-full h-full">
              <div className="flex-3/5 flex flex-col h-full items-start justify-center">
                <div className="font-family-Bebas-Neue text-sm xxs:text-lg sm:text-xl text-pizza-red">
                  MOST POPULAR
                </div>
                <div className="font-family-Bebas-Neue text-sm xxs:text-xl sm:text-2xl">
                  SPECIAL DELICIOUS
                </div>
              </div>
              <div className="flex-2/5">
                <div className="h-10 w-[60%] bg-gray-100 text-sm flex items-center justify-center font-family-Bebas-Neue rounded-sm shadow-lg">
                  ORDER NOW
                </div>
              </div>
            </div>
          </div>
          <div className="flex-3/5 h-full">
            <img
              src="../free-drinks.png"
              className="w-full h-full object-right-bottom object-contain"
            ></img>
          </div>
        </div>
        <div className="h-[10rem]  w-[90%] md:w-[40%] max-w-[26rem] flex items-center justify-center bg-gray-200 rounded-sm">
          <div className="flex-3/5 h-full">
            <img
              src="../delivery.png"
              className="w-full h-full object-left-bottom object-contain"
            ></img>
          </div>
          <div className="flex-2/5 h-full">
            <div className="flex flex-col w-full h-full">
              <div className="flex-3/5 flex flex-col h-full items-start justify-center">
                <div className="font-family-Bebas-Neue text-sm xxs:text-lg sm:text-xl text-pizza-red">
                  ORDER $50
                </div>
                <div className="font-family-Bebas-Neue text-sm xxs:text-xl sm:text-2xl">
                  FASTEST DELIVERY
                </div>
              </div>
              <div className="flex-2/5">
                <div className="h-10 w-[60%] bg-gray-100 text-sm flex items-center justify-center font-family-Bebas-Neue rounded-sm shadow-lg">
                  ORDER NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-10 px-3">
        <span className="font-family-Bebas-Neue text-lg xxs:text-2xl sm:text-4xl text-white text-center">
          Unforgettable home delivery experience
          <span className="underline">+1 234 567 8910</span>
        </span>
      </div>
      <div className="w-full max-w-[100rem] h-fit grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 items-start justify-center my-20 gap-5">
        <div className="col-span-1 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-14 text-white"
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
          <span className="font-family-Bebas-Neue text-lg xxs:text-xl sm:text-2xl text-white text-center">
            Crusto
          </span>
        </div>
        <div className="col-span-1 flex flex-col items-center xs:items-start justify-center text-center px-5">
          <span className="font-semibold text-white">Find our restaurants</span>
          <span className="font-light text-slate-400">
            401 Broadway, 24th Floor New York, NY 10013
          </span>
        </div>
        <div className="col-span-1 flex flex-col items-center lg:items-start justify-center text-center px-5">
          <span className="font-semibold text-white">Opening hours</span>
          <span className="font-light text-slate-400">Monday - Sunday</span>
          <span className="font-light text-slate-400">9:00 AM to 11:30 PM</span>
        </div>
        <div className="col-span-1 flex flex-col items-center xs:items-start justify-center px-5 gap-2">
          <span className="font-semibold text-white">Connect with us</span>
          <div className="flex items-center justify-start gap-2">
            <div className="group w-10 h-10 aspect-square bg-neutral-700 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-colors duration-1000 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="size-5 fill-white group-hover:fill-black"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
              </svg>
            </div>
            <div className="group w-10 h-10 aspect-square bg-neutral-700 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-colors duration-1000 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="size-5 fill-white group-hover:fill-black"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </div>
            <div className="group w-10 h-10 aspect-square bg-neutral-700 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-colors duration-1000 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="size-5 fill-white group-hover:fill-black"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit border-t border-neutral-600 py-5 px-2 flex items-center justify-center">
        <div className="w-full max-w-[100rem] flex flex-col xxs:flex-row items-center justify-center flex-wrap gap-5">
          <div className="flex-7/12 flex items-center justify-center gap-5 flex-wrap">
            <span className="font-light  text-slate-400">Home</span>
            <span className="font-light  text-slate-400">About</span>
            <span className="font-light  text-slate-400">Menu</span>
            <span className="font-light  text-slate-400">Chefs</span>
            <span className="font-light  text-slate-400">Franchise</span>
            <span className="font-light  text-slate-400">Contact</span>
          </div>
          <div className="flex-3/12 flex items-center justify-center">

            <span className="font-light text-slate-400 xxs:text-nowrap text-center">©️2025 Crusto made by Ayush Singh</span>
          </div>
        </div>
      </div>
    </div>
  );
}
