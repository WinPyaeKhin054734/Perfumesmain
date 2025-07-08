'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40); // Detect scroll
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`${scrolled ? 'bg-black/70 backdrop-blur-md shadow-lg fixed w-full z-50' : ''}`}>
      <div className="">

        {/* Mobile view */}
        <div className="md:hidden flex justify-between items-center px-5 py-3">
          <div className="text-amber-500 text-2xl myfont hover:text-amber-400 cursor-pointer">
            Local Face
          </div>
          <div
            onClick={() => setMenu(!menu)}
            className="active:scale-90 duration-300 bg-white/40 border-black px-3 py-1 rounded-xl z-50"
          >
            <img src="pee.png" alt="Menu" className="size-8" />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed md:hidden inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 text-lg duration-300 transition-all ${
            menu ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-5 items-center">
            <div className="text-amber-500 text-4xl myfont hover:text-amber-400 cursor-pointer">
              Local Face
            </div>
            <div className="text-white font-bold flex flex-col items-center gap-7">
            
            
<Link className='hover:text-amber-600' href="/about">About</Link>
<Link className='hover:text-amber-600' href="/shop">Shop</Link>
<Link className='hover:text-amber-600' href="/service">Service</Link>
<Link className='hover:text-amber-600' href="/blog">Blog</Link>
            </div>
            <div className="flex gap-5 pt-4">
              <img src="see.jpg" alt="see" className="size-5 cursor-pointer" />
              <img src="person.jpg" alt="person" className="size-5 cursor-pointer" />
              <img src="heart.jpg" alt="heart" className="size-5 cursor-pointer" />
              <img src="bag.jpg" alt="bag" className="size-5 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex min-h-20 z-30 justify-between items-center px-7 py-3 text-white">
          <div className="text-amber-500 text-2xl myfont hover:text-amber-400 cursor-pointer">
            Local Face
          </div>
          <div className="font-bold space-x-10">
          
          
<Link className='hover:text-amber-600' href="/about">About</Link>
<Link className='hover:text-amber-600' href="/shop">Shop</Link>
<Link className='hover:text-amber-600' href="/service">Service</Link>
<Link className='hover:text-amber-600' href="/blog">Blog</Link>
          </div>
          <div className="space-x-6 flex">
            <img src="see.jpg" alt="see" className="size-5 cursor-pointer" />
            <img src="person.jpg" alt="person" className="size-5 cursor-pointer" />
            <img src="heart.jpg" alt="heart" className="size-5 cursor-pointer" />
            <img src="bag.jpg" alt="bag" className="size-5 cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Nav;
