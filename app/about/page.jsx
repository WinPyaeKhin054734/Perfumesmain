"use client";

import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Fade from './Fade';





function AboutPage() {
  return (
    <div>
      <div className="bg-black">
        <Nav />

        <Fade>
          <div className=" min-h-[450px] relative">
            <img
              src="https://i.pinimg.com/736x/58/6b/e3/586be3cccd8dd871111846f6b08e5ad8.jpg"
              alt=""
              className="h-[450px] object-cover w-full"
            />
            <div className="absolute inset-0 z-10 bg-black/80 ">
              <div className="">
                <p className="flex justify-center items-center font-bold text-4xl text-white py-10">
                  About Us
                </p>
                <div className="flex text-white px-20 justify-center items-center">
                  At local Face we believe perfume are more than just
                  scents,they are expression <br /> of one's individual and
                  style.bringing your and <br /> may be one day your smell are
                  good. At local Face we believe perfume are more than just
                  scents, <br />
                  they are expression of one's individual and style.bringing
                  your <br /> and may be one day your smell are good.
                </div>
              </div>
            </div>
          </div>
        </Fade>



        <Fade>
          <div className="min-h-[300px] flex flex-col  justify-center items-center">
            <p className="text-4xl text-white font-bold py-10">Our Story</p>
            <div className="flex text-white px-20 justify-center items-center">
              At local Face we believe perfume are more than just scents,they
              are expression <br /> of one's individual and style.bringing your
              and <br /> may be one day your smell are good. At local Face we
              believe perfume are more than just scents, <br />
              they are expression of one's individual and style.bringing your{" "}
              <br /> and may be one day your smell are good.
            </div>
          </div>
        </Fade>




        <Fade>
          <div className="min-h-[700px] ">
            <div className="flex flex-col md:flex-row">
              <img
                src="https://i.pinimg.com/736x/a0/1e/4d/a01e4da7425aaaf12954bc7c758e6e16.jpg"
                alt=""
                className="h-[300px] object-cover w-full"
              />
            </div>
            <div className="min-h-[300px] ">
              <p className="text-2xl text-amber-700 font-bold  flex justify-center items-center py-5">
                What makes Us Unique
              </p>
              <div className="grid lg:grid-cols-3 min-h-[300px] px-20">
                <div className=" text-white">
                  <p className="text-2xl  flex justify-center items-center py-10">
                    Locally inspired
                  </p>
                  <p className="px-20">
                    Our Perfume are meticiously crafted to reflect the cultural
                    hertiage. trading and length space of regions. <br /> Tells
                    a unique story that reasonate with its origin.
                  </p>
                </div>
                <div className=" text-white">
                  <p className="text-2xl  flex justify-center items-center py-10">
                    Hight Quality Ingredients
                  </p>
                  <p className="px-20">
                    Our Perfume are meticiously crafted to reflect the cultural
                    hertiage. trading and length space of regions. <br /> Tells
                    a unique story that reasonate with its origin.
                  </p>
                </div>
                <div className=" text-white">
                  <p className="text-2xl  flex justify-center items-center py-10">
                    Personalized Service
                  </p>
                  <p className="px-20">
                    Our Perfume are meticiously crafted to reflect the cultural
                    hertiage. trading and length space of regions. <br /> Tells
                    a unique story that reasonate with its origin.
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[200px] ">
              <div className="text-white ">
                <p className="px-30">
                  Join us on this olfactory advanture as we celebrate the desire
                  taoestry of secnts from around the world. Discover the
                  captivation aroms that embrace the essence of local cultures
                  and connect with the beauty of our shared humanity.
                </p>

                <p className="px-30 py-5">
                  Thank you for being a part of out journey.
                </p>

                <p className="px-30">
                  With love and graditude. <br />
                  The Local Face Perfumes Team
                </p>
              </div>
            </div>
          </div>
        </Fade>



        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
