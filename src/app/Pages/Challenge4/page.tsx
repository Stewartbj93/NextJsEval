import React from 'react'
import Layout from './Layout';

const Challenge4 = () => {
  return (
    <div className="mt-5">
      <div className='flex flex-col md:flex-row'>
        <div className="w-full md:w-1/2 pr-4">
          <h1 className="text-xl font-bold">Layout</h1>
          <p className="text-sm md:text-base">
            In this challenge, you are to recreate the layout on the right.
          </p>
          <p className="text-sm md:text-base">
            Use reusable components.
          </p>
          <p className="text-sm md:text-base">
            Do not make the same component more than once.
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-blue-500 pb-10 px-2 flex flex-col justify-between">

          {/* component for layout */}
          <Layout />
        </div>
      </div>

      <div className='p-4'>
        <h1>Add Response Here:</h1>
        <div className='bg-blue-500'>

          {/* add here */}
          
        </div>
      </div>

    </div>
  );
}

export default Challenge4
