import { useState, useContext } from 'react';

import { Products } from '../Products';
import { ShopContext } from '../context/Shop-Context';



export const Dishes = () => {
  const [foods, setFoods] = useState(Products);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const { addToCart } = useContext(ShopContext); 
  
  
  const filterCat = (category) => {
    setFoods(Products.filter((item) => item.category === category));
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const renderServeWithOptions = (item) => {
    if (hoveredItem && hoveredItem.id === item.id && (hoveredItem.category === 'Soups' || hoveredItem.category === 'RiceDishes')) {
      return (
        <div className='absolute top-0 left-0 bg-[#80808080] p-2 text-white rounded-lg duration-800 w-full h-[300px] text-center'>
          <ul>
            <h2>Serve with</h2>
            <li className='cursor-pointer'>Fish £13</li>
            <li className='cursor-pointer'>Meat £13</li>
            <li className='cursor-pointer'>Fish & Meat £15</li>
            <li className='cursor-pointer'>Assorted £15</li>
          </ul>
        </div>
      );
    }
    return null;
  
  };
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
      <h1 className='text-green-500 font-bold text-center py-2'>
        Our Meal
      </h1>
      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='flex justify-center md:justify-center'>
          <button
            onClick={() => setFoods(Products)}
            className='m-1 border-green-700 text-white bg-green-700 hover:bg-white hover:text-green-700 hover:border-green-700'
          >
            All
          </button>
          <button
            onClick={() => filterCat('RiceDishes')}
            className='m-1 border-green-700 text-white  bg-green-700 hover:bg-white hover:text-green-700 hover:border-green-700'
          >
            Rice Dishes
          </button>
          <button
            onClick={() => filterCat('Soups')}
            className='m-1 border-green-700 text-white  bg-green-700 hover:bg-white hover:text-green-700 hover:border-green-700'
          >
            Soups
          </button>
          <button
            onClick={() => filterCat('Specials')}
            className='m-1 border-green-700 text-white  bg-green-700 hover:bg-white hover:text-green-700 hover:border-green-700'
          >
            SPECIALS (TRADITIONAL)
          </button>
          <button
            onClick={() => filterCat('Starters')}
            className='m-1 border-green-700 text-white  bg-green-700 hover:bg-white hover:text-green-700 hover:border-green-700'
          >
            Starters
          </button>

          <button
            onClick={() => filterCat('PepperSoups')}
            className='m-1 border-green-700 text-white  bg-green-700 hover:bg-white hover:text-green-700 hover:border-green-700'
          >
            Pepper Soups
          </button>

          <button
            onClick={() => filterCat('Drinks')}
            className='m-1 border-green-700 text-white  bg-green-700 hover:bg-white hover:text-green-700 hover:border-green-700'
          >
            Drinks
          </button>
          
          
        </div>
      </div>

      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
        {foods.map((item) => (
          <div
            key={item.id}
            className='border-none hover:scale-105 duration-300 relative'
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={item.productImage}
              alt={item.name}
              className='w-full h-[300px] object-cover rounded-lg'
            />
            <div className='flex justify-between py-2 px-2'>
              <p className='font-bold text-green-900'>{item.name}</p>
              <p className='bg-green-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>
                £{item.price}
              </p>
            </div>
            <button
              className="addToCartBttn"
              onClick={() => addToCart(item.id)} // Add the item to the cart
            >
              Add To Cart
            </button>
            {renderServeWithOptions(item)}

            


            
            
          </div>
         
        ))}
      </div>
    </div>
  );
};

