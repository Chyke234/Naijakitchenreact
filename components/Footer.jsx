import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import cardlogo from '../assets/cardpayment.png';

export const Footer = () => {
  return (
    <>
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-white'>
      <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      </div>
      <h1 className='w-full text-3xl font-bold text-green-500'>Naija Kitchen</h1>

      <p className='text-white'>
      Serving up lovingly crafted Nigerian Specials in Colchester and Environs
      </p>

      <div className='flex justify-between md:w-[7%] my-6 cursor-pointer'>
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
      </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6 bg-green-700'>
        
        <div className='px-4'>
        <h6 className='font-medium text-orange-500'>Information</h6>
        <ul>
          <li className='py-2 text-sm cursor-pointer text-white'>Contact</li>
            <li className='py-2 text-sm cursor-pointer text-white'>My account</li>
            <li className='py-2 text-sm cursor-pointer text-white'>Food Hygiene Certificate</li>
        </ul>
        </div>
        
        <div>
          <h6 className='font-medium text-orange-500'>Get In Touch</h6>
        <ul>
          <li className='py-2 text-sm text-white'>Mon. - Sun.: 10:00 - 23:00</li>
          <li className='py-2 text-sm text-white'>+447843815032</li>
          <li className='py-2 text-sm text-white cursor-pointer'>order@naijakitchenuk.co.uk</li>
        </ul>
        </div>
        
        <div>
        <h6 className='font-medium px-4 text-orange-500'>We Accept</h6>
       <img className='px-4' src={cardlogo} alt="paymentlogo" />
        </div>
        </div>
        </>
     
      
      
  );
};


