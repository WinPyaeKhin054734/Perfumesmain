
'use client';

import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

import Fade from './Fade';




function Car({ img, letter }) {
  return (
    <div>
      <div className="px-20 py-5">
        <img src={img} alt={letter} className="w-52 h-auto object-cover" />
      </div>
      <div className="px-20">
        <p className="text-white font-bold">{letter}</p>
        <p className="text-white py-4">
          In Marketing Management (15th ed.), Kotler and Keller (2016) emphasize the importance of
          understanding consumer behavior, market segmentation, and value creation in achieving marketing success.
        </p>
      </div>
      <div className="px-20 py-6">
        <button className="px-5 py-1 text-white border border-white rounded-3xl cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
}

function BlogPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Nav />

      <Fade>
        <div className="min-h-[500px]">
          <p className="flex justify-center items-center py-10 text-2xl text-white font-bold">
            Our Blog Collection
          </p>
          <div className="min-h-[470px] grid lg:grid-cols-2 px-20 gap-10">
            <div className="flex flex-col justify-center items-center text-white">
              <p className="font-black text-xl py-10">Discover the art of perfumacy</p>
              <p className="py-5">
                Perfume is a fragrant liquid made from a blend of essential oils, aroma compounds,
                and solvents, used to give a pleasant scent to the body or surroundings. It has been
                used for thousands of years in many cultures for personal grooming, religious ceremonies,
                and social occasions. Perfumes are made up of layers called notes: top notes that you
                smell first, heart notes that form the main body of the fragrance, and base notes that
                last the longest.
              </p>
              <p>
                People use perfume not only to smell good but also to express their personality, boost
                confidence, and leave a memorable impression.
              </p>
            </div>
            <div>
              <img src="blo.png" alt="Perfume art" className="h-[470px] w-full object-cover" />
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="min-h-[700px] py-7 px-20">
          <div className="grid lg:grid-cols-3 gap-10">
            <Car
              img="s1.png"
              letter="Finding Your Signature Scent: A Guide to Perfume Personalities"
            />
            <Car
              img="s2.png"
              letter="The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories"
            />
            <Car
              img="s3.png"
              letter="Decoding Fragrance Notes: Unraveling the Symphony of Science"
            />
            <Car
              img="s4.png"
              letter="The Soothing Symphony of Lavender Perfume: Unlocking the Secret of a Fragrant Elixir"
            />
            <Car
              img="s5.png"
              letter="A Journey Through Time: Unearthing Perfume's Rich History"
            />
            <Car
              img="s6.png"
              letter="The Timeless Elegance of Rose Perfume: The Queen of Flowers in Fragrance"
            />
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="min-h-[500px] px-20">
          <div className="text-white text-center text-xl flex flex-col justify-center items-center">
            <p>January 5, 2023</p>
            <p>Perfume collection</p>
          </div>
          <p className="text-white text-2xl flex justify-center items-center py-5 text-center">
            The Art of Curating a Luxury Perfume Collection: <br />
            A Symphony of Scents and Stories
          </p>
          <div className="min-h-[400px]">
            <img src="s2.png" alt="Luxury Perfume Collection" className="h-[380px] w-full object-cover" />
            <p className="text-white py-5">
              By focusing on customer value, relationship marketing, and brand positioning, the book
              provides essential tools for managers to develop effective marketing plans aligned with
              overall business objectives. This aligns marketing strategy with broader business
              strategy, reinforcing the need for a customer-centric approach in strategic planning.
            </p>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="min-h-[500px] px-20">
          <div className="text-white text-2xl mb-3">The perfume collection: A personal overture</div>
          <p className="text-white mb-6">
            The authors present a framework that integrates traditional marketing principles with modern
            digital strategies, allowing businesses to stay competitive in a rapidly changing global marketplace.
          </p>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <img src="ss.png" alt="Perfume Overture" className="w-full h-auto object-cover" />
            </div>
            <div className="space-y-6 text-white">
              <div>
                <p className="text-xl font-semibold">The Overture: Discovering Your Signature Scent</p>
                <p>The authors present a framework that integrates traditional marketing principles with modern digital strategies, allowing businesses to stay competitive in a rapidly changing global marketplace.</p>
              </div>
              <div>
                <p className="text-xl font-semibold">Commemorating Milestones</p>
                <p>The authors present a framework that integrates traditional marketing principles with modern digital strategies, allowing businesses to stay competitive in a rapidly changing global marketplace.</p>
              </div>
              <div>
                <p className="text-xl font-semibold">Exploring the Fragrance Palette</p>
                <p>The authors present a framework that integrates traditional marketing principles with modern digital strategies, allowing businesses to stay competitive in a rapidly changing global marketplace.</p>
              </div>
              <div>
                <p className="text-xl font-semibold">Displaying your Symphony of Scents</p>
                <p>The authors present a framework that integrates traditional marketing principles with modern digital strategies, allowing businesses to stay competitive in a rapidly changing global marketplace.</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="min-h-[400px] px-20 grid lg:grid-cols-2 gap-10 text-white">
          <div>
            <div className="mb-6">
              <p className="text-xl font-semibold py-5">The Overture: Discovering Your Signature Scent</p>
              <p>The authors present a framework that integrates traditional marketing principles with modern digital strategies, allowing businesses to stay competitive in a rapidly changing global marketplace.</p>
            </div>
            <div>
              <p className="text-xl font-semibold py-5">Commemorating Milestones</p>
              <p>The authors present a framework that integrates traditional marketing principles with modern digital strategies, allowing businesses to stay competitive in a rapidly changing global marketplace.</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="so.png" alt="Perfume Symphony" className="w-72 h-auto object-cover" />
          </div>

          <div className="lg:col-span-2 pt-7">
            <p>
              Updated content on current topics such as brand equity, global marketing, customer value analysis,
              segmentation, targeting, positioning, integrated marketing communications, digital communications,
              and holistic marketing.
            </p>
            <p className="pt-7">
              Happy Curating! <br /> Kiara Smith
            </p>
          </div>
        </div>
      </Fade>

      <Footer />
    </div>
  );
}

export default BlogPage;
