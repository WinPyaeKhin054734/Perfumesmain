"use client";

import Image from "next/image";
import { useState } from "react";
import Nav from "./shop/Nav";
import Footer from "./shop/Footer";
import Fade from './Fade';

function Card({ className, img, item, letter, price }) {
  return (
    <div className={`px-2 py-5 ${className}`}>
      <div className="h-[320px] w-[230px] bg-black/40 border border-white flex flex-col justify-center px-5 py-7 hover:cursor-pointer">
        {/* Use w-52 instead of size-52 */}
        <img src={`/${img}`} alt={item} className="w-52 h-auto object-cover" />
        <div className="text-white flex justify-center items-center flex-col py-3">
          <p className="font-bold text-md">{letter}</p>
          <div className="flex gap-5">
            <p className="text-amber-700">{price}</p>
            <p>100ml</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="bg-black">
      <Nav />

      <Fade>
        <div className="min-h-screen flex flex-col lg:flex-row justify-around items-center py-5">
          <div className="text-white">
            <p className="text-5xl px-10">
              Elevate Your Spirit with <br /> Victory Scented Fragrances!
            </p>
            <p className="px-10 py-5 text-xl">
              Shop now and embrace the sweet smell of <br /> victory with Local Face
            </p>
            <div className="px-10 py-10">
              <button className="px-6 py-2 bg-amber-600 rounded-xl cursor-pointer hover:bg-amber-700 active:bg-amber-950 hover:text-black ease-in duration-300">
                Shop Now
              </button>
            </div>
          </div>
          <div>
            <img src="/lamp.png" alt="lamp" className="w-52 h-auto object-cover" />
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="min-h-[400px] relative py-5">
          <img src="/back.jpg" alt="background" className="h-[500px] w-full object-cover" />
          <div className="absolute inset-0 z-10 bg-black/80 flex flex-col justify-center items-center px-6">
            <p className="font-bold text-amber-600 text-2xl py-5">Welcome to Local Face</p>
            <p className="text-white font-bold py-5 px-10 text-center max-w-3xl">
              Welcome to Local Face Perfumes, where the spirit of victory and triumph comes alive through scents that empower and inspire. Our curated collection, aptly named "Victory Scented," is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the story of your achievements.
            </p>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="min-h-[400px] grid lg:grid-cols-2 px-10 py-5">
          <div className="flex justify-center items-center">
            <img src="/pu.png" alt="Perfume" className="w-96 h-auto object-cover" />
          </div>
          <div>
            <p className="font-bold text-3xl flex justify-center items-center text-white">Our Values</p>
            <div className="py-5 text-white px-6">
              <p>
                At Local Face, our perfume store is built on a foundation of passion and authenticity. We celebrate the individuality of every customer by providing a diverse collection of scents that resonate with personal style. Our dedicated team of fragrance lovers strives to create a welcoming and inspiring environment.
              </p>
              <p className="py-10">
                Embracing sustainability and continuous learning, Local Face is more than a shop — it's a community that empowers fragrance journeys.
              </p>
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="min-h-[350px] px-4 sm:px-6 md:px-10">
          <div className="flex justify-center items-center mb-6">
            <p className="font-bold text-xl sm:text-2xl text-amber-500 text-center">
              BEST SELLING PRODUCTS
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide w-full px-20">
            <Card className="min-w-[200px]" img="exi.png" letter="Luxurious Elixir Rough" price="$160.00" />
            <Card className="min-w-[200px]" img="gold.png" letter="The Golden Legacy" price="$160.00" />
            <Card className="min-w-[200px]" img="eu.png" letter="Luxurious Elixir" price="$250.00" />
            <Card className="min-w-[200px]" img="ess.png" letter="Luxurious Essence" price="$260.00" />
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="min-h-[250px] grid md:grid-cols-2 py-4 px-10">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold text-white">Perfume Year-End Sale!<br />Up to 50% Off</p>
            <p className="text-white py-5 text-center max-w-md">
              Discover an exclusive collection of premium perfumes at unbeatable prices during our executive perfume sale.
            </p>
            <button className="px-6 py-2 text-white bg-amber-600 rounded-xl hover:bg-amber-700 active:bg-amber-950 hover:text-black ease-in duration-300">
              Know More
            </button>
          </div>
          <div>
            <img src="/new.png" alt="Sale" className="w-80 h-auto object-cover mx-auto" />
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="min-h-[400px] bg-gradient-to-tr from-black to-blue-950 px-10 py-6">
          <p className="text-2xl font-bold text-amber-500 text-center py-2">Special Offers</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex justify-center items-center">
              <img src="/nuu.png" alt="Offer" className="w-64 h-auto object-cover" />
            </div>
            <div>
              <p className="font-bold text-white text-xl py-4">Limited Time Offer: 20% Off on Aqua Serenity Perfume</p>
              <p className="font-bold text-white text-xl">Aqua Serenity</p>
              <p className="text-md text-green-900 font-bold py-2">Embrace the Tranquil Tides</p>
              <p className="text-white py-5">
                Immerse yourself in the calming embrace of Aqua Serenity — a fragrance that captures the essence of water.
              </p>
              <button className="px-4 py-2 border rounded-xl text-white border-white hover:bg-black">
                Know More
              </button>
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="min-h-[370px] bg-gradient-to-br to-black from-amber-800 py-10 px-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-white text-xl py-4">Limited Time Offer: 20% Off Golden Angel Perfume</p>
              <p className="font-bold text-white text-xl">Golden Angel</p>
              <p className="text-md text-amber-500 font-bold py-2">Unleash Your Divine Glow</p>
              <p className="text-white py-5">
                Indulge in the divine allure of Golden Angel — a fragrance that embodies celestial elegance and radiant beauty.
              </p>
              <button className="px-4 py-2 border rounded-xl text-white border-white hover:bg-black">
                Know More
              </button>
            </div>
            <div className="flex justify-center items-center">
              <img src="/mace.png" alt="Golden Angel" className="w-80 h-auto object-cover" />
            </div>
          </div>
        </div>
      </Fade>

      <Footer />
    </div>
  );
}

export default HomePage;
