"use client"

import React from 'react'

export default function Challenge1() {

  return (
    <div className="md:col-span-12 mt-5">
      <div className="container mx-auto">
        <div className="gap-4">
          <div className="bg-white rounded-lg shadow-md p-5 mb-3">
            <h3 className='text-xl font-bold'>Toggle</h3>
            <p>In this challenge you are to make a button functional.</p>
            <p>On button click toggle, it should (show/hide) the string `Hide Me!` each time it is pressed</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 md:mt-5 flex justify-center">
            <div className="flex items-center mb-5">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Hide Element
              </button>
              <p className="ml-2">Hide Me!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

