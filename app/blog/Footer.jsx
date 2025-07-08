import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div>
        <div className="min-h-[300px] grid lg:grid-cols-3 ">
  <div className=" px-5 py-7">
      <div className="text-amber-500 text-2xl myfont hover:text-amber-400 cursor-pointer">
          Local Face
        </div>
        <div className="py-5">
          <p className="font-bold text-white  text-xl ">Subscribe to our new letter</p>
          <p className="text-white py-5">
            Receive update on New Arrival and Special Promotions
          </p>

        </div>
        <div className="flex ">
          <input className="border-1 border-white " type="email" name="" id="" placeholder="Enter your email "/>
          
          
        </div>
        <div className="flex gap-5 py-10">
        <div className="">
          
          <img src="https://i.pinimg.com/736x/20/f6/68/20f668ea3ae29703a8ccc89270507635.jpg" alt="" className="size-10 object-cover cursor-pointer " />
        </div>
        <div className="">
          
          <img src="https://i.pinimg.com/736x/d3/9c/ce/d39cce82fc9425007e07085f3c606766.jpg" alt="" className="size-8 object-cover cursor-pointer invert" />
        </div>
        <div className="">
          
          <img src="https://i.pinimg.com/736x/1a/92/91/1a9291b12d642cb2fa8aa8fbef5c7be1.jpg" alt="" className="size-8 object-cover cursor-pointer" />
        </div>
       
        <div className="">
          
          <img src="https://i.pinimg.com/736x/07/d4/34/07d434c06fe0f9cb77c4c773886705a7.jpg" alt="" className="size-8 object-cover cursor-pointer " />
        </div>
        </div>
  </div>


  <div className="grid lg:grid-cols-2">
  <div className=" text-white py-5 px-20">
   <p className="font-bold text-md py-5 ">Categories</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Fashion</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">jewelry</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Sports</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Electronics</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Indoor</p>
  </div>

  <div className=" text-white py-5 px-20">
   <p className="font-bold text-md py-5 ">Shopping</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Payments</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Delivary Options</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Buyer Protections</p>
  
  </div>
 
</div>


  <div className="grid lg:grid-cols-2">
  <div className=" text-white py-5 px-20">
   <p className="font-bold text-md py-5 ">Customer Care</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Help Center</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Terms & Conditions</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Privacy & Policy</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Returns & Resume</p>
   <p className="py-3 cursor-pointer hover:text-amber-700">Survey & feedback</p>
  </div>

  <div className=" text-white py-5 flex justify-center  flex-col px-20">
  <a href="" className="py-3 cursor-pointer hover:text-amber-700">Page</a>
  <Link className='hover:text-amber-600' href="/about">About</Link>
<Link className='hover:text-amber-600' href="/shop">Shop</Link>
<Link className='hover:text-amber-600' href="/service">Service</Link>
<Link className='hover:text-amber-600' href="/blog">Blog</Link>
  
  </div>
 
</div>

  
</div>
    </div>
  )
}

export default Footer