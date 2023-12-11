
export const NewsLetter = () => {
  return (
    <div className=' m-auto text-white px-4 bg-green-700'>
      <div className='mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1>Be the first to know about our newest menu items and latest offers. More food. Less money.</h1>
          <p>Sign Up to join our Newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input type='email'
              placeholder='email address'
              className='p-3 flex w-full rounded-md text-black' />
            <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 border-none'>
              Notify Me
            </button>
          </div>
          <p>We are concerned about the security of your data, Read {''}
            <span className='text-[#00df9a]'>Privacy Policy</span>
          </p>
        </div>
        <hr className='my-8 bg-gray-700 border-1 dark:bg-gray-700' />
      </div>
    </div>
  );
};


