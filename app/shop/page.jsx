"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

import Fade from './Fade';


function Part({ className, img, item, brand, ml, price }) {
  return (
    <div className={`px-5 py-5  ${className}`}>
      <div className="size-96 cursor-pointer scale-90 hover:scale-110 duration-1000">
        <div className="flex justify-center items-center">
          <img src={img} alt={item} className="size-52 object-cover" />
        </div>
        <div className="">
          <p className="text-white text-md flex justify-center items-center">
            {brand}
          </p>
          <div className="flex justify-center items-center space-x-5">
            <p className="">⭐⭐⭐⭐⭐</p>
            <p className="text-white">{ml}</p>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <p className="text-amber-900 text-md ">{price}</p>
            <p className="text-white">(100ml)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopPage() {
  const [item, setItem] = useState("Collection");
  return (
    <>
      <div className="bg-black">
        
        <Nav />

        <Fade>
          <div className="min-h-[800px] ">
          <p className="flex justify-center py-7 text-amber-500 text-3xl">
            Our Collection
          </p>
          <div className=" flex flex-col md:flex-row justify-center items-center gap-5 ">
            <div className="size-52 scale-90 duration-1500 ease-in-out cursor-pointer   hover:scale-110">
              <img src="1.png" alt="" className="size-full object-cover" />
            </div>
            <div className="min-h-52 min-w-80 scale-90 duration-1500 ease-in-out cursor-pointer   hover:scale-110">
              <img src="2.png" alt="" className="size-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row  justify-center items-center gap-5">
            <div className="size-64 scale-90 duration-1500 ease-in-out cursor-pointer   hover:scale-110">
              <img src="3.png" alt="" className="size-60 object-cover" />
            </div>
            <div className="min-h-64 min-w-96  scale-90 duration-1500 ease-in-out cursor-pointer   hover:scale-110">
              <img src="4.png" alt="" className="size-60 object-cover" />
            </div>
          </div>
          <div className="flex justify-center items-center  ">
            <div className="min-h-52 grid lg:grid-cols-3 gap-5">
              <div className="size-52 scale-90 duration-1500 ease-in-out cursor-pointer   hover:scale-110">
                <img src="5.png" alt="" className="size-full object-cover" />
              </div>
              <div className="size-52 scale-90 duration-1500 ease-in-out cursor-pointer   hover:scale-110">
                <img src="nuu.png" alt="" className="size-full object-cover" />
              </div>
              <div className="size-52 scale-90 duration-1500 ease-in-out cursor-pointer   hover:scale-110">
                <img src="7.png" alt="" className="size-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        </Fade>

       <Fade>
         <div className="min-h-[400px] ">
          <p className="flex justify-center py-7 text-amber-500 text-3xl">
            Latest Artical
          </p>

          <div className="min-h-[370px] grid lg:grid-cols-3 gap-5 px-20">
            <div className="">
              <div className="flex justify-center py-3">
                <img src="a.png" alt="" className="size-44" />
              </div>
              <div className="px-3">
                <p className="text-md text-white">
                  The smoothing Syphony of Lavender Perfumes:Uncloking the
                  Secrets of a Fragrant Elixir
                </p>
                <p className="text-sm text-gray-500">
                  Lavender,with its enchanging aroma and rich history has been
                  cherished for century as a symbol of relaxition,healing,and
                  timeless beautiful,in the world of perfume
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="px-3 py-1 border-1 border-white text-white cursor-pointer hover:text-gray-500 rounded-md">
                  Read More
                </button>
              </div>
            </div>

            <div className="">
              <div className="flex justify-center py-3">
                <img src="b.png" alt="" className="size-44" />
              </div>
              <div className="px-3">
                <p className="text-md text-white">
                  The Art of Curting A luxuary perfume Collection: A simple of
                  sence and story
                </p>
                <p className="text-sm text-gray-500">
                  Lavender,with its enchanging aroma and rich history has been
                  cherished for century as a symbol of relaxition,healing,and
                  timeless beautiful,in the world of perfume
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="px-3 py-1 border-1 border-white text-white cursor-pointer hover:text-gray-500 rounded-md">
                  Read More
                </button>
              </div>
            </div>

            <div className="">
              <div className="flex justify-center py-3">
                <img src="c.png" alt="" className="size-44" />
              </div>
              <div className="px-3">
                <p className="text-md text-white">
                  The Timeless elegancy of Rose Perfumes:The Queen of flowers in
                  fragrance
                </p>
                <p className="text-sm text-gray-500">
                  Lavender,with its enchanging aroma and rich history has been
                  cherished for century as a symbol of relaxition,healing,and
                  timeless beautiful,in the world of perfume
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="px-3 py-1 border-1 border-white text-white cursor-pointer hover:text-gray-500 rounded-md">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
       </Fade>

        <Fade>
          <div className="min-h-[1000px] py-10 flex flex-col justify-center items-center px-5 overflow-hidden">
          <div className="min-h-10 flex flex-col md:flex-row md:justify-between items-start md:items-center text-white w-full mb-5 gap-4 md:gap-0">
            <div className="flex flex-wrap gap-3 md:gap-10">
              <button className="cursor-pointer">Filter By</button>
              <button
                onClick={() => setItem("Collection")}
                className="hover:text-amber-700 cursor-pointer"
              >
                Collection
              </button>
              <button
                onClick={() => setItem("Fragrance Family")}
                className="hover:text-amber-700 cursor-pointer"
              >
                Fragrance Family
              </button>
              <button
                onClick={() => setItem("Gender")}
                className="hover:text-amber-700 cursor-pointer"
              >
                Gender
              </button>
              <button
                onClick={() => setItem("Ossassions")}
                className="hover:text-amber-700 cursor-pointer"
              >
                Ossassions
              </button>
            </div>
            <div>
              <button className="hover:text-amber-700 cursor-pointer">
                Sort By
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-4 w-full">
            <Part
              className={`${
                item === "Collection" || item === "Fragrance Family"
                  ? "block"
                  : "hidden"
              }`}
              img="c12.png"
              brand="Luxurious Elixir Rough"
              ml="80"
              price="$220.00"
            />
            <Part
              className={`${
                item === "Collection" || item === "Ossassions"
                  ? "block"
                  : "hidden"
              }`}
              img="c11.png"
              brand="The golden legacy"
              ml="103"
              price="$160.00"
            />
            <Part
              className={`${
                item === "Collection" || item === "Fragrance Family"
                  ? "block"
                  : "hidden"
              }`}
              img="cc1.png"
              brand="Luxurious Elixir"
              ml="90"
              price="$250.00"
            />
            <Part
              className={`${
                item === "Collection" || item === "Fragrance Family"
                  ? "block"
                  : "hidden"
              }`}
              img="c10.png"
              brand="Luxurious Essence"
              ml="212"
              price="$ 260.00"
            />
            <Part
              className={`${
                item === "Collection" || item === "Gender" ? "block" : "hidden"
              }`}
              img="cc2.png"
              brand="Aurum Aura"
              ml="103"
              price="$200.00"
            />
            <Part
              className={`${
                item === "Collection" || item === "Gender" ? "block" : "hidden"
              }`}
              img="cc3.png"
              brand="Glaming Gilt"
              ml="103"
              price="$160.00"
            />
            <Part
              className={`${
                item === "Collection" || item === "Fragrance Family"
                  ? "block"
                  : "hidden"
              }`}
              img="cc4.png"
              brand="Gilded Elixir Rough"
              ml="103"
              price="$170.00"
            />
            <Part
              className={`${
                item === "Collection" || item === "Gender" ? "block" : "hidden"
              }`}
              img="cc5.png"
              brand="Golden Luminary"
              ml="103"
              price="$120.00"
            />
            <Part
              className={`${
                item === "Collection" || item === "Ossassions"
                  ? "block"
                  : "hidden"
              }`}
              img="c4.png"
              brand="Decandent Opal"
              ml="40"
              price="$160.00"
            />
            <Part
              className={`${
                item === "Collection" || item === "Fragrance Family"
                  ? "block"
                  : "hidden"
              }`}
              img="cc6.png"
              brand="Gilded Elixir"
              ml="40"
              price="$200.00"
            />
            <Part
              className={`${
                item === "Collection" || item === "Ossassions"
                  ? "block"
                  : "hidden"
              }`}
              img="cc7.png"
              brand="Glamourous Gilt"
              ml="212"
              price="$160.00"
            />
            <Part
              className={`${
                item === "Collection" || item === "Ossassions"
                  ? "block"
                  : "hidden"
              }`}
              img="c1.png"
              brand="Luxury Enigma"
              ml="103"
              price="$190.00"
            />
          </div>
        </div>
        </Fade>

       <Fade>
         <div className="min-h-[500px] px-10 grid lg:grid-cols-2">
          <div className="px-10">
            <img
              src="arci.png"
              alt=""
              className="size-fit object-cover scale-90 hover:scale-110 duration-1000 "
            />
          </div>
          <div className="">
            <div className="text-white">
              <p className="font-bold text-3xl py-3 ">Luxurious Elixir</p>
              <p className="">
                Set into a world with luxurious elixir, with its enchanging
                aroma and rich history has been cherished for century as a
                symbol of relaxition,healing,and golden hues.{" "}
              </p>
              <div className="flex gap-5 ">
                <p className="py-7"> ⭐⭐⭐⭐⭐ (90)</p>
                <p className="py-7 text-white underline cursor-pointer">
                  Review and Rating
                </p>
              </div>
            </div>

            <div className="flex ">
              <div className="">
                <img src="cc1.png" alt="" className="size-20 object-cover" />
                <p className="text-white hover:underline cursor-pointer py-4 px-5">
                  100ml
                </p>
              </div>
              <div className="">
                <img src="cc1.png" alt="" className="size-25 object-cover" />
                <p className="text-white hover:underline cursor-pointer py-4 px-5">
                  150ml
                </p>
              </div>
            </div>

            <div className="">
              <p className="text-amber-700 text-xl">$225.00</p>
              <div className="py-5">
                <div className="flex gap-4">
                  <p className="text-white text-xl ">Qty</p>
                  <div className="">
                    <button className="px-7 py-1 text-amber-700 border-1 border-white flex justify-between items-center cursor-pointer">
                      - 1 +
                    </button>
                  </div>
                  <p className="text-white text-xl cursor-pointer">While ♡</p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="">
                <button className="px-10 py-2 bg-white text-amber-700 text-2xl rounded-xl font-bold cursor-pointer">
                  Add to Bag
                </button>
              </div>
              <div className="py-5 flex gap-5">
                <button className="px-3 py-1 bg-white text-black text-md font-bold rounded-full cursor-pointer hover:bg-amber-600 ">
                  AfterPay
                </button>
                <p className="text-white cursor-pointer hover:underline">
                  Shop now and pay later with 4 payments
                </p>
              </div>
            </div>
          </div>
        </div>
       </Fade>

       <Fade>
         <div className="min-h-[400px]  ">
          <p className="flex justify-center items-center text-amber-600 text-4xl py-5">
            Discover More
          </p>
          <div className="min-h-[350px] lex justify-around items-center">
            <div className="grid lg:grid-cols-4">
              <div className="scale-90 hover:scale-110 duration-1000 cursor-pointer">
                <div className="flex justify-center items-center">
                  <img src="c12.png" alt="" className="size-56 object-cover" />
                </div>
                <div className="py-5">
                  <p className="text-white text-md flex justify-center items-center">
                    Luxurious Elixir Rough
                  </p>
                  <div className="flex justify-center items-center space-x-3">
                    <p className="text-amber-900 text-md">$220.00</p>
                    <p className="text-white">(100ml)</p>
                  </div>
                </div>
              </div>
              <div className="scale-90 hover:scale-110 duration-1000 cursor-pointer">
                <div className="flex justify-center items-center">
                  <img src="c11.png" alt="" className="size-56 object-cover" />
                </div>
                <div className="py-5">
                  <p className="text-white text-md flex justify-center items-center">
                    The Golden Legacy
                  </p>
                  <div className="flex justify-center items-center space-x-3">
                    <p className="text-amber-900 text-md">$160.00</p>
                    <p className="text-white">(100ml)</p>
                  </div>
                </div>
              </div>
              <div className="scale-90 hover:scale-110 duration-1000 cursor-pointer">
                <div className="flex justify-center items-center">
                  <img src="cc1.png" alt="" className="size-56 object-cover" />
                </div>
                <div className="py-5">
                  <p className="text-white text-md flex justify-center items-center">
                    Luxurious Elixir{" "}
                  </p>
                  <div className="flex justify-center items-center space-x-3">
                    <p className="text-amber-900 text-md">$250.00</p>
                    <p className="text-white">(100ml)</p>
                  </div>
                </div>
              </div>
              <div className="scale-90 hover:scale-110 duration-1000 cursor-pointer">
                <div className="flex justify-center items-center">
                  <img src="bar.png" alt="" className="size-56 object-cover" />
                </div>
                <div className="py-5">
                  <p className="text-white text-md flex justify-center items-center">
                    Luxurious Golden Legacy
                  </p>
                  <div className="flex justify-center items-center space-x-3">
                    <p className="text-amber-900 text-md">$240.00</p>
                    <p className="text-white">(100ml)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </Fade>

        <Footer />
      </div>
    </>
  );
}

export default ShopPage;
