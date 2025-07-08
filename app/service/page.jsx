"use client";

import React from 'react';
import Nav from '../about/Nav';
import Footer from './Footer';
import Fade from './Fade'; // This should have "use client" at the top of Fade.jsx

function ServicePage() {
  const services = [
    {
      id: '01',
      title: 'Personal Fragrance Consultation',
      img: '/01.png',
      description:
        'This personalized service helps individuals discover their ideal scent, matched to their personality and lifestyle. Fragrance experts guide clients through different scent families—floral, woody, oriental, or fresh—while considering skin type, mood, and special occasions.',
    },
    {
      id: '02',
      title: 'Custom Fragrance Creation',
      img: '/x2.png',
      description:
        'Custom blend fragrances tailored for personal preferences, allowing customers to create unique scents reflecting their individuality.',
    },
    {
      id: '03',
      title: 'Scent Gift Collection',
      img: '/x3.png',
      description:
        'Curated gift sets ideal for special occasions, featuring a variety of perfumes and scents.',
    },
    {
      id: '04',
      title: 'Fragrance Events and Workshops',
      img: '/x4.png',
      description:
        'Interactive workshops and events to educate customers about perfume-making and scent appreciation.',
    },
    {
      id: '05',
      title: 'Eco-friendly Initiatives',
      img: '/x5.png',
      description:
        'Sustainable packaging and refill programs aimed at reducing environmental impact.',
    },
    {
      id: '06',
      title: 'Online Shopping Convenience',
      img: '/x6.png',
      description:
        'Easy and secure online shopping experience with detailed descriptions and customer support.',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Nav />

      {/* Hero Section */}
      <Fade>
        <div className="relative min-h-[400px]">
          <img src="/s3.png" alt="Perfume Service" className="w-full h-[400px] object-cover" />
          <div className="absolute inset-0 z-20 bg-black/70 text-white flex flex-col justify-center px-6 sm:px-10 md:px-20 lg:px-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              Perfume service offers customers a personalized fragrance experience by providing access to
              high-quality perfumes, scent consultations, and curated selections. Whether it's in-store sampling,
              monthly subscriptions, or custom-blended fragrances, we cater to every preference and occasion.
            </p>
          </div>
        </div>
      </Fade>

      {/* Services List */}
      {services.map(({ id, title, img, description }, index) => (
        <Fade key={id}>
          <div
            className={`min-h-[400px] grid lg:grid-cols-2 px-6 md:px-20 py-10 items-center gap-6 ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : 'lg:col-start-1'} flex justify-center`}>
              <img src={img} alt={title} className="w-52 h-auto object-cover" />
            </div>
            <div className={`${index % 2 === 1 ? 'lg:col-start-1' : 'lg:col-start-2'} text-white`}>
              <p className="font-bold text-2xl text-amber-400 flex justify-center py-5">{id}</p>
              <p className="font-bold text-xl py-5 flex justify-center">{title}</p>
              <p className="font-medium px-6 text-justify">{description}</p>
            </div>
          </div>
        </Fade>
      ))}

      <Footer />
    </div>
  );
}

export default ServicePage;
