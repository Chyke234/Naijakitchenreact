

import { Products } from '../Products';
import { ShopContext } from '../context/Shop-Context';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React, { useState, useContext } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { topPicks } from '../Products';
import product4 from '../assets/Catfishpeppersoup.jpeg';
import product5 from '../assets/Egusi.jpg';
import product6 from '../assets/Okrosoup.jpeg';
import product7 from '../assets/Seaokrosoup.jpg';
import product2 from '../assets/banga.webp';
import product3 from '../assets/bitterleaf.jpeg';
import product1 from '../assets/jollof2.png';
import logoImage from '../assets/logo2.png';


export const Home = () => {
  const sliders = [
    { productImage: product1 },
    { productImage: product2 },
    { productImage: product3 },
    { productImage: product4 },
    { productImage: product5 },
    { productImage: product6 },
    { productImage: product7 },
  ];

  // eslint-disable-next-line no-empty-pattern
  const [] = useState(Products);
  const { addToCart } = useContext(ShopContext); 

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-full py-4 px-4 relative group mt-0'>
     
      <div className='w-full h-[600px] rounded-2xl bg-center bg-cover object-cover duration-500' style={{ backgroundImage: `url(${sliders[currentIndex].productImage})` }}></div>
      <div className='hidden group-hover:block absolute top-[20%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-green-700'>
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className='hidden group-hover:block absolute top-[20%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-green-700'>
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {sliders.map((_slidersItem, slideIndex) => (
          <div key={slideIndex} onClick={() => moveToNextSlide(slideIndex)} className='text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div>


    
      <div className='w-full bg-green-300 py-10 px-4'>
        <div className='w-full max-w-screen-xl mx-auto grid md:grid-cols-2'>
          <img className='w-full md:w-[550px] mx-auto my-4' src={logoImage} alt="logoimage" />
          <h3 className='text-white md:text-5xl sm:text-3xl py-2 leading-10 font-bold text-5xl text-center md:text-left w-full md:w-1/2 float-right mt-6 md:mt-60'>
            AUTHENTICALLY <br /><span>NIGERIAN</span>
          </h3>
        </div>
      </div>

    
      <h1 className="text-green-500 font-bold text-2xl text-center">Top Picks</h1>
      <div className="hidden lg:flex m-auto py-4 px-2">
        <Splide options={{ perPage: 4, gap: '0.5rem', grag: 'free', arrows: false }}>
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                  <p className="px-2 pt-4 font-bold text-2xl">{item.title}</p>
                  <p className='px-2'>£{item.Price}</p>
                  <button className="border-dotted border-white text-white mx-2 absolute bottom-4"
              onClick={() => addToCart(item.id)}>Add To Cart</button>
                </div>
                <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300' src={item.productImage} alt={item.title} />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
